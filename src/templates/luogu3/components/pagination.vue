<template>
  <div
    class="ui three column centered grid"
    style="margin: 30px; text-align:center"
  >
    <hr
      v-if="totalPages > 1"
      class="am-article-divider blog-hr"
    >
    <ul class="am-pagination blog-pagination">
      <li
        v-if="page != 1 "
        class="am-pagination-prev"
      >
        <a @click="callback(page - 1)">
          &laquo; 上一页
        </a>
      </li>
      <li
        v-if="page != totalPages "
        class="am-pagination-next"
      >
        <a @click="callback(page + 1)">
          下一页 &raquo;
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
