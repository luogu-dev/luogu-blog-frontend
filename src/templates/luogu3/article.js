import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleVote from './layouts/article_vote.vue'
import ArticleComments from './layouts/article_comments.vue'
import SearchBar from './layouts/search_bar.vue'
import { defaultData, defaultMounted, redirectSearch } from 'scripts/search_bar'
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

window.searchBar = new Vue({
  el: '#search',
  data: defaultData,
  mounted: defaultMounted,
  render: h => h(SearchBar),
  methods: {
    search: redirectSearch
  }
})
