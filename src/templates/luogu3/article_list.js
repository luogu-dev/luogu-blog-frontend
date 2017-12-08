import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'
import SearchBar from './layouts/search_bar.vue'
import { listPageSearch } from 'scripts/search_bar'

window.articleList = new Vue({
  el: '#article-list',
  render: h => h(ArticleList)
})

SearchBar.methods.search = listPageSearch
window.searchBar = new Vue({
  el: '#search',
  render: h => h(SearchBar)
})
