<template lang="html">
  <div class="planets">
    <h2>List of planets</h2>
    <div class="planetsGrid">
      <planets-grid-item v-for="(planet, index) in planets" :planet="planet" :key="index"></planets-grid-item>
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

</style>