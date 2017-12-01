<template>
  <div id="small-header" class="mdui-appbar mdui-shadow-0"
       style="position: fixed;z-index: 100;top:0;">
    <div id="topbar" class="mdui-toolbar ">
      <a id="md-menu" class="mdui-btn mdui-btn-icon"><i
        class="mdui-icon material-icons" mdui-drawer="{target: '#mdblog-drawer', swipe: true, overlay: true}">menu</i></a>
      <div class="mdui-toolbar-spacer"></div>
      <button class="mdui-btn mdui-btn-icon mdui-ripple" @click="getPosts(1)">
        <i class="mdui-icon material-icons">search</i>
      </button>
      <input style="max-width: 20%;" class="mdui-textfield-input" type="text" placeholder="Search" v-model="keyword"/>
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'

export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
