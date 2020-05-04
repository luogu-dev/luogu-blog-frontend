<template>
  <div id="article-list">
    <div class="container">
      <div class="row">
        <div class="col post-list-container"
             style="margin-top: 30px;">
          <div class="post-list" v-for="post in posts">
            <a :href="post.identifier">
              <h2 class="post-title">
                {{ post.title }}
              </h2>
              <div class="post-content-preview">
                {{ post.contentDescription }}
              </div>
              <div class="post-meta">
                {{ post.type }} on {{ post.postTime | formatDate }}
              </div>
            </a>
            <hr/>
          </div>
          <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
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
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'

export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
