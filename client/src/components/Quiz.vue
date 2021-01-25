<template lang="html">
    <div>
        <form @submit="handleSubmit">
            <ul>
                <li v-for="item in quiz">
                    {{ item.category }}
                    {{ item.question }}
                    <div>
                        True
                        <input
                            type="radio"
                            value="True"
                            v-model="answers[item.question]"
                        />
                        False
                        <input
                            type="radio"
                            value="False"
                            v-model="answers[item.question]"
                        />
                        <span v-if="result[item.question]">{{ result[item.question] }}</span>
                    </div>
                </li>
            </ul>
            <button type="submit" class="button">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      result: {},
      answers: {},
      quiz: [],
      sound: null,
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
    checkAnswers() {
        const questions = Object.keys(this.answers);

        questions.forEach((question) => {
            const quiz = this.quiz.find((q) => q.question === question);

            if (quiz) {
                this.result[question] = quiz.correct_answer;
            }
        });

    },
    handleSubmit(event) {
      event.preventDefault();
      const questions = Object.keys(this.answers);

      if (questions.length < 5) {
          return;
      }

      this.checkAnswers();
      console.log(this.answers);
    },
  },
  computed: {},
};
</script>
<style>
ul {
  list-style-type: none;
}

.button {
    margin-left: 40px;
}
</style>
