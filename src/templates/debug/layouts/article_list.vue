<template>
  <div id="article-list">
    <div class="ui text container">
      <div style="text-align: right;">
        <div class="ui icon input" :class="{ labeled: type }" style="min-width: 50%;">
          <div class="ui label" v-if="type" style="cursor: pointer;" @click="type = ''">
            <i class="bookmark icon"></i>
            {{ type }}
          </div>
          <input type="text" placeholder="搜索" v-model="keyword">
          <i class="inverted circular search link icon" v-if="ready" @click="getPosts(1)"></i>
          <i class="spinner icon" v-if="!ready"></i>
        </div>
      </div>
      <div v-if="ready">
        <div v-for="post in posts" class="ui vertical segment">
          <h2 class="ui header">
            <a :href="post.identifier">{{ post.title }}</a>
            <span class="sub header">
              <i class="wait icon"></i>{{ post.postTime | formatDate }}
              &emsp;
              <i class="thumbs outline up icon"></i>{{ post.thumbUp }}
              &emsp;
              <i class="bookmark icon"></i><a style="cursor: pointer;" @click="type = post.type">{{ post.type }}</a>
            </span>
          </h2>
          <p>{{ post.contentDescription }}</p>
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
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>
