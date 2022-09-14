import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import aboutPage from "@/pages/about";
import newsPage from "@/pages/news";
import mainPage from "@/pages/main";
import articleElement from "@/components/ArticleElement";

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: mainPage, name: "main" },
  { path: '/about', component: aboutPage, name: "about" },
  { path: '/news', component: newsPage, name: 'news' },
  { path: '/news/:id', component: articleElement, name: 'article' }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
