<template>
  <nav
    class="pagination"
    role="navigation"
  >
    <a
      v-if="page > 1"
      class="newer-posts"
      @click="callback(page - 1)"
    >
      <span aria-hidden="true">
        &larr;
      </span> 新点儿的
    </a>
    <span class="page-number">
      第 {{ page }} / {{ totalPages }} 页
    </span>
    <a
      v-if="page < totalPages"
      class="older-posts"
      @click="callback(page + 1)"
    >
      旧点儿的 <span aria-hidden="true">
        &rarr;
      </span>
    </a>
  </nav>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
