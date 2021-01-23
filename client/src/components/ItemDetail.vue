<template>
  <div v-if="item">
    <div>
      <h2>name:{{ item.englishName }}</h2>
      <p v-if="item.moons">moons: {{ item.moons }}</p>
      <p v-if="!item.moons">aroundPlanet: {{ item.aroundPlanet.planet }}</p>
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