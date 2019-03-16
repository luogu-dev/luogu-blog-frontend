<template>
  <div id="article-list">
    <articleLeft :posts='posts' />
    <div class="post-container">
      <div>
        <div v-for="post in posts" :key="post.postID" class="post">
          <h2>
            <a :href="post.Identifier" class="title">{{ post.Title }}</a>
            <span class="post-info-container font-color-1">
               <i class="calendar icon"/>{{ post.PostTime | formatDate }}
              &emsp;
              <span class="thump-up">
              <i class="heart icon"></i>{{ post.ThumbUp }}
              </span>
              &emsp;
              <a
                style="cursor: pointer;"
                @click="type = post.Type"
              ><i class="tag icon"></i>{{ post.Type }}</a>
            </span>
          </h2>
          <p class='font-color-1'>{{ post.ContentDescription }}</p>
        </div>
      </div>
    </div>

    <pagination :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import articleLeft from './article_left.vue'
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
  components: { pagination, loader, articleLeft }
}
</script>
<style>
</style>