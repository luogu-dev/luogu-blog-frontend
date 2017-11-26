<template>
  <div id="article-list">
    <div v-if="ready">
      <article v-for="post in posts" class="lg-article am-g">
        <h3 class="am-article-title blog-title">
          <a :href="post.Identifier">{{ post.Title }}</a>
        </h3>
        <h4 class="am-article-meta blog-meta">
          <span class="am-icon-thumbs-up">{{ post.ThumbUp }} </span>
          | posted on {{ post.PostTime | formatDate }} | under
          <a href="#">分类</a>
        </h4>
        <p>{{ post.ContentDescription }}</p>
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
  import { defaultData, defaultMounted, getPosts } from 'scripts/article_list'
  import formatDate from 'plugins/format_date'
  export default {
    data: defaultData,
    mounted: defaultMounted,
    methods: { getPosts },
    filters: { formatDate },
    components: { pagination, loader }
  }
</script>
