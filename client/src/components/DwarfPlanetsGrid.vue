<template lang="html">
  <div class="dwarfPlanets">
    <h2 v-if="dwarfPlanets.length">DWARF PLANETS ({{dwarfPlanets.length}})</h2>
    <div class="dwarfPlanetsGrid">
        <ul class="dwarfPlanet" v-for="(item, index) in dwarfPlanets" :item="item" :key="index">
          <img class="icon" v-if="item.englishName == '1 Ceres'" src="@/assets/DwarfPlanets/Ceres.png" />
          <img class="icon" v-if="item.englishName == '136199 Eris'" src="@/assets/DwarfPlanets/Eris.png" />
          <img class="icon" v-if="item.englishName == '136108 Haumea'" src="@/assets/DwarfPlanets/Haumea.png" />
          <img class="icon" v-if="item.englishName == '136472 Makemake'" src="@/assets/DwarfPlanets/Makemake.png" />
          <li>{{item.englishName}}</li>
          
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "dwarf-planets-grid",
  props: ["dwarfPlanets"]
}
</script>

<style>
div.dwarfPlanetsGrid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  max-width: 600px;
}

div.dwarfPlanets {
  width: 600px;
}
h2{
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.dwarfPlanet {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>