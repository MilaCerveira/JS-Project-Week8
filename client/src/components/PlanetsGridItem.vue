<template lang="html">
  <ul>
    <img class="icon" v-if="planet.englishName == 'Mercury'" src="@/assets/Planets/Mercury.png" />
    <img class="icon" v-if="planet.englishName == 'Venus'" src="@/assets/Planets/Venus.png" />
    <img class="icon" v-if="planet.englishName == 'Earth'" src="@/assets/Planets/Earth.png" />
    <img class="icon" v-if="planet.englishName == 'Mars'" src="@/assets/Planets/Mars.png" />
    <img class="icon" v-if="planet.englishName == 'Saturn'" src="@/assets/Planets/Saturn.png" />
    <img class="icon" v-if="planet.englishName == 'Jupiter'" src="@/assets/Planets/Jupiter.png" />
    <img class="icon" v-if="planet.englishName == 'Uranus'" src="@/assets/Planets/Uranus.jpg" />
    <img class="icon" v-if="planet.englishName == 'Neptune'" src="@/assets/Planets/Neptune.png" />
    <img class="icon" v-if="planet.englishName == 'Pluto'" src="@/assets/Planets/Pluto.png" />
    <li class="planetsGrid" v-on:click="displayInfo">{{planet.englishName}}</li>
  </ul>
</template>

<script>

import { eventBus } from '../main.js';
export default {
  name: "planets-grid-item",
  props: ["planet"],
  methods: {
    displayInfo(){
      eventBus.$emit("planet-selected", this.planet)
    }
  }

}
</script>

<style>
.icon {
  width: 30px
}
ul {
  display: flex;
  align-items: center;
  padding: 5px;
  width: 150px;

}
.icon {
width: 50px;
height: 50px;
padding: 3px
}


</style>