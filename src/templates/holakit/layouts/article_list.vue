<template>
  <div id="article-list" class="hola-container hola-columns hola-card-stack">
    <div class="hola-columns-item" v-if="config.config.ui.enable_search">
      <div class="hola-card">
        <h2 class="hola-card-title">搜索</h2>
        <p>
          <input class="hola-form-ctrl hola-input-singleline" type="text" placeholder="输入一些关键字" v-model="keyword">
          <button class="hola-button hola-button-primary" @click="getPosts(1)">搜索</button>
        </p>
        <p v-if="type">
          分类: {{ type }} <button class="hola-button" @click="type = ''">清除</button>
        </p>
      </div>
    </div>
    <div class="hola-columns-item" v-if="posts.length === 0">
      <div class="hola-card">
        <p style="margin: 5rem 0; text-align: center;">还没有文章 Orz</p>
      </div>
    </div>
    <div class="hola-columns-item" v-for="post in posts">
      <a :href="post.identifier" style="text-decoration: none; color: var(--hola-text-dark-color);">
        <div class="hola-card">
          <h2 class="hola-card-title">
            {{ post.title }}
          </h2>
          <p style="word-wrap: break-all; line-height: 2em;"><span class="hola-badge" @click.stop.prevent="type = post.type">{{ post.type }}</span> {{ post.contentDescription }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { defaultData, defaultWatch, getPosts, getWaterfallPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data () {
    let data = defaultData()
    data.lastScroll = 0
    return data
  },
  mounted () {
    this.$nextTick(function () {
      this.getPosts(this.page)

      window.addEventListener('scroll', () => {
        const maxHeight = window.document.body.offsetHeight - window.innerHeight

        if (maxHeight - 230 <= window.scrollY && window.scrollY > this.lastScroll && this.ready && this.page !== this.totalPages) {
          this.getWaterfallPosts(this.page + 1)
        }

        this.lastScroll = window.scrollY
      })
    })
  },
  watch: defaultWatch,
  methods: { getPosts, getWaterfallPosts },
  filters: { formatDate },
  components: { }
}
</script>
