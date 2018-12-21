<template>
  <nav
    class="spl-pages"
    role="navigation"
  >
    <a
      v-if="page > 1"
      href="javascript:void 0"
      @click="callback(1)"
    >
      <i class="icon angle double left" />
    </a>
    <a
      v-if="page > 1"
      href="javascript:void 0"
      @click="callback(page - 1)"
    >
      <i class="icon angle left" />
    </a>
    第 {{ page }} / {{ totalPages }} 页
    <a
      v-if="page < totalPages"
      href="javascript:void 0"
      @click="callback(page + 1)"
    >
      <i class="icon angle right" />
    </a>
    <a
      v-if="page < totalPages"
      href="javascript:void 0"
      @click="callback(totalPages)"
    >
      <i class="icon angle double right" />
    </a>
  </nav>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
