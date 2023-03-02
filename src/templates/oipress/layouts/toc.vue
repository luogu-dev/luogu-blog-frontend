<template>
  <div id='toc-wrapper'>
    <div id='toc' :style='{ display: tocList.length === 0 ? "none" : "block", height: tocHeight + "px" }'>
      <div id="toc_title">
        目录
      </div>
      <div id="toc_content">
        <template v-for='(item, index) in tocList'>
          <div class='toc-element' :class='clampClass(index, currentHeader)' style='width: 100%; box-sizing: border-box; padding-right: 0.6em; margin-top: 0.625em' :style='{ paddingLeft: ((item[0] - minIdx + 1) * 0.6) + "em" }'>
            <span @click='jumpLink(item[1])'>{{item[2]}}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
const headerEle = $('#header-block'), blogEle = $('#blog-container')
export default {
  data() {
    return {
      tocList: window.headerlinkInfo,
      currentHeight: 0,
      minIdx: 6,
      tocHeight: 0,
      currentHeader: -1
    }
  },
  created() {
    for (let i = 0; i < this.tocList.length; i ++) {
      this.minIdx = Math.min(this.minIdx, this.tocList[i][0])
      this.tocList[i].push($(`[name='${this.tocList[i][1].replace(/'/g, "\\'")}']`))
    }
    this.updateHeight()
  },
  mounted() {
    window.addEventListener('scroll', this.updateHeight)
    window.addEventListener('resize', this.updateHeight)
  },
  methods: {
    clampClass (x, y) {
      if (x < y) {
        return 'past'
      }
      if (x === y) {
        return 'present'
      }
      return 'future'
    },
    headerHeight() {
      return headerEle.outerHeight()
    },
    blogHeight() {
      return blogEle.outerHeight()
    },
    updateHeight() {
      const top = Math.max(this.headerHeight() - window.scrollY + 24, 48 + 24)
      const bottom = Math.min(window.innerHeight - 24, this.blogHeight() + this.headerHeight() - window.scrollY - 24)
      this.tocHeight = bottom - top

      while (this.currentHeader >= 0 && this.headerState(this.currentHeader) === -1) {
        -- this.currentHeader
      }
      if (this.currentHeader === -1) {
        if (this.headerState(0) !== -1) {
          this.currentHeader = 0
        }
        else {
          return
        }
      }
      while (this.currentHeader < this.tocList.length - 1 && this.headerState(this.currentHeader) === 1) {
        ++ this.currentHeader
      }
    },
    headerState(id) {
      if (window.scrollY < this.tocList[id][3].position().top - 48 - 5)
        return -1;
      if (id < this.tocList.length - 1 && window.scrollY >= this.tocList[id+1][3].position().top - 48 - 5)
        return 1;
      return 0;
    },
    jumpLink(context) {
      window.locateHeader(context)
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.updateHeight)
    window.removeEventListener('resize', this.updateHeight)
  },
}
</script>

<style scoped>
#toc-wrapper {
  top: 48px;
  padding: 24px 0px;
  position: -webkit-sticky;
  position: sticky;
  width: 240px;
  flex-shrink: 0;
  height: 0px;
  margin-left: 16px;
}

#toc {
  padding: 0 4px;
  line-height: 1.3;
  font-size: 14px;
  overflow-y: auto;
  position: relative;
}

@media screen and (max-width:900px) {
  #toc-wrapper {
    display: none;
  }

}

#toc_title {
  font-weight: bold;
  background-color: var(--background);
  width: 100%;
  box-sizing: border-box;
  padding: 0 .6em;
  position: sticky;
  top: 0;
  box-shadow: 0 0 .4rem .4rem var(--background);
}

.toc-element span {
  transition: 0.125s;
  cursor: pointer;
}

.toc-element span:hover {
  color: var(--link-hover-color);
}

.toc-element.past span:not(:hover) {
  color: var(--blurred-color);
}

.toc-element.present span:not(:hover) {
  color: var(--link-color);
}

.toc-element.future span:not(:hover) {
  color: var(--color);
}
</style>