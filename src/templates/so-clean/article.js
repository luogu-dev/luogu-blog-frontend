import Vue from 'vue'
import './common'
import { initKatex } from 'scripts/article'
import ArticleComments from './layouts/article_comments.vue'
import ArticleVote from './layouts/article_vote.vue'
import 'components/comment.css'
import 'components/button.css'
import 'components/form.css'
import 'components/icon.css'

initKatex()

window.articleVote = new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})
