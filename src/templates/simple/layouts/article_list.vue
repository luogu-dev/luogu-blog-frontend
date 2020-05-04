<template>
  <div id="article-list">
    <article v-for="post in posts" :key="post.identifier" class="spl-article">
      <header>
        <div class="spl-header">
          <a :href="post.identifier">{{ post.title }}</a>
        </div>
        <i class="icon wait"></i>
        <time>{{ post.postTime | formatDate }}</time>
        <a href="javascript:void 0" @click="type = post.type">
          <i class="icon bookmark"></i>
          {{ post.type }}
        </a>
      </header>
      <div class="spl-article-body">
        {{ post.contentDescription }}
      </div>
    </article>
    <pagination v-if="ready"
      :page="page" :totalPages="totalPages" :callback="getPosts"
    ></pagination>
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
