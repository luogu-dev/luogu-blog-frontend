import Vue from 'vue'
import './common'
import { initKatex } from 'scripts/article'
import ArticleVote from './layouts/article_vote.vue'
import ArticleComments from './layouts/article_comments.vue'

initKatex()

window.articleVote = new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})
