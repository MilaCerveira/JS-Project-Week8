<template lang=html>
  <div id="app">
      <div class='Img'>
  <div style="background-image: url('https://c4.wallpaperflare.com/wallpaper/166/977/136/cool-space-planet-floating-dark-light-wallpaper-preview.jpg')"></div>
  
</div>
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
        <a href='#' 
        v-if="!item.isPlanet"
        v-for="item in sortedAlphabetically"
        :value="item"
        >Planets</a>
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

<div class='bodies-container'>
  <item-dropdown :bodies="bodies"> </item-dropdown>
  <item-detail :items="item"></item-detail>
</div>
      
  

  </div>
</template>

<script>
import ItemDropdown from "@/components/ItemDropdown.vue";
import ItemDetail from "@/components/ItemDetail.vue";

export default {
  name: "App",
  data() {
    return {
      bodies: [],
    };
  },
  components: {
    "item-detail": ItemDetail,
    "item-dropdown": ItemDropdown,
  },
  mounted() {
    fetch("http://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => res.json())
      .then((bodies) => (this.bodies = bodies.bodies));

    this.sortAlphabetically();
  },
  methods: {
    sortAlphabetically() {
      this.bodies.sort((a, b) => (a.englishName > b.englishName ? 1 : -1));
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap");
body {
  font-size: 14px;
  font-family: Sans-Serif;
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
</style>
