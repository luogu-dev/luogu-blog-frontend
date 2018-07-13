import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleVote from './layouts/article_vote'
import ArticleComments from './layouts/article_comments'
import 'highlight.js/styles/tomorrow.css'

document.addEventListener('DOMContentLoaded', () => {
  initKatex()
  initHighlight()
})

window.articleVote = new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})
