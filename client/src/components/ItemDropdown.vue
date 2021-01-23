<template>
  <div>
    <select v-on:change="handleSelect" v-model="selectedItem">
      <option disabled value="">Select A Celestial Body...</option>
      <option
        v-if="item.englishName"
        v-for="item in sortedAlphabetically"
        :value="item">
        {{ item.englishName }}
      </option>
      <option
        v-if="!item.englishName"
        v-for="item in sortedAlphabetically"
        :value="item">
        {{ item.alternativeName }}
      </option>
    </select>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "item-dropdown",
  data() {
    return {
      selectedItem: {}
    };
  },
  props: ["bodies"],
  methods: {
    handleSelect() {
      eventBus.$emit("selected-item", this.selectedItem);
    },
  },
  computed: {
    sortedAlphabetically: function () {
      function compare(a, b) {
        if (a.englishName < b.englishName) 
          return -1;
        if (a.englishName > b.englishName) 
          return 1;
        if (a.alternativeName < b.alternativeName)
          return -1;
        if (a.alternativeName > b. alternativeName)
          return 1;
        return 0
      }
      return this.bodies.sort(compare);
    },
  },
};
</script>

<style>
</style>