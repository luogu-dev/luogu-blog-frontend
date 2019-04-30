<template>
  <div id="article-list">
    <div class="container">
      <div class="row">
        <div class="col post-list-container" style="margin-top: 20px;">
          <div class="post-list" v-for="post in posts">
            <a :href="post.Identifier">
              <h2 class="title2">{{ post.Title }}</h2>
            </a>
            <div class="info">{{ post.ContentDescription }}</div>
            <div class="smalltext">{{ post.Type }} on {{ post.PostTime | formatDate }}</div>
            <br>
          </div>
          <center>
            <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import {
  defaultData,
  defaultMounted,
  defaultWatch,
  getPosts
} from 'scripts/article_list'
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
