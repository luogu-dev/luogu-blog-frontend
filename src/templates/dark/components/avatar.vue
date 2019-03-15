<template>
  <div>
    <img class="dark-avatar" :v-if='!imgError' url='url' @error="hideImg" />
    <div class="dark-avatar" :v-if="imgError">{{ userName | getFirstChar }}</div>
  </div>
</template>

<script>
export default {
  props: {
    url: {type: String, default: ''},
    userName: {type: String, default: 'U'}
  },
  data () {
    return {
      imgError: false
    }
  },
  methods: {
    hideImg () {
      this.imgError = true
    }
  },
  filters: {
    getFirstChar (str) {
      return str.substring(0, 1).toUpperCase()
    }
  }
}
</script>

<style>

</style>
