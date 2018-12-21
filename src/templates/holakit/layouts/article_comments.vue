<template>
  <div
    id="article-comments"
    class="hola-layout-main hola-card-stack"
    style="width: 100%;"
  >
    <div
      v-if="uid"
      class="hola-card"
    >
      <h2>发表评论</h2>
      <div style="margin-top: 10px;">
        <p>
          <textarea
            v-model="commentContent"
            class="hola-form-ctrl hola-input-multiline"
            placeholder="输入一些文字"
          />
        </p>
        <p>
          <input
            :class="{ active: commentPosting }"
            :disabled="commentPosting"
            type="submit"
            class="hola-button hola-button-primary"
            value="提交"
            @click="postComment"
          >
        </p>
      </div>
    </div>
    <div class="hola-card">
      <h2 class="hola-card-title">
        评论
      </h2>
      <div
        v-for="comment in comments"
        :key="comment.ReplyTime"
        style="margin-bottom: 15px; padding-bottom: 5px;"
      >
        <a
          :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
          target="_blank"
        >
          <img
            :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'"
            class="hola-image hola-image-radii hola-avatar hola-avatar-medium hola-avatar-highlighted"
            style="float: left; margin-right: 20px;"
          >
        </a>
        <div style="padding-top: 5px;">
          <p>
            <b>{{ comment.Author.Username }}</b>
            <small>{{ comment.ReplyTime | formatDate }}</small>
          </p>
          <p>{{ comment.Content }}&nbsp;</p>
        </div>
      </div>

      <pagination
        v-if="ready"
        :page="page"
        :total-pages="totalPages"
        :callback="getComments"
      />
    </div>
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
