<template>
  <div class="body__article article">
   <!-- <p class="article__title">{{ article }}</p> -->
    <h1 class="article__title">{{ article.name }}</h1>
    <p class="article__desc">{{ article.desc }}</p>
    <p class="article__date">{{ article.date }}</p>
    <img class="article__img" :src="require(`@/assets/${article.full_image}`)" />
  </div>
</template>

<script>

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
  mounted: function() {
    this.article = this.$store.getters.getArticleById(this.$route.params.id);
    console.log(this.article);
  },
}
</script>

<style scoped>

</style>