<template>
  <div id="article-comments animated fadeInDown" class="comments">
    <h4>评论</h4>
    <form v-if="uid" @submit.prevent="postComment">
      <textarea 
        v-model="commentContent" 
        class="comments-message" 
        rows=6 
        placeholder="写下您的评论.."
      />
      <br>
      <button 
        type="submit" 
        class="button button-info"
        :disabled="{ disabled: commentPosting }"
      >
        <i class="icon edit" /> 
        评论
      </button>
    </form>
    <table border=0 class="comments-view"  v-if="ready">
        <tr v-for="comment in comments">
          <td class="comments-logo">
            <a
              :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
              target="_blank"
            >
              <img 
                :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'" 
                style="width:42px;height:42px"
              >
            </a>
          </td>
          <td>
            <p style="line-height:auto">
              <b>
                <a :href="BlogGlobals.luoguAddress + '/space/show?uid=' + comment.Author.UID">
                  {{ comment.Author.Username }}
                </a>
              </b>
              <span style="margin-left:5px">
                <i class="fa fa-sun-o" />
                  {{ comment.ReplyTime | formatDate }}
              </span>
              <br>
              {{ comment.Content }}
            </p>
          </td> 
        </tr>
     </table>
    <p v-else>正在加载...</p>
    <pagination
      v-if="ready"
      :page="page"
      :totalPages="totalPages"
      :callback="getComments"
    />
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

