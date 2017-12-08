import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleVote from './layouts/article_vote.vue'
import ArticleComments from './layouts/article_comments.vue'
import SearchBar from './layouts/search_bar.vue'
import { redirectSearch } from 'scripts/search_bar'
import 'highlight.js/styles/tomorrow.css'

initKatex()
initHighlight()

window.articleVote = new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})

SearchBar.methods.search = redirectSearch
window.searchBar = new Vue({
  el: '#search',
  render: h => h(SearchBar)
})
