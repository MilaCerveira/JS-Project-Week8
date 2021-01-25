<template>
  <div class="favourite-list">
    <h2>Favourite Celestial Bodies</h2>
    <div class="fav-list-tem">
      <li v-for="item in favouriteItems">
        <p v-if="item.englishName">{{ item.englishName }}</p>
        <p v-if="!item.englishName">{{ item.alternativeName }}</p>
        <button v-on:click="deleteFavourite">Remove from Favourites</button>
      </li>
    </div>
  </div>
</template>

<script>
import FavouriteService from "@/services/FavouriteService.js";
import { eventBus } from "@/main.js";
import ItemDetail from "@/ItemDetail.vue";

export default {
  name: "favourite-list",
  props: [],
  data() {
    return {
      favouriteItems: [],
    };
  },
  mounted() {
    eventBus.$on("item-to-save", (item) => {
      if (!this.favouriteItems.includes(item)) {
        this.favouriteItems.push(item);
      }
    });

    FavouriteService.getFavourites().then(
      (favourites) => (this.favouriteItems = favourites)
    );
  },
};
</script>

<style>
</style>