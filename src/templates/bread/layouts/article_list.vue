<template>
  <div id="article-list">
    <div class="container">
      <div class="row">
        <div class="col post-list-container"
             style="margin-top: 30px;">
          <div class="post-list" v-for="post in posts">
            <a :href="post.Identifier">
              <h2 class="post-title">
                {{ post.Title }}
              </h2>
              <div class="post-content-preview">
                {{ post.ContentDescription }}
              </div>
              <div class="post-meta">
                {{ post.Type }} on {{ post.PostTime }}
              </div>
            </a>
            <hr/>
          </div>
        </div>
      </div>
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
  filters: { formatDate }
}
</script>
