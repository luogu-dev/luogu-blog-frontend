import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import VoteButtons from './layouts/vote_buttons.vue'
import BlogComments from './layouts/blog_comments.vue'
import VoteCount from './layouts/vote_count.vue'
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
