import Vue from 'vue'
import { initKatex } from 'scripts/article'
import './common'
import VoteButtons from './layouts/vote_buttons.vue'
import BlogComments from './layouts/blog_comments.vue'
import VoteCount from './layouts/vote_count.vue'

initKatex()

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
