<template>
  <div id="article-comments">
    <h4 style="margin-left: .2rem">共 {{commentCount}} 条评论</h4>
    <div v-if="uid" style="display: flow-root;">
      <form>
        <textarea class='comment-textarea' placeholder="写评论" v-model="commentContent" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off"></textarea>
        <div class="active-button small"
             :class="{ disabled: commentPosting }"
             @click="postComment"
             style="float: right">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/></svg>
          <div :style='{ marginLeft: "10px", float: "right" }'>评论</div>
        </div>
      </form>
    </div>
    <div v-if="ready">
      <div class="comment-element" v-for="comment in comments">
        <div class='comment-header'>
          <a class="comment-avatar"
             :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
             target="_blank">
            <img width='30' height='30' :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'">
          </a>
          <div class="comment-author">
            <a
               :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.author.uid"
               target="_blank">
              {{ comment.author.name }}
            </a>
          </div>
          <div class="comment-time" :title='comment.time | formatDate'>
            {{ formatCommentTime(comment.time) }}
          </div>
          <div style='flex: 1'></div>
        </div>
        <div class='comment-content'>{{ comment.content }}&nbsp;</div>
      </div>

      <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
    </div>
    <loader v-else></loader>
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
  methods: { getComments, postComment,
    formatCommentTime (num) {
      const dt = new Date(num * 1000)
      return `${dt.getFullYear()} 年 ${dt.getMonth() + 1} 月 ${dt.getDate()} 日`
    } },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>

<style scoped>
#article-comments {
  font-size: .8rem;
}

.comment-element {
  margin: 1.2rem .2rem;
  width: calc(100% - .4rem);
  box-sizing: border-box;
  border-radius: .3rem;
  background-color: var(--block-background);
  padding: .6rem;
}

.comment-textarea {
  width: calc(100% - .4rem);
  height: 7.4em;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0.6em;
  font-size: 0.7rem;
  background-color: #00000000;
  outline: none;
  resize: none;
  color: var(--color);
  border: 0;
  border-radius: .2rem;
  background-color: var(--block-background);
  margin: 0 .2rem;
}

.comment-textarea:focus {
  box-shadow: 0 0 0 .1rem var(--blue-main);
}

.comment-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 0.7rem;
  line-height: 1.5rem;
}

.comment-header img {
  border-radius: 50%;
}

.comment-author {
  margin-left: .5rem;
}

.comment-time {
  margin-left: .5rem;
  color: var(--blurred-color);
}

.comment-content {
  font-size: .7rem;
}
</style>
