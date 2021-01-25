<template>
  <div class="favourite-container">
    <favourite v-for="item in favouriteItems" :item="item" />
  </div>
</template>

<script>
import FavouriteService from "@/services/FavouriteService.js";
import { eventBus } from "@/main.js";
import Favourite from "./Favourite.vue";

export default {
  name: "favourite-list",
  components: {
    favourite: Favourite,
  },
  data() {
    return {
      favouriteItems: [],
    };
  },
  mounted() {
    eventBus.$on("item-to-save", (item) => {
      if (!this.favouriteItems.includes(item)) {
        FavouriteService.saveFavourite(item).then(
          this.favouriteItems.push(item)
        );
      }
    });

    eventBus.$on("favourite-deleted", (id) => {
      let index = this.favouriteItems.findIndex((item) => item._id === id);
      this.favouriteItems.splice(index, 1);
    });

    FavouriteService.getFavourites().then(
      (favourites) => (this.favouriteItems = favourites)
    );
  },
};
</script>

<style>
.favourite-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
</style>