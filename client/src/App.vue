<template lang="html">
  <div id="app">
<nav-bar></nav-bar>
<carousel></carousel>

<div class='bodies-container'>
  <span class="dropDownBlock">Browse all celestial bodies:<item-dropdown class="dropDown" :bodies="bodies"> </item-dropdown></span>
  <item-detail :items="item"></item-detail>
  <sun-item id="sun" :sun="sun"></sun-item>
  <planets-grid id="allPlanets" :planets="planets"></planets-grid>
  <dwarf-planets-grid id="allDwarfPlanets" :dwarfPlanets="dwarfPlanets"></dwarf-planets-grid>
  <asteroids-grid id="allAsteroids" :asteroids="asteroids"></asteroids-grid>
</div>
<scroll-to-top></scroll-to-top>

      <!-- <h2> NASA's image of the day </h2>
  <img id='randomImg' :src="imgUrl"></img> -->
  
 <div class="favourite-list">
    <h2>Favourite Celestial Bodies</h2>
    <favourite-list :item="item" /> 
  </div>
  
<div class='quiz-title'> <h2> Quiz Time </h2> </div>
<quiz :key="componentKey"></quiz>
<button id="refresh-quiz" v-on:click="refreshQuiz">Refresh Quiz</button>

<NewsList id="news"/>

<div class='label-container'>
  
<img src="https://freepngimg.com/download/space/23420-7-nasa-file.png" alt="Nasa Icon"style="width:40px;height:40px;">
<div class='images-title'>
<h2> Images </h2>
</div>
</div>


<img v-if="imgUrls" id='randomImg' :src="imgUrls[0].hdurl"></img>
<div class= 'signup-form'>
<h2> Join our mailing list </h2>
</div>
<signup-form id="signUp"></signup-form>
<footersm> </footersm>

</div>
</template>

<script>
import { eventBus } from "./main.js";

import VueScrollTo from "./main.js";
import ItemDropdown from "@/components/ItemDropdown.vue";
import ItemDetail from "@/components/ItemDetail.vue";
import SunItem from "@/components/SunItem.vue";
import PlanetsGrid from "@/components/PlanetsGrid.vue";
import DwarfPlanetsGrid from "@/components/DwarfPlanetsGrid";
import AsteroidsGrid from "@/components/AsteroidsGrid.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import NavBar from "@/components/NavBar.vue";

import NewsList from "@/components/NewsList";

// import PlanetList from "@/components/PlanetList.vue";
import FavouriteService from "@/services/FavouriteService.js";
import Carousel from "@/components/Carousel.vue";
import Quiz from "@/components/Quiz.vue";

import FavouriteList from "@/components/FavouriteList.vue";

import SignUpForm from "@/components/SignUpForm.vue";
import Footersm from "@/components/Footersm.vue";

export default {
  name: "App",
  data() {
    return {
      bodies: [],
      planets: [],
      dwarfPlanets: [],
      asteroids: [],
      sun: {},
      imgUrls: [],

      NewsList: NewsList,

      componentKey: 0,
      imgUrl: "",
      favouriteItems: [],
      item: null,
    };
  },
  components: {
    "item-detail": ItemDetail,
    "item-dropdown": ItemDropdown,
    "scroll-to-top": ScrollToTop,
    "nav-bar": NavBar,
    carousel: Carousel,
    quiz: Quiz,
    planets: PlanetsGrid,
    "sun-item": SunItem,
    "planets-grid": PlanetsGrid,
    "dwarf-planets-grid": DwarfPlanetsGrid,
    "asteroids-grid": AsteroidsGrid,
    "favourite-list": FavouriteList,
    footersm: Footersm,
    NewsList: NewsList,

    "signup-form": SignUpForm,
  },
  mounted() {
    fetch("http://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => res.json())
      .then((bodies) => {
        this.bodies = bodies.bodies;
        this.planets = this.getPlanets(bodies.bodies);
        this.sortedByDistanceFromSun();
        this.sun = this.getSun(bodies.bodies);
        this.dwarfPlanets = this.getDwarfPlanets(bodies.bodies);
        this.asteroids = this.getAsteroids(bodies.bodies);
      });

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FKGwNutpdJ2Irx3SQCknZlIKIwwVYRlY9WvheVfu&count=20"
    )
      .then((res) => res.json())
      .then((data) => (this.imgUrls = data));

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FKGwNutpdJ2Irx3SQCknZlIKIwwVYRlY9WvheVfu&count=20"
    )
      .then((res) => res.json())

      .then((data) => (this.imgUrl = data));

    eventBus.$on("item-to-save", (item) => {
      if (!this.favouriteItems.includes(item)) {
        this.favouriteItems.push(item);
      }
    });

    eventBus.$on("selected-item", (item) => {
      this.selectedItem = item;
    });
  },
  computed: {
    randomImage() {
      let randomImg = this.imgUrl[
        Math.floor(Math.random() * this.imgUrl.length)
      ];
      this.imgUrl = randomImg.hdurl;
    },
  },
  methods: {
    refreshQuiz() {
      this.componentKey += 1;
    },
    getPlanets: function (bodies) {
      let result = bodies.filter((body) => {
        return body.isPlanet == true && body.meanRadius > 1188;
      });
      return result;
    },
    getSun: function (bodies) {
      let result = bodies.find((body) => body.englishName == "Sun");
      return result;
    },
    getDwarfPlanets: function (bodies) {
      let result = bodies.filter((body) => {
        return body.isPlanet == true && body.meanRadius < 1188;
      });
      return result;
    },
    getAsteroids: function (bodies) {
      let result = bodies.filter((body) => {
        return (!body.isPlanet && !body.moons && !body.aroundPlanet && body.meanRadius < 600000);
      });
      return result
    },


    sortedByDistanceFromSun: function () {
      function compare(a, b) {
        if (a.semimajorAxis < b.semimajorAxis) return -1;
        if (a.semimajorAxis > b.semimajorAxis) return 1;
        return 0;
      }
      return this.planets.sort(compare);
    },
  },
};
</script>

<style>

#randomImg {
  height: 800px;
  width: 100%;
}
button {
  color: white;
  background: #6f58c9;
  border: 2px solid #6f58c9;
  font-size: 12px;
  padding: 5px 5px;
  font-weight: normal;
  margin: 4px 0;
  margin-right: 12px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  min-width: 80px;
  border-radius: 10px;
}
button:hover,
button:active {
  color: #fff;
  background: #7e78d2;
}
button#refresh-quiz {
  margin-left: 40px;
}
.bodies-container {
  margin-top: 40px;
}
.label-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
.label-container > img {
  float: left;
  margin-bottom: 20px;
}
.quiz-title {
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  position: relative;
}

.quiz-title::before {
  content: " ";
  position: absolute;
  width: 4em;
  background: #00bfff;
  height: 0.4em;
  bottom: 0;
  z-index: -1;
  margin-left: -0.1em;
}
.images-title {
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  position: relative;
}

.images-title::before {
  content: " ";
  position: absolute;
  width: 5.8em;
  background: #00bfff;
  height: 0.4em;
  bottom: 0;
  z-index: -1;
  margin-left: -0.1em;
}
li {
  list-style: none;
}
.favourite-list {
  text-transform: uppercase;
  position: relative;
}
.signup-form {
  text-align: center;
  text-transform: uppercase;
  position: relative;
}
.signup-form::before {
  content: " ";
  position: absolute;
  width: 9em;
  background: #00bfff;
  height: 0.4em;
  bottom: 0;
  z-index: -1;
  margin-left: -0.1em;
}

</style>
