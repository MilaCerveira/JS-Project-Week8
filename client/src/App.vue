<template lang="html">
  <div id="app">
<<<<<<< HEAD
    <div class='Img'>
      <div style="background-image: url('https://c4.wallpaperflare.com/wallpaper/166/977/136/cool-space-planet-floating-dark-light-wallpaper-preview.jpg')">
      </div>  
    </div>
=======
    <audio autoplay ref="audio" src="landing.wav"><source src="landing.wav"></audio>
      <div class='Img'>
  <div style="background-image: url('https://c4.wallpaperflare.com/wallpaper/166/977/136/cool-space-planet-floating-dark-light-wallpaper-preview.jpg')"></div>
  
</div>
>>>>>>> main
<header>
  <div>
    <section class = "top">
    <h1>
      Space
    </h1>
    <p>
      The final frontier
    </p>
    </section>
  </div>
  <nav role='navigation'>
    <ul>
      <li>
        <a class='active' href='#'>Home</a>
      </li>
      <li>
        <a href='#'>Planets</a>
      </li>
      <li>
        <a href='#'>Quiz</a>
      </li>
      <li>
        <a href='#'>Gallery</a>
      </li>
      <li>
        <a href='#'>Signup</a>
      </li>
    </ul>
  </nav>
</header>

<<<<<<< HEAD
    <div class='bodies-container'>
      <item-dropdown :bodies="bodies"> </item-dropdown>
      <item-detail :items="item"></item-detail>
      <!-- <planet-list /> -->
    </div>
      
=======
<carousel></carousel>

<div class='bodies-container'>
  <item-dropdown :bodies="bodies"> </item-dropdown>
  <item-detail :items="item"></item-detail>
</div>
      <!-- <h2> NASA's image of the day </h2>
  <img id='randomImg' :src="imgUrl"></img> -->
>>>>>>> main
  
  <div class="favourite-list">
    <h2>Favourite Celestial Bodies</h2>
    <div class="fav-list-tem">
      <li v-for="item in favouriteItems">
        <p v-if="item.englishName">{{item.englishName}}</p>
        <p v-if="!item.englishName">{{item.alternativeName}}</p>

      </li>
    </div>
  </div>
  
<div class='quiz-title'> <h2> Quiz Time </h2> </div>
<quiz />
<div class='label-container'>
<img src="https://freepngimg.com/download/space/23420-7-nasa-file.png" alt="Nasa Icon"style="width:40px;height:40px;">
<div class='images-title'>
<h2> Images </h2>
</div>
</div>
<img id='randomImg' :src="imgUrl"></img>

</div>



</template>

<script>
import ItemDropdown from "@/components/ItemDropdown.vue";
import ItemDetail from "@/components/ItemDetail.vue";
<<<<<<< HEAD
// import PlanetList from "@/components/PlanetList.vue";
=======
import { eventBus } from "./main.js";
import FavouriteService from "@/services/FavouriteService.js";
import Carousel from "@/components/Carousel.vue";
import Quiz from "@/components/Quiz.vue";
>>>>>>> main

export default {
  name: "App",
  data() {
    return {
      bodies: [],
      imgUrls: [],
      imgUrl: "",
      favouriteItems: [],
    };
  },
  components: {
    "item-detail": ItemDetail,
    "item-dropdown": ItemDropdown,
<<<<<<< HEAD
    // "planet-list": PlanetList
=======
    carousel: Carousel,
    quiz: Quiz,
>>>>>>> main
  },
  mounted() {
    fetch("http://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => res.json())
      .then((bodies) => (this.bodies = bodies.bodies));

<<<<<<< HEAD
=======
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=FKGwNutpdJ2Irx3SQCknZlIKIwwVYRlY9WvheVfu&count=20"
    )
      .then((res) => res.json())
      .then((data) => (this.imgUrls = data));

    this.sortAlphabetically();

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
  },
  methods: {
    sortAlphabetically() {
      this.bodies.sort((a, b) => (a.englishName > b.englishName ? 1 : -1));
    },
>>>>>>> main
  },
  computed: {
    randomImage() {
      let randomImg = this.imgUrl[
        Math.floor(Math.random() * this.imgUrl.length)
      ];
      this.imgUrl = randomImg.hdurl;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap");
body {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.Img > div {
  width: 100%;
  height: 440px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

header {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0px 20px;
}
header > div {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 150px;
  height: 380px;
  text-align: center;
  color: White;
}
header p {
  font-size: 2em;
  margin-bottom: 0.7em;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-weight: 600;
  font-size: 3.4em;
  margin-bottom: 0.2em;
}
nav {
  max-width: 600px;
  margin: 0 auto;
  height: 60px;
  border-top: 2px rgba(255, 255, 255, 0.308) solid;
}
nav ul li {
  display: inline-block;
  margin-right: 35px;
}
nav ul li a {
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.308);
  display: block;
}
nav ul li a.active {
  box-shadow: 0px -1px 0px #fff;
}
nav ul li a.active,
nav ul li a:hover {
  color: #fff;
}
.quote-container {
  text-align: center;
}
.top {
  animation: fadeIn 4s forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-3em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#randomImg {
  height: 800px;
  width: 100%;
}
button {
  color: white;
  background: #6f58c9;
  border: 2px solid #6f58c9;
  font-size: 17px;
  padding: 7px 12px;
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
.bodies-container {
  margin-left: 40px;
  margin-top: 40px;
}
.label-container {
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.label-container > img {
  float: left;
  margin-bottom: 20px;
}
.quiz-title {
  margin-left: 40px;
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
  margin-left: 40px;
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
</style>
