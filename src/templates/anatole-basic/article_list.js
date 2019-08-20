import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'
import SearchBar from './layouts/search_bar.vue'
import { redirectSearch } from 'scripts/search_bar'

import 'components/icon.css'

window.articleList = new Vue({
  el: '#article-list',
  render: h => h(ArticleList)
})
SearchBar.methods.search = redirectSearch
window.searchBar = new Vue({
  el: '#search',
  render: h => h(SearchBar)
})
