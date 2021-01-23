<template>
  <div v-if="item">
    <div>
      <h2>Name: {{ item.englishName }}</h2>
      <p v-if="item.englishName=='Sun'">Type: star</p>
      <p v-if="item.isPlanet && item.meanRadius>1188">Type: Planet</p>
      <p v-if="item.isPlanet && item.meanRadius<1188">Type: Dwarf Planet</p>
      <p v-if="!item.isPlanet && !item.moons && !item.aroundPlanet && !item.meanRadius > 600000">Type: Asteroid</p>

      <span v-if="!item.isPlanet && item.aroundPlanet && item.englishName!='Sun' && item.id !='halley'">
        <p>Type: Satellite</p>
        <p>Orbits planet: {{ item.aroundPlanet.planet }}</p>
      </span> 
      <ul v-if="item.isPlanet && item.moons">
        <p>Moons:</p>
        <li v-if="item.moons" v-for="mooon in item.moons">{{ mooon.moon }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main.js";

export default {
  name: "item-detail",
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    eventBus.$on("selected-item", (item) => {
      this.item = item;
    });
  },
};
</script>