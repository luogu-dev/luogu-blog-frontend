import Vue from 'vue'
import ArticleVote from './layouts/article_vote.vue'
import ArticleComments from './layouts/article_comments.vue'

new Vue({
  el: '#article-vote',
  render: h => h(ArticleVote)
});

new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
});
