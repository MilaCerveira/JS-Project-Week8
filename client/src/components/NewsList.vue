<template>
  <div>
      <div class='news-container'>
  
<img src="https://freepngimg.com/download/space/23420-7-nasa-file.png" alt="Nasa Icon"style="width:40px;height:40px;">
<div class='images-title'>
<h2> News </h2>
</div>
      
    <input placeholder="Search for a headline" v-model="searchTerm"></input>
    <button @click="handleSearch">Search</button>
    </div>
    <ul>
      <NewsItem :news="news"> </NewsItem>
    </ul>
  </div>
</template>

<script>
import NewsItem from "./NewsItem.vue";
export default {
  name: "NewsList",
  data() {
    return {
      news: [],
      searchTerm: "",
    };
  },
  components: {
    NewsItem,
  },
  methods: {
    handleSearch() {
      console.log("Button is clicked, Search term: ", this.searchTerm);
      window
        .fetch(
          `https://content.guardianapis.com/search?q=${this.searchTerm}&format=json&api-key=test&show-fields=body`
        )
        .then((response) => {
          response.json().then((json) => {
            this.news = json.response.results;
            console.log(json.response.results)
          });
        });
    },
  },
  mounted() {
    window
      .fetch(
        "https://content.guardianapis.com/search?q=nasa&format=json&api-key=test&show-fields=body"
      )
      .then((response) => {
        response.json().then((json) => {
          this.news = json.response.results;
          console.log(this.news);
        });
      });
  },
};
</script>
<style scoped>
.news-container {
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
}
.news-container > img {
  float: left;
  margin-bottom: 20px;
}
</style>