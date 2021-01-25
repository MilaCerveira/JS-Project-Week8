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
        <img class="icon" v-if="planet.englishName == 'Pluto'" src="@/assets/Planets/Pluto.png" />
        <p v-if="planet.englishName">{{planet.englishName}}</p>
        </span>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "planets-grid",
  props: ["planets"],
  components: {
    // "planet-list-item": PlanetListItem
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
  padding: 5px;
  width: 150px;

}
.icon {
width: 50px;
height: 50px;
padding: 3px
}

ul {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
}

li {
    width: 150px;
}

div.planets {
  width: 600px;
}


</style>