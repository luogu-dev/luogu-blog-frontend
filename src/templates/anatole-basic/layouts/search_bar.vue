<template>
  <div id="search">
    <form role="search">
        <input type="text" class="st-search-input" v-model="keyword"/>
        <i class="fa fa-search" @click.prevent="search()"></i>
    </form>
  </div>
</template>

<script>
import { defaultData, defaultMounted } from 'scripts/search_bar'

export default {
  data: defaultData,
  mounted: defaultMounted,
  methods: {
    search: undefined
  }
}
</script>