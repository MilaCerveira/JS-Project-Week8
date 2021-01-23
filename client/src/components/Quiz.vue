<template lang="html"> </template>
<script>
export default {
  data() {
    return {
      quiz: [],
    };
  },
  components: {},
  mounted() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=boolean"
    )
      .then((res) => res.json())
      .then((quiz) => {
          console.log("quiz", quiz);
          (this.quiz = quiz)});
  },
  methods: {},
  computed: {},
};
</script>
<style>
</style>
