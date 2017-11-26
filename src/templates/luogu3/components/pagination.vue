<template>
  <div class="ui three column centered grid" style="margin: 30px; text-align:center">
    <hr class="am-article-divider blog-hr" v-if="totalPages > 1">
    <ul class="am-pagination blog-pagination">
      <li class="am-pagination-prev" v-if="page != 1 "><a @click="callback(page - 1)" >&laquo; 上一页</a></li>
      <li class="am-pagination-next" v-if="page != totalPages "><a @click="callback(page + 1)" >下一页 &raquo;</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
