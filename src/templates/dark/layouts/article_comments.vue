<template>
  <div class="ui comments" id="article-comments">
    <div v-if="uid">
      <h3 class="ui dividing header">发表评论</h3>
      <form class="ui reply form">
        <div class="field">
          <textarea title="" v-model="commentContent" style="height: 3em;"></textarea>
        </div>
        <div class="ui blue labeled submit icon button"
             :class="{ disabled: commentPosting }"
             @click="postComment">
          <i class="icon edit"></i> 评论
        </div>
      </form>
    </div>

    <h3 class="ui dividing header">评论</h3>
    <div v-if="ready">
      <div class="comment" v-for="comment in comments" :key="comment.time">
        <a class="avatar"
           :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
           target="_blank">
           <avatar :url="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'" :userName='comment.author.name' />
        </a>
        <div class="content">
          <a class="author"
             :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.author.uid"
             target="_blank">
            {{ comment.author.name }}
          </a>
          <div class="metadata">
            <span class="date">发表于 {{ comment.time | formatDate }}</span>
          </div>
          <div class="font-color-1">
            {{ comment.content }}&nbsp;
          </div>
        </div>
      </div>

      <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getComments"></pagination>
    </div>
    <div v-else-if="uid !== NaN" class="message-invisiable">
      无法显示评论,评论获取失败
    </div>
    <div v-else class="message-invisiable">
      <a href="https://www.luogu.com.cn/">登录</a>之后才能查看评论
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, getComments, postComment } from 'scripts/article_comments'
import formatDate from 'plugins/format_date'
import avatar from '../components/avatar'
export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: { getComments, postComment },
  filters: { formatDate },
  components: { pagination, avatar }
}
</script>

<style scoped>
.message-invisiable{
  width: 100%;
  height:150px;
  text-align: center;
  line-height: 150px;
}
</style>


