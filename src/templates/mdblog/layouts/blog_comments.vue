<template>
    <div id="blog-comments" class="mdui-shadow-2 mdui-hoverable" style="padding: 40px;margin-top: 15px;">
          <div class="mdui-valign" style="margin-bottom: 30px;" v-if="uid">
              <div class="mdui-textfield mdui-textfield-floating-label mdui-float-left" style="width: 95%;margin-right: 20px;">
                  <label class="mdui-textfield-label">评论</label>
                  <textarea v-model="commentContent" class="mdui-textfield-input mdui-float-left-right" ></textarea>

              </div>
              <button class ="mdblog-comment-send-btn mdui-btn mdui-btn-icon" :class="{ disabled: commentPosting }"
              @click="postComment"><i class="mdui-icon material-icons">send</i></button>
          </div>
          <div class="mdblog-comments mdui-container">
              <div class="mdblog-comment mdui-row" style="margin-top: 50px;padding-right: 30px;" v-for="comment in comments">
                  <div class="mdui-col-xs-1">
                      <img class="mdui-img-circle mdui-img-fluid" :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'"
                           :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
                           target="_blank">
                  </div>
                  <div class="mdui-col-xs-11">
                      <div class="mdui-typo-body-1-opacity mdui-typo">{{ comment.content }}&nbsp;</div>
                      <div class="mdui-typo"><hr/></div>
                      <a class="mdui-float-left mdui-typo-caption-opacity mdblog-comment-username" :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid">By {{ comment.author.name }}</a>
                      <div class="mdui-typo-caption-opacity mdui-float-right">At {{ comment.time | formatDate }}</div>
                  </div>
              </div>
              <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
          </div>
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
