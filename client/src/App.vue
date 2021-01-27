<template lang="html">
  <div id="app">

<nav-bar></nav-bar>
<carousel></carousel>


<div class='bodies-container'>
  <sun-item id="sun" :sun="sun"></sun-item>
  <span class="dropDownBlock">Browse all celestial bodies:<item-dropdown class="dropDown" :bodies="bodies"> </item-dropdown></span>
  <item-detail id="itemDetail" :items="item"></item-detail>
  <planets-grid id="allPlanets" :planets="planets"></planets-grid>
  <dwarf-planets-grid id="allDwarfPlanets" :dwarfPlanets="dwarfPlanets"></dwarf-planets-grid>
  <comets-asteroid-grid id="allComets" :comets="comets" :asteroids="asteroids"></comets-asteroid-grid>
</div>
<scroll-to-top></scroll-to-top>

      <!-- <h2> NASA's image of the day </h2>
  <img id='randomImg' :src="imgUrl"></img> -->
  
<div class="sidenav">
 <div class="favourite-list">
    <h2 class="favouriteHeading">Favourite Celestial Bodies</h2>
    <favourite-list :item="item" /> 
    </div>
  </div>
  
  
<carousel-3d>
  <slide :index="0">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tracy_Caldwell_Dyson_in_Cupola_ISS.jpg/1024px-Tracy_Caldwell_Dyson_in_Cupola_ISS.jpg" class="carousel-image" />
  </slide>
  <slide :index="1" class="text-slide">
    <img src="https://s1.best-wallpaper.net/wallpaper/m/1307/Beautiful-cosmic-space-planets-stars_m.webp" class="carousel-image" />
  </slide>
  <slide :index="2">
    <img src="https://content.fortune.com/wp-content/uploads/2020/03/NASA-Hiring-Astronauts-2020.jpg" class="carousel-image" />
  </slide>
  <slide :index="3">
    <img src="https://d.newsweek.com/en/full/1522782/anne-mcclain-space-crime-astronaut.jpg" class="carousel-image" />
  </slide>
  <slide :index="4">
    <img src="https://thumbs.dreamstime.com/b/spacecraft-elements-image-furnished-nasa-earth-96063212.jpg" class="carousel-image" />
  </slide>
  <slide :index="5">
    <img src="https://thumbs.dreamstime.com/b/astronaut-outer-space-porthole-background-earth-elements-image-furnished-nasa-astronaut-outer-131582688.jpg" class="carousel-image" />
  </slide>
  <slide :index="6">
    <img src="https://www.narrativepathsjournal.com/wp-content/uploads/2019/10/NASA-made-all-its-scientific-research-available-for-free-2.jpg" class="carousel-image" />
  </slide>
  <slide :index="7">
    <img src="https://pbs.twimg.com/media/D4w9CEBXsAE9-Tv.jpg" class="carousel-image" />
  </slide>
</carousel-3d>
<div class='quiz-title'> <h2> Quiz Time </h2> </div>
<quiz :key="componentKey"></quiz>
<button id="refresh-quiz" v-on:click="refreshQuiz">Refresh Quiz</button>

<NewsList id="news"/>
<div class='charlab-container'>
  <br> 
  
<h2> Radius of Planets</h2>
</div>
<Chart />
<div class='label-container'>
  
<img src="https://freepngimg.com/download/space/23420-7-nasa-file.png" alt="Nasa Icon"style="width:40px;height:40px;">
<div class='images-title'>
<h2> Images </h2>
</div>
</div>

<!-- <Chart /> -->
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
import CometsAsteroidGrid from "@/components/CometsAsteroidGrid.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
import NavBar from "@/components/NavBar.vue";

import NewsList from "@/components/NewsList";
import Chart from "@/components/Chart";

// import PlanetList from "@/components/PlanetList.vue";
import FavouriteService from "@/services/FavouriteService.js";
import Carousel from "@/components/Carousel.vue";
import Quiz from "@/components/Quiz.vue";

import FavouriteList from "@/components/FavouriteList.vue";

import SignUpForm from "@/components/SignUpForm.vue";
import Footersm from "@/components/Footersm.vue";
import { Carousel3d, Slide } from 'vue-carousel-3d';

import config from "@/config.js";

export default {
  name: "App",
  data() {
    return {
      bodies: [],
      planets: [],
      dwarfPlanets: [],
      asteroids: [],
      comets: [],
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
    "comets-asteroid-grid": CometsAsteroidGrid,
    "favourite-list": FavouriteList,
    footersm: Footersm,
    NewsList: NewsList,
    Chart: Chart,

    "signup-form": SignUpForm,
    Carousel3d, 
    Slide
  },
  mounted() {

    const api_key = config.api_key_1;

    fetch("http://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => res.json())
      .then((bodies) => {
        this.bodies = bodies.bodies;
        this.planets = this.getPlanets(bodies.bodies);
        this.sortedByDistanceFromSun();
        this.sun = this.getSun(bodies.bodies);
        this.dwarfPlanets = this.getDwarfPlanets(bodies.bodies);
        this.asteroids = this.getAsteroids(bodies.bodies);
        this.comets = this.getComets(bodies.bodies);
      });

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=20`
    )
      .then((res) => res.json())
      .then((data) => (this.imgUrls = data));

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=20`
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
    getComets: function (bodies) {
      let result = bodies.filter((body) => {
        return (!body.isPlanet && !body.moons && !body.aroundPlanet && body.meanRadius < 600000 && body.density < 1.1);
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
.charlab-container{
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  text-transform: uppercase;
  position: relative;
  padding-top: 20px;
}
.charlab-container::before {
  content: " ";
  position: absolute;
  width: 5.8em;
  background: #00bfff;
  height: 0.4em;
  bottom: 0;
  z-index: -1;
  margin-left: -0.1em;
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

.carousel-image {
  width: 100%;
  height: 100%;
}

.sidenav {
  height: auto; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgb(192, 187, 187); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 20px; */
  margin: 5px;
}

#app {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}


</style>
