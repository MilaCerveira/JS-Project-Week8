<template>
  <div>
    <li v-for="newsItem in news" :key="newsItem.id" @click='expandContent(newsItem)'>
      {{ newsItem.webTitle }}
    </li>

    <div v-if="selectedNewsItem">
      <p v-html="selectedNewsItem.fields.body"> </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {
      selectedNewsItem: null
    }
  },
  methods: {
    expandContent: function(newsItem){
      //console.log(newsItem);
      this.selectedNewsItem = newsItem;
    }
  }
};
</script>

<style scoped>
li {
    list-style: none;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
}
</style>