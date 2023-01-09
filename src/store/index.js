import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    articles: []
  },
  getters: {
    getArticles: state => {
      return state.articles;
    },
    getArticleById: state => id => {
      return state.articles.filter(article => article.id == id);
    }
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles;
    }
  },
  actions: {
    async loadNews({ commit }) {
      let articles;
      await axios
        .get('http://localhost:8080/articles.json')
        .then(response => (articles = response));
      commit('setArticles', articles);
    }
  },
})