<template>
  <div class="body__article article">
<!--    <p class="article__title">{{ article }}</p>-->
    <h1 class="article__title">{{ article.name }}</h1>
    <p class="article__desc">{{ article.desc }}</p>
    <p class="article__date">{{ article.date }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleElement",
  data() {
    return {
      article: null,
    }
  },
  methods: {
    findArticle: function (response, articleId) {
      for (let article of response.data) {
        if (article.id == articleId) {
          return article;
        }
      }
    }
  },
  mounted() {
    axios
        .get('http://localhost:8080/articles.json')
        .then(response => (this.article = this.findArticle(response, this.$route.params.id)));
  }
}
</script>

<style scoped>

</style>