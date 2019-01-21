<template>
  <nav class="spl-pages" role="navigation">
    <a href="javascript:void 0" @click="callback(1)" v-if="page > 1">
      <i class="icon angle double left"></i>
    </a>
    <a href="javascript:void 0" @click="callback(page - 1)" v-if="page > 1">
      <i class="icon angle left"></i>
    </a>
    第 {{ page }} / {{ totalPages }} 页
    <a href="javascript:void 0" @click="callback(page + 1)" v-if="page < totalPages">
      <i class="icon angle right"></i>
    </a>
    <a href="javascript:void 0" @click="callback(totalPages)" v-if="page < totalPages">
      <i class="icon angle double right"></i>
    </a>
  </nav>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
