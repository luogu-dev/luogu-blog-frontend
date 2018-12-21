<template>
  <div
    id="small-header"
    class="mdui-appbar mdui-shadow-0"
    style="position: fixed;z-index: 100;top:0;background-color:transparent;"
  >
    <div
      id="topbar"
      class="mdui-toolbar "
    >
      <a
        id="md-menu"
        class="mdui-btn mdui-btn-icon"
      >
        <i
          class="mdui-icon material-icons"
          mdui-drawer="{target: '#mdblog-drawer', swipe: true, overlay: true}"
        >
          menu
        </i>
      </a>
      <div class="mdui-toolbar-spacer" />
      <button
        class="mdui-btn mdui-btn-icon mdui-ripple"
        style="margin-right: 0;"
        @click.prevent="search()"
      >
        <i class="mdui-icon material-icons">
          search
        </i>
      </button>
      <div
        class="mdui-textfield"
        style="margin-left: 0;"
      >
        <input
          v-model="keyword"
          class="mdui-textfield-input"
          type="text"
          placeholder="Search"
        >
      </div>
    </div>
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
