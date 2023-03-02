<template>
  <div id="article-list-wrapper">
    <div id="article-list">
      <div class="container">
        <div style="width: 100%; overflow: hidden; display: flow-root; position: relative;">
          <div class="search-wrapper">
            <div style="flex: 1" :style='{ display: ready ? "none" : "block" }'></div>
            <div v-if="type" class="active-button small" @click="type = ''">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
              <div>{{ type }}</div>
            </div>
            <div v-if="!ready" class="active-button small disabled">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            </div>
            <template v-else>
              <div class="active-button small" @click="getPosts(1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              </div>
              <div style="flex: 1">
                <input class="search-input" type="text" placeholder="搜索" v-model="keyword" @keyup.enter="getPosts(1)" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off">
              </div>
            </template>
          </div>
        </div>
        <div v-if="ready">
          <div v-for="post in posts" class="article-block">
            <div class="article-header container-tight">
              <img width='30' height='30' :src="picLocation">
              <div>
                <span :title='post.postTime | formatDate'>{{ formatArticleTime(post.postTime) }}</span><span class="splitter"></span><a v-if="post.type !== ''" style="cursor: pointer;" @click="type = post.type">{{ post.type }}</a><span v-else>未收入分类</span><span class="splitter"></span>{{ post.thumbUp }} 赞<span class="splitter"></span>{{ post.commentCount }} 评论
              </div>
            </div>
            <h2 style="margin-top: 0">
              <a :href="post.identifier">{{ post.title }}</a>
            </h2>
            <p class="container">{{ post.contentDescription }}&nbsp;</p>
            <div class="container">
              <a :href="post.identifier">继续阅读</a>
            </div>
          </div>
        </div>
        <loader v-else></loader>
      </div>

      <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  computed: {
    picLocation () {
      return BlogGlobals.picAddress + '/upload/usericon/' + BlogGlobals.blogUID + '.png'
    }
  },
  methods: { getPosts,
    formatArticleTime (num) {
      const dt = new Date(num * 1000)
      return `${dt.getFullYear()} 年 ${dt.getMonth() + 1} 月 ${dt.getDate()} 日`
    }
  },
  filters: { formatDate },
  components: { pagination, loader }
}
</script>

<style scoped>
#article-list-wrapper {
  line-height: 1.6;
  width: 100%;
  overflow: none;
}

#article-list {
  width: min(calc(100% - 32px), calc(30% + 700px));
  max-width: 1066px;
  margin: 0 auto;
  font-size: .8rem;
}

.container {
  margin: .6rem 0;
}

.container-tight {
  margin: .3rem 0;
}

.article-block {
  margin-bottom: 3.2rem;
}

.article-type {
  color: var(--blurred-color);
}

.article-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: .7rem;
  gap: .6rem;
  min-height: 1.6rem;
}

.article-header img {
  border-radius: 9999px;
}

.search-input {
  margin: 3px;
  height: 30px;
  border-radius: 5px;
  background-color: #00000000;
  line-height: 30px;
  font-size: 15px;
  padding: 0px 6px;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  width: calc(100% - 6px);
  background-color: var(--button-color);
  font-family: var(--global-font);
  color: var(--color);
}

.search-input:focus {
  box-shadow: 0 0 0 .1rem var(--blue-main);
}

.search-wrapper {
  float: right;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: min(100%, 300px);
  padding-right: .2rem;
  transition: 0s;
}

.search-wrapper > * {
  flex-shrink: 0;
}
</style>
