<template>
  <article :articleId="0"></article>
</template>

<script>
import ArticleElement from "@/components/ArticleElement";

export default {
  props: ['articleId'],
  name: "articleElement",
  components: {
    'article': ArticleElement,
  },
  mounted() {
    console.log(this.articleId);
  }
}
</script>

<style scoped>

</style>