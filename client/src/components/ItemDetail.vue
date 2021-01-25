<template>
  <div v-if="item">
    <div>
      <h2>Name: {{ item.englishName }}</h2>
      <p v-if="item.englishName=='Sun'">Type: Star</p>
      <p v-if="item.isPlanet && item.meanRadius>1188">Type: Planet</p>
      <p v-if="item.isPlanet && item.meanRadius<1188">Type: Dwarf Planet</p>
      <p v-if="!item.isPlanet && !item.moons && !item.aroundPlanet && !item.meanRadius > 600000">Type: Asteroid</p>
      <p v-if="!item.isPlanet && !item.moons && !item.aroundPlanet && !item.meanRadius > 600000 && item.density < 1.1">Type: Comet</p>

      <span v-if="!item.isPlanet && item.aroundPlanet">
        <p>Type: Satellite</p>
        <p>Orbits planet: {{ item.aroundPlanet.planet }}</p>
      </span> 
      <ul v-if="item.isPlanet && item.moons">
        <p>Moons:</p>
        <li v-if="item.moons" v-for="mooon in item.moons">{{ mooon.moon }}</li>
      </ul>
      <form v-on:submit.prevent="saveItem">
        <input type="submit" value="Add to Favourites" />
      </form>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main.js";
import FavouriteService from "@/services/FavouriteService.js";

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
  methods: {
    saveItem: function () {
      eventBus.$emit("item-to-save", this.item);
    },
  },
};
</script>