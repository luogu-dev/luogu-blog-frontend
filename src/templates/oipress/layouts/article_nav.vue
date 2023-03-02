<template>
  <div class='nav-bar' :style='{ boxShadow: shadowStyle }'>
    <div class='nav-bar-wrapper'>
      <div class='active-button' @click='backToMainPage'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
      </div>
      <div :style='{ flex: 1 }'>
        <div class='text-flip'>
          <span class='text-flip-content' :class='[enterContent ? "left" : "middle"]'>{{ first }}</span>
          <span class='text-flip-content' :class='[enterContent ? "middle" : "right"]'>{{ last }}</span>
        </div>
      </div>
      <div class='active-button-wrapper' :class='{ collapsed: !enterContent }'>
        <div class='active-button' @click='backToTop'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
        </div>
      </div>
      <div class='active-button' v-if='isSelf' @click='editPage'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      </div>
      <div class='active-button' @click='toggleTheme'>
        <svg v-if="currentTheme === 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
        <svg v-if="currentTheme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
      </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      enterContent: false,
      shadowStyle: '0px 0px 0px #0000001a, 0px 0px 0px #0003',
      currentTheme: localStorage.getItem('oipress-theme')
    }
  },
  created() {
    if (this.currentTheme !== 'light' && this.currentTheme !== 'dark') {
      this.currentTheme = 'light'
      localStorage.setItem('oipress-theme', this.currentTheme)
    }
    this.applyTheme()
  },
  computed: {
    first() {
      return BlogGlobals.blogName;
    },
    last() {
      return $('.post-title').text()
    },
    isSelf() {
      return BlogGlobals.currentUser === BlogGlobals.blogUID
    }
  },
  mounted() {
    const that = this
    this.hook = () => {
      const pos = window.scrollY
      const hgt = $('#header-block').outerHeight() - 48
      that.enterContent = pos > hgt
      let delta = pos - hgt
      delta = Math.max(Math.min(delta / 5, 4), 0)
      that.shadowStyle = `0px 0px ${delta}px #0000001a, 0px ${delta}px ${delta * 2}px #0003`
    }
    window.addEventListener('scroll', this.hook)
    window.addEventListener('resize', this.hook)
    this.hook()
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    backToMainPage() {
      window.location.href = '.'
    },
    editPage() {
      window.location.href = BlogGlobals.luoguAddress + '/blogAdmin/article/edit/' + BlogGlobals.postID
    },
    applyTheme() {
      document.documentElement.setAttribute('data-theme', this.currentTheme)
    },
    toggleTheme() {
      if (this.currentTheme === 'light') {
        this.currentTheme = 'dark'
      }
      else {
        this.currentTheme = 'light'
      }
      localStorage.setItem('oipress-theme', this.currentTheme)
      this.applyTheme()
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.hook)
    window.removeEventListener('resize', this.hook)
  }
}
</script>

<style scoped>
.text-flip {
  position: relative;
  display: block;
  height: 48px;
  width: 100%;
  overflow: visible;
}

.text-flip-content {
  display: inline-block;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.text-flip-content {
  transition: all 0.25s ease-out;
}

.text-flip-content.left {
  opacity: 0;
  transform: translateX(-15px);
}

.text-flip-content.middle {
  opacity: 1;
  transform: translateX(0px);
}

.text-flip-content.right {
  opacity: 0;
  transform: translateX(15px);
}
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  z-index: 10;
  background-color: var(--primary-background);
  color: var(--primary-color);
  overflow: visible;
}

.nav-bar-wrapper {
  display: flex;
  flex-direction: row;
  width: calc(100% - 8px);
  max-width: 1244px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 48px;
  font-size: 18px;
  line-height: 48px;
}
</style>
