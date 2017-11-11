<template>
<div id="article-list">
      <div>
          <div v-if="ready">
              <div v-for="post in posts">
                  <div class="mdui-card mdblog-article-card mdui-hoverable">
                      <div style="margin: 20px;">
                          <div class="mdui-card-primary">
                              <a class="mdblog-list-title mdui-card-primary-title" :href="post.Identifier">{{ post.Title }}</a>
                              <div class="mdui-card-primary-subtitle">{{ post.PostTime | formatDate }}</div>
                          </div>
                          <div class="mdui-card-content mdui-typo-body-1">{{ post.ContentDescription }}</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="mdui-valign" style="margin: 30px;" v-if="ready">
              <div class="mdui-center">
                  <div class="mdui-btn-group" v-if="totalPages > 1">
                      <a @click="getPosts(1)" :class="{ disabled: page == 1 }" class="mdui-btn"><i class="mdui-icon material-icons">first_page</i></a>
                      <a @click="getPosts(page - 1)" :class="{ disabled: page == 1 }" class="mdui-btn"><i class="mdui-icon material-icons">keyboard_arrow_left</i></a>
                      <a @click="getPosts(page - 2)" v-if="page - 2 >= 1" class="mdui-btn">{{ page - 2 }}</a>
                      <a @click="getPosts(page - 1)" v-if="page - 1 >= 1" class="mdui-btn">{{ page - 1 }}</a>
                      <a class="mdui-btn-active mdui-btn">{{ page }}</a>
                      <a @click="getPosts(page + 1)" v-if="page + 1 <= totalPages" class="mdui-btn">{{ page + 1 }}</a>
                      <a @click="getPosts(page + 2)" v-if="page + 2 <= totalPages" class="mdui-btn">{{ page + 2 }}</a>
                      <a @click="getPosts(page + 1)" :class="{ disabled: page == totalPages }" class="mdui-btn"><i class="mdui-icon material-icons">keyboard_arrow_right</i></a>
                      <a @click="getPosts(totalPages)" :class="{ disabled: page == totalPages }"  class="mdui-btn"><i class="mdui-icon material-icons">last_page</i></a>
                  </div>
              </div>
          </div>
          <div class="mdui-center" v-if="postCount < 4">
              <div v-if="postCount < 2">
                  <br><p></p><br><br><p></p><br><br><p></p><br>
              </div>
              <div v-if="postCount < 3">
                  <br><p></p><br><br><p></p><br><br><p></p><br>
              </div>
              <div >
                  <br><p></p><br><br><p></p><br><br><p></p><br>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import pagination from '../components/pagination.vue'
  import { defaultData, defaultMounted, getPosts } from 'scripts/article_list'
  import formatDate from 'plugins/format_date'
  export default {
    data: defaultData,
    mounted: defaultMounted,
    methods: { getPosts },
    filters: { formatDate },
    components: { pagination }
  }
</script>
