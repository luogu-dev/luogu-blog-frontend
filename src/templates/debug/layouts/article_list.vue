<template>
  <div id="article-list">
    <div class="ui text container">
      <div v-if="ready">
        <div v-for="post in posts" class="ui vertical segment">
          <h2 class="ui header">
            <a :href="post.Identifier">{{ post.Title }}</a>
            <span class="sub header">
              <i class="wait icon"></i>{{ post.PostTime | formatDate }}
              &emsp;
              <i class="thumbs outline up icon"></i>{{ post.ThumbUp }}
            </span>
          </h2>
          <p>{{ post.ContentDescription }}</p>
        </div>
      </div>
      <loader v-else></loader>
    </div>

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
