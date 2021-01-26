<template lang="html">
    <div v-if="quiz" class="form-container">
        <form @submit="handleSubmit">
          <div>
          <label for="Q1">{{quiz[0].question}}</label>
          <input type="radio" :value="true" v-model="userAnswers.A1">True</input>
          <input type="radio" :value="false" v-model="userAnswers.A1">False</input>
</div>
          <br>

          <div>
          <label for="Q1">{{quiz[1].question}}</label>
          <input type="radio" :value="true" v-model="userAnswers.A2">True</input>
          <input type="radio" :value="false" v-model="userAnswers.A2">False</input>
          </div>
<br>
<div>
          <label for="Q1">{{quiz[2].question}}</label>
           <input type="radio" :value="true" v-model="userAnswers.A3">True</input>
          <input type="radio" :value="false" v-model="userAnswers.A3">False</input>
</div>
<br>
<div>
          <label for="Q1">{{quiz[3].question}}</label>
           <input type="radio" :value="true" v-model="userAnswers.A4">True</input>
          <input type="radio" :value="false" v-model="userAnswers.A4">False</input>
</div>
<br>
<div>
          <label for="Q1">{{quiz[4].question}}</label>
           <input type="radio" :value="true" v-model="userAnswers.A5">True</input>
          <input type="radio" :value="false" v-model="userAnswers.A5">False</input>
</div>
<br>
          <button type="submit" class="button">Submit</button>
        </form>
        <h2 v-if="result">You Scored: {{result}}</h2>
        <br>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      result: "",
      userAnswers: {
        A1: "",
        A2: "",
      },
      quiz: [],
      sound: null,
    };
  },
  props: ["componentKey"],
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
      let quiz = this.quiz;
      let givenAnswers = Object.values(this.userAnswers);
      let toCheck = givenAnswers.map((item, index, givenAnswers) =>
        givenAnswers[index].toString()
      );
      const toCheckAgainst = quiz.map((item, index, quiz) =>
        quiz[index].correct_answer.toLowerCase()
      );
      let score = 0;
      for (let i = 0; i < 5; i++) {
        if (toCheck[i] === toCheckAgainst[i]) {
          score += 1;
        }
      }
      return (this.result = `${score}/5`);
    },

    handleSubmit(event) {
      event.preventDefault();

      this.checkAnswers();
    },
  },
};
</script>
<style>
.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
ul {
  list-style-type: none;
}

.button {
  margin-left: 40px;
}
</style>