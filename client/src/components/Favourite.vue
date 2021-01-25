<template>
  <div class="fav-list-tem">
    <li>
      <p v-if="item.englishName">{{ item.englishName }}</p>
      <p v-if="!item.englishName">{{ item.alternativeName }}</p>
      <button v-on:click="deleteFavourite">Remove</button>
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