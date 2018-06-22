<template>
  <ul class="pager" v-if="totalPages > 1">
    <li @click="callback(page - 1)"
        :class="{ disabled: page == totalPages }"
        v-if="page - 1 > 0">
      ← Newer Posts
    </li>
    <li @click="callback(page + 1)"
        :class="{ disabled: page == totalPages }"
        v-if="page + 1 <= totalPages">
      Older Posts →
    </li>
  </ul>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
