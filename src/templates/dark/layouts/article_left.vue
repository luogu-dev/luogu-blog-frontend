<template>
  <div class="article-left-container">
    <div class="site-left">
      <h1>
        <a href="#">{{ BlogGlobals.blogName }}</a>
      </h1>
      <p>{{ BlogGlobals.blogSubtitle }}</p>

      <input class="search font-color-1" type="text" placeholder="输入后按回车进行搜索" @keyup.enter="search">

      <!-- <div class="post-type-selecter">
        <h3 class="font-color-1">文章类型</h3>
        <a class="post-type"  @click="searchType('')" >
          <i class="tag icon"></i>
          所有类型</a>
      </div>
      <div v-for="(type,i) in getPostTypes" :key="i">
        <a style="cursor: pointer;"  @click="searchType(type)">
          <i class="tag icon"></i>
          {{ type }}
        </a>
      </div>-->
    </div>

    <div class="site-info-contanier">
      <div>
        <div>
          <a class href="_sitemap">Site Map</a>
          <a class href="https://github.com/luogu-dev/luogu-blog-frontend">GitHub</a>
          <a class :href="BlogGlobals.luoguAddress">洛谷</a>
        </div>
        <p class="font-color-1">Powered by Luogu Blog. Theme by nekokuro0xf. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from 'scripts/article_list'
export default {
  props: {
    posts: Array
  },
  data () {
    return {
      BlogGlobals: window.BlogGlobals,
      postTypes: []
    }
  },
  computed: {
    getPostTypes () {
      const tmp = []
      for (const post of this.posts) {
        tmp.push(post.Type)
      }
      // 去重
      return Array.from(new Set(tmp))
    }
  },
  methods: {
    search (el) {
      var keyword = el.target.value
      var urlData = this.getRequestParameters()
      // console.log(urlData)
      var urlStr = '#'
      if (keyword && keyword !== '') {
        urlStr += 'keyword=' + keyword
      }
      if (urlData.type && urlData.type !== '') {
        if (urlStr !== '#') {
          urlStr += '&'
        }
        urlStr += 'type=' + urlData.type
      }
      window.location.hash = urlStr
      el.target.value = ''
      getPosts(1)
      // console.log(window.location.hash)
    },
    // 获取url参数
    getRequestParameters () {
      console.log(location)
      var arr = (location.hash || '').replace(/^#?/, '').split('&')
      console.log(arr)
      var params = {}
      for (var i = 0; i < arr.length; i++) {
        var data = arr[i].split('=')
        if (data.length === 2) {
          params[data[0]] = decodeURIComponent(data[1])
        }
      }
      return params
    },
    searchType (type) {
      var urlStr = '#'
      var urlData = this.getRequestParameters()
      console.log('type', type, urlData)
      if (urlData.keyword !== undefined && urlData.keyword !== '') {
        urlStr += 'keyword=' + urlData.keyword
      }
      if (type && urlData.type !== '') {
        if (urlStr !== '#') {
          urlStr += '&'
        }
        urlStr += 'type=' + urlData.type
      }
      window.location.hash = urlStr
      getPosts(1)
    }
  }
}
</script>