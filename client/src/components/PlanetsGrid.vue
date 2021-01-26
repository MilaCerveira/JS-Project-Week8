<template lang="html">
  <div class="planets">
    <h2>List of planets</h2>
    <div class="planetsGrid">
      <planets-grid-item v-for="(item, index) in planets" :item="item" :key="index"></planets-grid-item>
      </div>
  </div>

</template>

<script>
import PlanetsGridItem from "@/components/PlanetsGridItem.vue"

export default {
  name: "planets-grid",
  props: ["planets"],
  components: {
    "planets-grid-item": PlanetsGridItem
  }
}
</script>

<style lang="css" scoped>
div.planetsGrid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  max-width: 600px;
}

li {
    width: 150px;
}

div.planets {
  width: 600px;
}
h2{
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}

</style>