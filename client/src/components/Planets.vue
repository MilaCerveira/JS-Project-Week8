<template lang="html">
    <div class="planets">
      <h2>List of planets</h2>
    <ul>
      <li v-for="planet in planets">
        <p v-if="planet.englishName">{{planet.englishName}}</p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "planet-list",
  props: ["bodies"],
  data () {
    return {
      planets: []
    }
  },
  components: {
    // "planet-list-item": PlanetListItem
  },
  computed: {
    getPlanets: function() {
      const result = this.bodies.filter(body => {return body.isPlanet == true && body.meanRadius>1188}) 
      this.planets = result
    },
    sortedByDistanceFromSun: function () {
      function compare(a, b)  {
        if (a.sideralOrbit < b.sideralOrbit) return -1;
        if (a.sideralOrbit > b.sideralOrbit) return 1;
        return 0;
      }
      return this.planets.sort(compare)
    }
  }
}
</script>

<style lang="css" scoped>

</style>