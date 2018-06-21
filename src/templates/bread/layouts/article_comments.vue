<template>
  <div id="conversation">
    <div class="bread-card" v-if="uid">
      <!--<h2>发表评论</h2>-->
      <div>
        <textarea v-model="commentContent"
                  placeholder="开始讨论..."
        ></textarea>
      </div>
      <button @click="postComment"
              :class="{ active: commentPosting }"
              :disabled="commentPosting"
              type="submit"
              class="bread-button"
              value="提交">
      </button>
    </div>
    <ul v-for="comment in comments" class="bread-comments">
      <a :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.Author.UID"
         target="_blank">
        <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'"
             class="bread-image bread-image-redii bread-avatar-medium bread-avatar-hightlighted"
             style="float: left; margin-right: 20px;">
      </a>
      <div style="padding-top: 5px">
        <p>
          <b>{{ comment.Author.Username }}</b>
          <small>{{ comment.ReplyTime | formatDate }}</small>
        </p>
        <p>
          {{ comment.Content }}
        </p>
      </div>
    </ul>

    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
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

