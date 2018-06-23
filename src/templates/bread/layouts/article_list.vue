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

<style scoped>
  .post-list {
    color: #404040;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .post-list a {
    color: #404040;
    text-decoration: none;
    background-color: transparent;
  }

  .post-list a:hover {
    color: #337ab7;
  }

  .post-list h2 {
    font-size: 26px;
  }

  .post-content-preview {
    color: #a3a3a3;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .post-meta {
    font-family: Lora, Times New Roman, serif;
    color: #ccc;
    font-size: 13px;
    font-style: italic;
    margin-top: 0;
  }
</style>

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
