<template>
  <div id="article-list">
    <div v-if="ready">
      <article
        v-for="post in posts"
        :key="post.postID"
        class="lg-article am-g"
      >
        <h3 class="am-article-title blog-title">
          <a :href="post.Identifier">
            {{ post.Title }}
          </a>
        </h3>
        <h4 class="am-article-meta blog-meta">
          <span class="am-icon-thumbs-up">
            &nbsp;{{ post.ThumbUp }}
          </span>
          | posted on {{ post.PostTime | formatDate }} | under
          <a
            style="cursor: pointer"
            @click="type = post.Type"
          >
            {{ post.Type }}
          </a>
        </h4>
        <p>{{ post.ContentDescription }}</p>
      </article>
    </div>
    <loader v-else />
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
import loader from '../components/loader.vue'
import { defaultData, defaultWatch, defaultMountedWithSearchEvent, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  filters: { formatDate },
  components: { pagination, loader },
  data: defaultData,
  watch: defaultWatch,
  mounted: defaultMountedWithSearchEvent,
  methods: { getPosts }
}
</script>
