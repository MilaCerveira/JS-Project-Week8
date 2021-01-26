<template lang="html">
  <div id="itemDetail" v-if="item">
    <h2 v-model="name">{{item.englishName}}</h2>
      <p v-if="item.englishName == 'Sun'">Type: Star</p>
      <p v-if="item.isPlanet && item.meanRadius > 1188">Type: Planet</p>
      <p v-if="item.isPlanet && item.meanRadius > 1188 && item.density >= 3">Type of planet: Rocky</p>
      <p v-if="item.isPlanet && item.meanRadius > 1188 && item.density < 3">Type of planet: Gaseous</p>
      <p v-if="item.isPlanet && item.meanRadius < 1188">Type: Dwarf item</p>
      <p v-if="!item.isPlanet && !item.moons && !item.aroundPlanet && !item.meanRadius > 600000">Type: Asteroid</p>
      <p v-if="!item.isPlanet && !item.moons && !item.aroundPlanet && !item.meanRadius > 600000 && item.density < 1.1">Type: Comet</p>

      <span v-if="!item.isPlanet && item.aroundPlanet">
        <p>Type: Satellite</p>
        <p>Orbits planet: {{ item.aroundPlanet.item }}</p>
      </span>

      <div class="moonGrid" v-if="item.isPlanet && !item.moons">
        <p>Satellites: None</p>
      </div>

      <div class="moonGrid" v-if="item.isPlanet && item.moons">
        <p>Satellites:</p>
        <div class="moons">
          <ul v-if="item.moons" v-for="mooon in item.moons"> 
            <li>{{ mooon.moon }}</li>
          </ul>
        </div>
      </div>
      <form v-on:submit.prevent="saveItem">
        <button type="submit" method="post">Add to Favourites</button>
      </form>

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
      name: "",
      type: "",
      discoveredBy: "",
    };
  },
  mounted() {
    eventBus.$on("selected-item", (item) => {
      this.item = item;
    });
  },
  methods: {
    saveItem: function (e) {
      e.preventDefault();
      const favourite = this.item;
      eventBus.$emit("item-to-save", this.item);
    },
  },
};
</script>

<style>
#itemDetail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.moons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>