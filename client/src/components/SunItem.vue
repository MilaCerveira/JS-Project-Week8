<template lang="html">
  <div>
    <div class="sun">
      <section>
        <img class="icon" src="https://lh3.googleusercontent.com/proxy/KIj0wvvSVb7jcEfBVj2sFfQtHoBc1vBSWTkepJ5-b01nn-t1bctaGLTS9vLKmtAZu5JbuaC7iR-Ctyq9Xf-VlSbEnZngahk"/>
      </section>
      <section>
        <h2>Sun</h2>
        <ul class="sunProps">
          <li>Type: Star</li>
          <li>Density: {{sun.density}} g/cm3</li>
          <li>Mean radius: {{sun.meanRadius}} km</li>
        </ul>
    </section>
    </div>
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
width: 200px;
height: 200px;
padding: 3px;
}

.sun {
  display: flex;
  padding: 10px;
}

.sunProps {
  padding: 0px;
}

</style>

