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

.favourite-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.favourite-container {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column; */
}
.favLi {
  max-width: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.favouriteHeading {
  text-align: center;
}

.favButton {
  max-width: 40px !important;
}

.fav-list-item {
  /* display: flex;
  flex-flow: column wrap; */
}
</style>