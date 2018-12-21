<template>
  <div
    id="article-comments"
    class="ui comments"
  >
    <div v-if="uid">
      <h3 class="ui dividing header">
        发表评论
      </h3>
      <form class="ui reply form">
        <div class="field">
          <textarea
            v-model="commentContent"
            title=""
            style="height: 3em;"
          />
        </div>
        <div
          class="ui blue labeled submit icon button"
          :class="{ disabled: commentPosting }"
          @click="postComment"
        >
          <i class="icon edit" /> 评论
        </div>
      </form>
    </div>

    <h3 class="ui dividing header">
      评论
    </h3>
    <div v-if="ready">
      <div
        v-for="comment in comments"
        :key="comment.ReplyTime"
        class="comment"
      >
        <a
          class="avatar"
          :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
          target="_blank"
        >
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
        </a>
        <div class="content">
          <a
            class="author"
            :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.Author.UID"
            target="_blank"
          >
            {{ comment.Author.Username }}
          </a>
          <div class="metadata">
            <span class="date">
              发表于 {{ comment.ReplyTime | formatDate }}
            </span>
          </div>
          <div class="text">
            {{ comment.Content }}&nbsp;
          </div>
        </div>
      </div>

      <pagination
        v-if="ready"
        :page="page"
        :total-pages="totalPages"
        :callback="getComments"
      />
    </div>
    <loader v-else />
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import formatDate from 'plugins/format_date'
export default {
  filters: { formatDate },
  components: { pagination, loader },
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment }
}
</script>

