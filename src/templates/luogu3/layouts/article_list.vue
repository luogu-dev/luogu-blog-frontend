<template>
  <div id="article-list">
    <div v-if="ready">
      <article v-for="post in posts" class="lg-article am-g">
        <h3 class="am-article-title blog-title">
          <a :href="post.identifier">{{ post.title }}</a>
        </h3>
        <h4 class="am-article-meta blog-meta">
          <span class="am-icon-thumbs-up">&nbsp;{{ post.thumbUp }} </span>
          | posted on {{ post.postTime | formatDate }} | under
          <a @click="type = post.type" style="cursor: pointer">{{ post.type }}</a>
        </h4>
        <p>{{ post.contentDescription }}</p>
      </article>
    </div>
    <loader v-else>
    </loader>
    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultWatch, defaultMountedWithSearchEvent, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMountedWithSearchEvent,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>
