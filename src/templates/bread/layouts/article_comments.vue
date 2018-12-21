<template>
  <div
    id="article-comments"
    class=""
  >
    <div class="form-group">
      <label for="comment-textArea">
        回复文章
      </label>
      <textarea
        id="comment-textArea"
        v-model="commentContent"
        class="form-control"
        rows="3"
      />
    </div>
    <button
      :class="{ active: commentPosting }"
      :disabled="commentPosting"
      type="submit"
      class="btn btn-primary"
      @click="postComment"
    >
      提交
    </button>
    <hr>
    <h3 style="margin-bottom: 20px;">
      评论
    </h3>
    <div
      v-for="comment in comments"
      :key="comment.ReplyTime"
      class="bread-comment"
    >
      <div
        class="avatar"
        style="margin-right: 12px;"
      >
        <a
          target="_blank"
          class="user"
        >
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
        </a>
      </div>
      <div class="post-body">
        <a
          class="author"
          style="font-weight: 500"
        >
          {{ comment.Author.Username }}
        </a>
        <div class="post-meta">
          <div class="date">
            {{ comment.ReplyTime | formatDate }}
          </div>
        </div>
        <div
          class="post-body-inner"
          style="margin: 0;"
        >
          {{ comment.Content }}
        </div>
      </div>
    </div>
    <pagination
      v-if="ready"
      class="away"
      :page="page"
      :total-pages="totalPages"
      :callback="getComments"
    />
  </div>
</template>

<style scoped>
  .away {
    margin-top: 14px;
  }

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
  filters: { formatDate },
  components: { pagination },
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment }
}
</script>

