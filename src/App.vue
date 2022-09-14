

<template>
  <div id="app">
    <header class="header">
      <img class="header__logo" height="50" src="@/assets/Politech.png" alt="Лого политеха">
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'main' }">Main page</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'about' }">About us</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" :to="{ name: 'news' }">News</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>

    <news-list v-if="$route.path == '/news'"></news-list>
  </div>
</template>

<script>
import '@/css/style.css'
import newsList from "@/components/NewsList";

export default {
  name: 'App',
  components: {
    'newsList': newsList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
