<template>
  <div id="article-list">
    <article
      v-for="post in posts"
      :key="post.postID"
      class="spl-article"
    >
      <header>
        <div class="spl-header">
          <a :href="post.Identifier">
            {{ post.Title }}
          </a>
        </div>
        <i class="icon wait" />
        <time>{{ post.PostTime | formatDate }}</time>
        <a
          href="javascript:void 0"
          @click="type = post.Type"
        >
          <i class="icon bookmark" />
          {{ post.Type }}
        </a>
      </header>
      <div class="spl-article-body">
        {{ post.ContentDescription }}
      </div>
    </article>
    <pagination
      v-if="ready"
      :page="page"
      :total-pages="totalPages"
      :callback="getPosts"
    />
  </div>
</template>

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
