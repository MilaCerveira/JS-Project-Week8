<template lang="html">
    <div>
        <form @submit="handleSubmit">
            <ul>
                <li v-for="item in quiz">
                    {{ item.category }}
                    {{ item.question }}
                    <div>
                        True <input type="radio" value="True" />
                        False <input type="radio" value="False" />
                    </div>
                </li>
            </ul>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
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
      .then((data) => (this.quiz = data.results));
  },
  methods: {
      handleSubmit(event) {
          event.preventDefault();
          console.log(">>>>>");
      }
  },
  computed: {},
};
</script>
<style>
ul{ list-style-type: none;}
</style>
