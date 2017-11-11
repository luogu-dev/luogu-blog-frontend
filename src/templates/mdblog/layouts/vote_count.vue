<template>
      <div id = "vote-count" class="mdui-float-right">
          <i class="mdui-icon material-icons"  :class="{ 'mdui-text-color-theme': (vote == 0), 'mdui-text-color-theme-accent': (vote !== 0) }">thumb_up</i>
          <i class="mdui-typo-caption-opacity" :class="{ 'mdui-text-color-theme': (vote == 0), 'mdui-text-color-theme-accent': (vote !== 0) }">{{ thumbUp }}</i>
      </div>
</template>

<script>
  import { defaultData } from 'scripts/article_vote'
  export default {
    data: defaultData,
    computed: {},
    methods: {}
  }
</script>
