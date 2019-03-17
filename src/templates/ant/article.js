import Vue from 'vue'
import './common'
import { initKatex, initHighlight } from 'scripts/article'
import ArticleComments from './layouts/article_comments.vue'
import 'highlight.js/styles/tomorrow.css'
import './styles/article.css'

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})

initKatex()
initHighlight()
