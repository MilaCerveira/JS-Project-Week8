<template>
  <div class="asteroids">
    <section class="asteroidHeading">
      <h2>ASTEROIDS</h2>
      <img class="categoryImg" src="@/assets/Asteroid.png"/>
    </section>
    <div class="asteroidsGrid">
      <ul class="asteroid" v-for="(item, index) in asteroids" :item="item" :key="index">
        <li>{{item.englishName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "asteroids-grid",
  props: ["asteroids"]

}
</script>

<style>
div.asteroidsGrid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

div.asteroids {
  width: 600px;
}
h2{
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.asteroid {
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

.asteroidHeading {
  display: flex;
  align-items: center;
}

</style>