<template lang="html">
  <div>
    <div class="sun">
      <img class="icon" src="@/assets/Sun.jpg"/>
      <h2>Sun</h2>
    </div>
    <ul>
      <li>Type: Star</li>
      <li>Density: {{sun.density}} g/cm3</li>
      <li>Mean radius: {{sun.meanRadius}} km</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sun-item",
  props: ["sun"]
}
</script>

<style lang="css" scoped>

.icon {
width: 50px;
height: 50px;
padding: 3px;
}

.sun {
  display: flex;
}

</style>

