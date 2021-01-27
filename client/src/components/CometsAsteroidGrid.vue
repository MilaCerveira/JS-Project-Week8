<template>
  <div class="comets">
    <section class="cometHeading">
    <h2 v-if="comets.length">COMETS </h2>
      <img class="categoryImg" src="https://icons-for-free.com/iconfiles/png/512/windows+10+cinema+icons+Comet-1320567860673275026.png"/>
    <h2 v-if="asteroids.length">and ASTEROIDS ({{asteroids.length}})</h2>
      <img class="categoryImg" src="https://icons-for-free.com/iconfiles/png/512/lineal+asteroid-1320109753481319526.png"/>

    </section>
    <div class="cometsGrid">
      <ul class="comet" v-for="(item, index) in comets" :item="item" :key="index">
        <li>{{item.englishName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "comets-asteroid-grid",
  props: ["comets", "asteroids"]
}
</script>

<style>
div.cometsGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

div.comets {
  width: 600px;
}
h2{
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.comet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
}

.categoryImg {
  width: 100px;
  height: 100px;
  padding: 10px;
}

.cometHeading {
  display: flex;
  align-items: center;
}

</style>