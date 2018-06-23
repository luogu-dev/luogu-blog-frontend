<template>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"
         v-if="page != 1"
         @click="callback(page - 1)"
         href="#">
        Previous
      </a>
    </li>
    <li class="page-item">
      <a class="page-link"
         v-if="page != totalPages"
         @click="callback(page + 1)"
         href="#">
        Next
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
