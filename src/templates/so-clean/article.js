import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleComments from './layouts/article_comments.vue'
import ArticleVote from './layouts/article_vote.vue'
// import 'components/comment.css'
// import 'components/button.css'
// import 'components/form.css'
// import 'components/icon.css'
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
