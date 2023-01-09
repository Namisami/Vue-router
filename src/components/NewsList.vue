<template>
  <v-container>
    <v-row>
      <v-col
          cols="4"
          v-for="article in articles.data"
          :key="article.id"
      >
        <router-link :to="{ name: 'article', params: {id: article.id } }" class="news__article">
          <v-card
              outlined
              tile
              elevation="3"
              height="100%"
          >
            <v-card-title
                style="
                white-space: nowrap;
                word-break: normal;
                overflow: hidden ;
                text-overflow: ellipsis;
              "
            >{{ article.name }}</v-card-title>
            <v-img
                :src="require(`@/assets/${article.preview_image}`)"
                aspect-ratio="1"
            >
            </v-img>
            <v-card-text>{{ article.shortDesc }}</v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "NewsList",
  data() {
    return {
      articles: NaN,
    }
  },
  mounted() {
    this.articles = this.$store.getters.getArticles;
  }
}
</script>

<style scoped>

</style>