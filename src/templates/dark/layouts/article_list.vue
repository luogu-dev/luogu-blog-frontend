<template>
  <div id="article-list">
    <articleLeft :posts='posts' />
    <div class="post-container">
      <div>
        <div v-for="post in posts" :key="post.postID" class="post">
          <h2>
            <a :href="post.identifier" class="title">{{ post.title }}</a>
            <span class="post-info-container font-color-1">
               <i class="calendar icon"/>{{ post.postTime | formatDate }}
              &emsp;
              <span class="thump-up">
              <i class="heart icon"></i>{{ post.thumbUp }}
              </span>
              &emsp;
              <a
                style="cursor: pointer;"
                @click="type = post.type"
              ><i class="tag icon"></i>{{ post.type }}</a>
            </span>
          </h2>
          <p class='font-color-1'>{{ post.contentDescription }}</p>
        </div>
      </div>
      <pagination :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
    </div>

  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
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
  components: { pagination, articleLeft }
}
</script>
<style>
</style>
