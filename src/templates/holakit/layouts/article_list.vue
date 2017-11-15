<template>
  <div id="article-list" class="hola-container hola-columns hola-card-stack">
    <div class="hola-columns-item" v-for="post in posts">
      <a :href="post.Identifier" style="text-decoration: none; color: var(--hola-text-dark-color);">
        <div class="hola-card">
          <h2 class="hola-card-title">
            {{ post.Title }}
          </h2>
          <p>{{ post.ContentDescription }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import { defaultData, getPosts, getWaterfallPosts } from 'scripts/article_list'
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
            console.log('getPost')
            this.getWaterfallPosts(this.page + 1)
          }

          this.lastScroll = window.scrollY
        })
      })
    },
    methods: { getPosts, getWaterfallPosts },
    filters: { formatDate },
    components: { }
  }
</script>
