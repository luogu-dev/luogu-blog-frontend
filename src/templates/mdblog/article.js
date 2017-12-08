import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import { redirectSearch } from 'scripts/search_bar'
import VoteButtons from './layouts/vote_buttons.vue'
import BlogComments from './layouts/blog_comments.vue'
import VoteCount from './layouts/vote_count.vue'
import Header from './layouts/header.vue'
import 'highlight.js/styles/tomorrow.css'

initKatex()
initHighlight()

window.VoteCount = new Vue({
  el: '#vote-count',
  render: h => h(VoteCount)
})

window.VoteButtons = new Vue({
  el: '#vote-buttons',
  render: h => h(VoteButtons)
})

window.ArticleComments = new Vue({
  el: '#blog-comments',
  render: h => h(BlogComments)
})

Header.methods.search = redirectSearch
window.searchBar = new Vue({
  el: '#small-header',
  render: h => h(Header)
})
