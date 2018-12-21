<template>
  <div id="article-list">
    <div class="container">
      <div class="row">
        <div
          class="col post-list-container"
          style="margin-top: 30px;"
        >
          <div
            v-for="post in posts"
            :key="post.PostTime"
            class="post-list"
          >
            <a :href="post.Identifier">
              <h2 class="post-title">
                {{ post.Title }}
              </h2>
              <div class="post-content-preview">
                {{ post.ContentDescription }}
              </div>
              <div class="post-meta">
                {{ post.Type }} on {{ post.PostTime | formatDate }}
              </div>
            </a>
            <hr>
          </div>
          <pagination
            v-if="ready"
            :page="page"
            :total-pages="totalPages"
            :callback="getPosts"
          />
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
  filters: { formatDate },
  components: { pagination },
  data: defaultData,
  watch: defaultWatch,
  mounted: defaultMounted,
  methods: { getPosts }
}
</script>
