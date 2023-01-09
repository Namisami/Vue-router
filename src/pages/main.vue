<template>
  <div>
    <h1 class="text-center">Main page</h1>
    <v-carousel
        v-model="model"
    >
      <v-carousel-item
          v-for="article in articles.data"
          :key="article.id"
      >
          <v-img
              max-height="100%"
              :src="require(`@/assets/${article.full_image}`)"
          >
          </v-img>
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2">
              Slide 1
            </div>
          </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "mainPage",
  data() {
    return {
      articles: NaN,
      model: 0,
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