<template>
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" v-if="page != 1" @click="callback(page - 1)">&lt; 前一页</a>
    </li>
    <li class="page-item">
      <a class="page-link" v-if="page != totalPages" @click="callback(page + 1)">后一页 &gt;</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>