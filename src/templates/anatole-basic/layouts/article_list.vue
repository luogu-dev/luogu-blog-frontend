<template>
  <div id="article-list" class="autopagerize_page_element">
    <div class="content">
      <div v-for="post in posts" class="post animated fadeInDown">
        <div class="post-title">
          <h3>
            <a :href="post.Identifier">{{ post.Title }}</a></h3>
        </div>
        <div class="post-content">
          <p>{{ post.ContentDescription }}</p>
        </div>
        <div class="post-footer">
          <div class="meta">
            <div class="info">
              <i class="fa fa-sun-o"></i>
              <span class="date">{{ post.PostTime | formatDate }}</span>
              <i class="fa fa-tag"></i>
              <a class="tag"@click="type = post.Type">{{ post.Type }}</a></div>
          </div>
        </div>
      </div>
      <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
    </div>
  </div>
</template>

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
