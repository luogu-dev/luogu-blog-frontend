<template>
  <div id="clist" class="clist">
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
        <div v-for="post in posts" class="cd">
            <p class="mes"><br>
                <span class="tt"><a :href="post.Identifier">{{ post.Title }}</a></span><br>
                {{ post.ContentDescription }}<br>
                时间:{{ post.PostTime | formatDate }} 标签:{{ post.Type }} 大拇指:{{ post.ThumbUp }}
            <br></p>
        </div>
      </div>
      <loader v-else></loader>

    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
  </div>
  <br>
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
