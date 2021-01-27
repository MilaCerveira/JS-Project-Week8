<template>
  <div class="fav-list-item">
    <li class="favLi">
      <p v-if="item.englishName">{{ item.englishName }}</p>
      <p v-if="!item.englishName">{{ item.alternativeName }}</p>
      <button class="favButton" v-on:click="deleteFavourite">X</button>
    </li>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import FavouriteService from "@/services/FavouriteService.js";

export default {
  name: "favourite",
  props: ["item"],
  methods: {
    deleteFavourite() {
      FavouriteService.deleteFavourite(this.item._id).then(() =>
        eventBus.$emit("favourite-deleted", this.item._id)
      );
    },
  },
};
</script>

<style>
</style>