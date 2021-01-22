<template>
  <div>
    <select v-on:change="handleSelect" v-model="selectedItem">
      <option>Select A Celestial Body...</option>
      <option v-for="item in bodies" :value="item">
        {{ item.englishName }}
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
      selectedItem: {},
    };
  },
  props: ["bodies"],
  methods: {
    handleSelect() {
      eventBus.$emit("selected-item", this.selectedItem);
    },
  },
};
</script>

<style>
</style>