<template>
  <ul class="pagination">
    <li class="page-item">
      <a
        v-if="page != 1"
        class="page-link"
        href="#"
        @click="callback(page - 1)"
      >
        Previous
      </a>
    </li>
    <li class="page-item">
      <a
        v-if="page != totalPages"
        class="page-link"
        href="#"
        @click="callback(page + 1)"
      >
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
