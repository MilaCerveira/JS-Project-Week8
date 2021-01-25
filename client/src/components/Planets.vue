<template lang="html">
    <div class="planets">
      <h2>List of planets</h2>
    <ul>
      <li v-for="planet in planets">
        <span>
        <img class="icon" v-if="planet.englishName == 'Mercury'" src="@/assets/Planets/Mercury.png" />
        <img class="icon" v-if="planet.englishName == 'Venus'" src="@/assets/Planets/Venus.png" />
        <img class="icon" v-if="planet.englishName == 'Earth'" src="@/assets/Planets/Earth.png" />
        <img class="icon" v-if="planet.englishName == 'Mars'" src="@/assets/Planets/Mars.png" />
        <img class="icon" v-if="planet.englishName == 'Saturn'" src="@/assets/Planets/Saturn.png" />
        <img class="icon" v-if="planet.englishName == 'Jupiter'" src="@/assets/Planets/Jupiter.png" />
        <img class="icon" v-if="planet.englishName == 'Uranus'" src="@/assets/Planets/Uranus.jpg" />
        <img class="icon" v-if="planet.englishName == 'Neptune'" src="@/assets/Planets/Neptune.png" />
        <img class="icon" v-if="planet.englishName == 'Pluto'" src="@/assets/Planets/Pluto.jpg" />
        <p v-if="planet.englishName">{{planet.englishName}}</p>
        </span>
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
        if (a.semimajorAxis < b.semimajorAxis) return -1;
        if (a.semimajorAxis > b.semimajorAxis) return 1;
        return 0;
      }
      return this.planets.sort(compare)
    }
  }
}
</script>

<style lang="css" scoped>
.icon {
  width: 30px
}

span {
  display: flex;
  align-items: center;
}
.icon {
width: 30px;
height: 30px;
padding: 3px
}


</style>