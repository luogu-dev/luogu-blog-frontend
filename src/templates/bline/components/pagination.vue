<template>
  <div align="center">
    <ul class="pagination">
      <li><a @click="callback(page - 1)" :class="{ disabled: page == 1 }">&lt;</a></li>
        <li><a class="active">{{ page }}</a></li>
        <li><a @click="callback(page + 1)" :class="{ disabled: page == totalPages }">&gt;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
