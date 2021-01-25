<template>
  <div v-if="item">
    <div>
      <h2>name:{{ item.englishName }}</h2>
      <p v-if="item.moons">moons: {{ item.moons }}</p>
      <p v-if="!item.moons">aroundPlanet: {{ item.aroundPlanet.planet }}</p>
      <form v-on:submit.prevent="saveItem">
        <input type="submit" method="post" value="Add to Favourites" />
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