<template>
  <div id="article-comments" class="">
    <div class="form-group">
      <label for="exampleFormControlTextarea1">回复文章</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button @click="postComment"
            :class="{ active: commentPosting }"
            :disabled="commentPosting"
            type="submit"
            class="btn btn-primary">提交
    </button>
    <hr/>
    <h3 style="margin-bottom: 20px;">评论</h3>
    <div class="bread-comment" v-for="comment in comments">
      <div class="avatar" style="margin-right: 12px;">
        <a target="_blank" class="user">
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'"></a>
      </div>
      <div class="post-body">
        <a class="author" style="font-weight: 500">{{ comment.Author.Username }}</a>
        <div class="post-meta">
          <div class="date">
            {{ comment.ReplyTime | formatDate }}
          </div>
        </div>
        <div class="post-body-inner" style="margin: 0;">{{ comment.Content }}</div>
      </div>
    </div>
    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
  </div>
</template>

<style>
  .bread-comment {
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
    line-height: 21px;
    margin: 0 0 15px;
  }
</style>

<script>
import pagination from '../components/pagination'
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

