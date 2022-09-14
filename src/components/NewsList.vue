<template>
  <ul class="body__news news">
    <router-link :to="{ name: 'article', params: {id: article.id } }" class="news__article" v-for="article in articles.data" :key="article.id">
      <li class="news__item">
        <p class="news__title">{{ article.name }}</p>
        <p class="news__about">{{ article.shortDesc }}</p>
        <p class="news__date">{{ article.date }}</p>
      </li>
    </router-link>
<!--    <p>{{articles}}</p>-->
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsList",
  data() {
    return {
      articles: null,
    }
  },
  mounted() {
    axios
        .get('http://localhost:8080/articles.json')
        .then(response => (this.articles = response));
  }
}
</script>

<style scoped>

</style>