<template lang="html">
  <ul class="planet" v-on:click="displayInfo" v-scroll-to="{element: '#itemDetail'}">
    <img class="icon" v-if="item.englishName == 'Mercury'" src="@/assets/Planets/Mercury.png" />
    <img class="icon" v-if="item.englishName == 'Venus'" src="@/assets/Planets/Venus.png" />
    <img class="icon" v-if="item.englishName == 'Earth'" src="@/assets/Planets/Earth.png" />
    <img class="icon" v-if="item.englishName == 'Mars'" src="@/assets/Planets/Mars.png" />
    <img class="icon" v-if="item.englishName == 'Saturn'" src="@/assets/Planets/Saturn.png" />
    <img class="icon" v-if="item.englishName == 'Jupiter'" src="@/assets/Planets/Jupiter.png" />
    <img class="icon" v-if="item.englishName == 'Uranus'" src="@/assets/Planets/Uranus.jpg" />
    <img class="icon" v-if="item.englishName == 'Neptune'" src="@/assets/Planets/Neptune.png" />
    <img class="icon" v-if="item.englishName == 'Pluto'" src="@/assets/Planets/Pluto.png" />
    <li class="planetsGrid" v-on:click="displayInfo">{{item.englishName}}</li>
  </ul>
</template>

<script>

import { eventBus } from '../main.js';

export default {
  name: "planets-grid-item",
  props: ["item"],
  methods: {
    displayInfo(){
      eventBus.$emit("selected-item", this.item)
    }
  }
}
</script>

<style>

.icon {
width: 50px;
height: 50px;
padding: 3px;
}

.planet {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>