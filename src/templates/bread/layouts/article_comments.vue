<template>
  <div id="ui comments">
    <h3>评论</h3>
    <!-- 评论区 -->
    <div class="comment" v-for="comment in comments">
      <a class="avatar">
        <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
      </a>
      <div class="content">
        <a class="author">{{ comment.Author.Username }}</a>
        <div class="metadata">
          <div class="date">
            {{ comment.ReplyTime | formatDate }}
          </div>
        </div>
        <div class="text">{{ comment.Content }}</div>
      </div>
    </div>
    <!-- 回复区 -->
    <form class="ui reply form">
      <div class="field">
        <textarea></textarea>
      </div>
      <div @click="postComment"
           :class="{ active: commentPosting }"
           :disabled="commentPosting"
           class="ui blue labeled submit icon button">
        <i class="icon edit"></i> 回复
      </div>
    </form>
    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import formatDate from 'plugins/format_date'

export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination }
}
</script>

