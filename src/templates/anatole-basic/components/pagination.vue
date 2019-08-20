<template>
  <div class="pagination">
    <ul class="clearfix">
      <li class="pre pagbuttons" v-if="page != 1">
        <a class="btn" role="navigation" @click="callback(page - 1)" href="#">上一页</a> 
      </li>
      <li class="next pagbuttons" v-if="page != totalPages">
        <a class="btn" role="navigation" @click="callback(page + 1)" href="#">下一页</a> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['callback', 'page', 'totalPages']
}
</script>
