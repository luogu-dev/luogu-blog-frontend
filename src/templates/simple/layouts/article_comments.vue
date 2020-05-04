<template>
  <div id="article-comments">
    <form v-if="uid" @submit.prevent="postComment" class="clearfix">
      <textarea v-model="commentContent"
        class="spl-comment-editor spl-border"
      ></textarea>
      <button type="submit" class="spl-comment-submit spl-border"
        :class="{ disabled: commentPosting }"
      >
        <i class="icon edit"></i> 评论
      </button>
    </form>
    <div v-if="ready">
      <div class="spl-comment clearfix" v-for="comment in comments">
        <div class="avator">
          <a
            :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
            target="_blank"
          >
            <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'">
          </a>
        </div>
        <div class="content">
          <div class="poster">
            {{ comment.author.name }}
            <i class="icon wait"></i>
            <time>{{ comment.time | formatDate }}</time>
          </div>
          {{ comment.content }}&nbsp;
        </div>
      </div>
      <pagination v-if="ready"
        :page="page" :totalPages="totalPages" :callback="getComments"
      ></pagination>
    </div>
    <p v-else>正在加载...</p>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination }
}
</script>

