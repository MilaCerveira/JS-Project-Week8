<template>
  <div class="comets">
    <section class="cometHeading">
      <h2>cometS</h2>
      <img class="categoryImg" src="@/assets/Comet.png"/>
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
  name: "comets-grid",
  props: ["comets"]
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