<template>
<div id="article-list">
      <div>
          <div v-if="ready">
              <div v-for="post in posts">
                  <div class="mdui-card mdblog-article-card mdui-hoverable">
                      <div style="margin: 20px;">
                          <div class="mdui-card-primary">
                              <a class="mdblog-list-title mdui-card-primary-title" :href="post.Identifier">{{ post.Title }}</a>
                              <div class="mdui-card-primary-subtitle">{{ post.PostTime | formatDate }}</div>
                          </div>
                          <div class="mdui-card-content mdui-typo-body-1">{{ post.ContentDescription }}</div>
                      </div>
                  </div>
              </div>
          </div>
          <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
      </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
