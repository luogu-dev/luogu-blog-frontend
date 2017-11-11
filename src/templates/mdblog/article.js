import Vue from 'vue'
import VoteButtons from './layouts/vote_buttons.vue'
import BlogComments from './layouts/blog_comments.vue'
import VoteCount from './layouts/vote_count.vue'

window.voteButton = new Vue({
  el: '#vote-buttons',
  render: h => h(VoteButtons)
})

window.VoteCount = new Vue({
  el: '#vote-count',
  render: h => h(VoteCount)
})

window.articleComments = new Vue({
  el: '#blog-comments',
  render: h => h(BlogComments)
})
