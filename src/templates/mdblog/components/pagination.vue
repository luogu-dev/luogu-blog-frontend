<template>
  <div class="ui three column centered grid" style="margin: 30px;">
    <div class="ui pagination menu" v-if="totalPages > 1">
      <a @click="callback(1)" :class="{ disabled: page == 1 }" class="item">&lt;&lt;</a>
      <a @click="callback(page - 1)" :class="{ disabled: page == 1 }" class="item">&lt;</a>
      <a @click="callback(page - 2)" v-if="page - 2 >= 1" class="item">{{ page - 2 }}</a>
      <a @click="callback(page - 1)" v-if="page - 1 >= 1" class="item">{{ page - 1 }}</a>
      <a class="active item">{{ page }}</a>
      <a @click="callback(page + 1)" v-if="page + 1 <= totalPages" class="item">{{ page + 1 }}</a>
      <a @click="callback(page + 2)" v-if="page + 2 <= totalPages" class="item">{{ page + 2 }}</a>
      <a @click="callback(page + 1)" :class="{ disabled: page == totalPages }" class="item">&gt;</a>
      <a @click="callback(totalPages)" :class="{ disabled: page == totalPages }"  class="item">&gt;&gt;</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['callback', 'page', 'totalPages']
  }
</script>
