<template lang="html">
  <div id="planetDetail" v-if="planet">
    <p><span></span>{{planet.englishName}}</p>
    <p><span></span></p>
      <p v-if="planet.englishName == 'Sun'">Type: Star</p>
      <p v-if="planet.isPlanet && planet.meanRadius > 1188">Type: Planet</p>
      <p v-if="planet.isPlanet && planet.meanRadius > 1188 && planet.density >= 3">Type of planet: Rocky</p>
      <p v-if="planet.isPlanet && planet.meanRadius > 1188 && planet.density < 3">Type of planet: Gaseous</p>
      <p v-if="planet.isPlanet && planet.meanRadius < 1188">Type: Dwarf Planet</p>
      <p v-if="!planet.isPlanet && !planet.moons && !planet.aroundPlanet && !planet.meanRadius > 600000">Type: Asteroid</p>
      <p v-if="!planet.isPlanet && !planet.moons && !planet.aroundPlanet && !planet.meanRadius > 600000 && planet.density < 1.1">Type: Comet</p>

      <span v-if="!planet.isPlanet && planet.aroundPlanet">
        <p>Type: Satellite</p>
        <p>Orbits planet: {{ planet.aroundPlanet.planet }}</p>
      </span>

      <div class="moonGrid" v-if="planet.isPlanet && planet.moons">
        <p>Moons:</p>
        <div class="moons">
          <ul v-if="planet.moons" v-for="mooon in planet.moons"> 
            <li>{{ mooon.moon }}</li>
          </ul>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "planet-detail",
  props: ["planet"]
}
</script>

<style>

#planetDetail {
  border: 1px black solid; 
}

.moons {
display: flex;
flex-direction: row;
flex-wrap: wrap;
} 

/* .moons {
  display: grid;
  grid-template-rows: 1fr fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: column;
} */

</style>