import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'
import { listPageSearch } from 'scripts/search_bar'
import Header from './layouts/header.vue'

window.articleList = new Vue({
  el: '#article-list',
  render: h => h(ArticleList)
})

Header.methods.search = listPageSearch
window.searchBar = new Vue({
  el: '#small-header',
  render: h => h(Header)
})
