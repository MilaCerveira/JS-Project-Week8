<template lang="html">
  <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <audio autoplay ref="audio" src="landing.wav"><source src="landing.wav"></audio>
    <div class='Img'>
      <div style="background-image: url('https://c4.wallpaperflare.com/wallpaper/166/977/136/cool-space-planet-floating-dark-light-wallpaper-preview.jpg')">
      </div>
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
      <li>
        <a  href='#' id="scrollTo" v-scroll-to="{element: '#sun'}">Sun</a>
      </li>
      </li>
      <li>
        <a href='#' id="scrollTo" v-scroll-to="{element: '#allPlanets'}">Planets</a>
      </li>
      <li>
        <a href='#' id="scrollTo" v-scroll-to="{element: '#allDwarfPlanets'}">Dwarf Planets</a>
      </li>
      <li>
        <a href='#' id="scrollTo" v-scroll-to="{element: '#allAsteroidss'}">Asteroids</a>
      </li>
      <li>
        <a href='#' id="scrollTo" v-scroll-to="{element: '#allComets'}">Comets</a>
      </li>
      <li>
        <a  href='#' id="scrollTo" v-scroll-to="{element: '.quiz-title'}">Quiz</a>
      </li>
      <li>
        <a  href='#' id="scrollTo" v-scroll-to="{element: '#news'}">News</a>
      </li>
      <li>
        <a  href='#' id="scrollTo" v-scroll-to="{element: '.label-container'}">Gallery</a>
      </li>
      <li>
        <a  href='#' id="scrollTo" v-scroll-to="{element: '#signUp'}">Signup</a>
      </li>
    </ul>
  </nav>
</header>
</div>

</template>

<script>
export default {
  name: "nav-bar"

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100&display=swap");
body {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  margin-left: 40px;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.dropDownBlock {
  display: flex;
}
.dropDown {
  padding: 4px;
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
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.308);
  display: block;
  font-weight: bold;
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