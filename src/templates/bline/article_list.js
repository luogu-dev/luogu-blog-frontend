import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'

window.articleList = new Vue({
  el: '#clist',
  render: h => h(ArticleList)
})
