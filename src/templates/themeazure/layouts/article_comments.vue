<template>
  <div id="article-comments">
    <div class="form-group">
      <label for="comment-textArea" class="h3" style="margin-bottom: 20px;">回复文章</label>
      <textarea v-model="commentContent" class="form-control" id="comment-textArea" rows="3"></textarea>
    </div>
    <button
      @click="postComment"
      :class="{ active: commentPosting }"
      :disabled="commentPosting"
      type="submit"
      class="btn btn-primary"
    >提交</button>
    <hr>
    <h3 style="margin-bottom: 20px;">评论</h3>
    <div class="comment-container" v-for="comment in comments" :key="comment.ReplyTime">
      <div class="avatar" style="margin-right: 12px;">
        <a target="_blank" class="user">
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
        </a>
      </div>
      <div class="post-body">
        <a class="author">{{ comment.Author.Username }}</a>
        <div class="post-meta">
          <div class="date smalltext">{{ comment.ReplyTime | formatDate }}</div>
        </div>
        <div class="post-body-inner" style="margin: 0;">{{ comment.Content }}</div>
      </div>
      <br>
    </div>
    <pagination
      v-if="ready"
      class="away"
      :page="page"
      :totalPages="totalPages"
      :callback="getComments"
    />
  </div>
</template>

<style scoped>
.avatar img {
  padding: 0px;
  border: 0px;
  height: 48px;
}
.away {
  margin-top: 15px;
}
.author {
  color: rgb(68, 114, 196);
  font-weight: 500;
}
.comment-container {
  width: 100%;
  display: inline-flex;
  margin-top: 5px;
  margin-bottom: 5px;
}
.post-meta {
  display: inline-block;
}
.post-content .post-message p:last-child {
  margin: 0;
}
.post-content .post-message p {
  line-height: 135%;
  margin: 0 0 15px;
}
</style>



<script>
import pagination from '../components/pagination'
import {
  defaultData,
  defaultMounted,
  getComments,
  postComment
} from 'scripts/article_comments'
import formatDate from 'plugins/format_date'

export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination }
}
</script>