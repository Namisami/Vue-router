<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-img
          max-height="60"
          max-width="220"
        :src="`/images/Politech.png`"
          class="mr-4"
      >
      </v-img>
<!--      <img class="header__logo" height="50" src="../images/Politech.png" alt="Лого политеха">-->
      <nav class="header__nav nav">
        <v-tabs
          background-color="#f5f5f5"
        >
          <v-tab to="/">
<!--            <router-link class="nav__link" :to="{ name: 'main' }">Main page</router-link>-->
            Main page
          </v-tab>
          <v-tab to="/about">
<!--            <router-link class="nav__link" :to="{ name: 'about' }">About us</router-link>-->
            About us
          </v-tab>
          <v-tab to="/news">
<!--            <router-link class="nav__link" :to="{ name: 'news' }">News</router-link>-->
            News
          </v-tab>
        </v-tabs>
      </nav>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <news-list v-if="$route.path == '/news'"></news-list>
    </v-main>
  </v-app>
</template>

<script>
import NewsList from "@/components/NewsList";

export default {
  name: 'App',
  components: {
    NewsList,
  },
  methods: {
    // showCount() {
    //   console.log(this)
    //   this.$store.commit('increment')
    //   console.log(this.$store.state.count)
    // },
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
  },
  mounted: function () {
    this.$store.dispatch('loadNews');
  }
};
</script>
