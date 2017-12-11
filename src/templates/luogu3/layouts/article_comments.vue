<template>
  <div class="ui comments" id="article-comments">
    <div v-if="uid">
      <div class="lg-article">
        <h2>
          有什么感想？
        </h2>
        <div class="am-form-group am-form">
          <textarea rows="3" name="benbencontent" v-model="commentContent">
          </textarea>
        </div>
        <button class="am-btn am-btn-danger am-btn-sm" :class="{ disabled: commentPosting }"
        @click="postComment">
          　发射评论！　
        </button>
      </div>
    </div>
    <ul class="am-comments-list am-comments-list-flip lg-article" v-if="ready">
      <li class="am-comment am-comment-primary" v-for="comment in comments">
        <div class="lg-left">
          <a class="avatar" :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
          target="_blank">
            <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'" class="am-comment-avatar">
          </a>
        </div>
        <div class="am-comment-main">
          <header class="am-comment-hd">
            <div class="am-comment-meta">
              <a class="author" :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.Author.UID"
              target="_blank">
                {{ comment.Author.Username }}
              </a>
              {{ comment.ReplyTime | formatDate }}
            </div>
          </header>
          <div class="am-comment-bd">
            {{ comment.Content }}&nbsp;
          </div>
        </div>
      </li>
    </ul>
    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments">
    </pagination>
    <loader v-else>
    </loader>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>
