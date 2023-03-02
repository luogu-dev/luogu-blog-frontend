<template>
  <div class='pagination-wrapper'>
    <div class="pagination" v-if="totalPages > 1">
      <div @click="callback(1)" v-if="page !== 1" class="pagination-element"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"/><path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/></svg></div>
      <div @click="callback(page - 2)" v-if="page - 2 >= 1" class="pagination-element"><div style='flex: 1'>{{ page - 2 }}</div></div>
      <div @click="callback(page - 1)" v-if="page - 1 >= 1" class="pagination-element"><div style='flex: 1'>{{ page - 1 }}</div></div>
      <div class="pagination-element disabled"><div style='flex: 1'>{{ page }}</div></div>
      <div @click="callback(page + 1)" v-if="page + 1 <= totalPages" class="pagination-element"><div style='flex: 1'>{{ page + 1 }}</div></div>
      <div @click="callback(page + 2)" v-if="page + 2 <= totalPages" class="pagination-element"><div style='flex: 1'>{{ page + 2 }}</div></div>
      <div @click="callback(totalPages)" v-if="page !== totalPages" class="pagination-element"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"/><path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>

<style scoped>
.pagination-wrapper {
  text-align: center;
  width: 100%;
  margin: .6rem 0rem;
}

.pagination {
  display: inline-flex;
  flex-direction: row;
}

.pagination-element {
  margin: 4px;
  min-width: 32px;
  height: 32px;
  text-align: center;
  transition: 0.25s;
  border: 1px solid var(--line-color);
  line-height: 32px;
  font-size: 16px;
  border-radius: 9999px;
  cursor: pointer;
  user-select: none;
}

.pagination-element.disabled {
  cursor: default;
}

.pagination-element.disabled, .pagination-element:hover {
  background-color: var(--button-color);
}

.pagination-element > svg {
  margin: 6px 0px;
  height: 20px;
  width: 20px;
  fill: var(--color);
}
</style>