import Vue from 'vue'
import './common'
import ArticleList from './layouts/article_list.vue'
import ArticleListNav from './layouts/article_list_nav.vue'
import './styles/article_list.css'

BlogGlobals.luoguAddress = 'https://www.luogu.com.cn'
BlogGlobals.picAddress = 'https://cdn.luogu.com.cn'

window.articleList = new Vue({
  el: '#artile-list-container',
  render: h => h(ArticleList)
})

window.navBar = new Vue({
  el: '#nav-bar',
  render: h => h(ArticleListNav)
})
