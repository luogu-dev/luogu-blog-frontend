<template>
  <div id="article-comments">
    <form
      v-if="uid"
      class="clearfix"
      @submit.prevent="postComment"
    >
      <textarea
        v-model="commentContent"
        class="spl-comment-editor spl-border"
      />
      <button
        type="submit"
        class="spl-comment-submit spl-border"
        :class="{ disabled: commentPosting }"
      >
        <i class="icon edit" /> 评论
      </button>
    </form>
    <div v-if="ready">
      <div
        v-for="comment in comments"
        :key="comment.ReplyTime"
        class="spl-comment clearfix"
      >
        <div class="avator">
          <a
            :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
            target="_blank"
          >
            <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
          </a>
        </div>
        <div class="content">
          <div class="poster">
            {{ comment.Author.Username }}
            <i class="icon wait" />
            <time>{{ comment.ReplyTime | formatDate }}</time>
          </div>
          {{ comment.Content }}&nbsp;
        </div>
      </div>
      <pagination
        v-if="ready"
        :page="page"
        :total-pages="totalPages"
        :callback="getComments"
      />
    </div>
    <p v-else>
      正在加载...
    </p>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
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

