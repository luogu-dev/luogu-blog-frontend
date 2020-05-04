<template>
<div id="article-list">
      <div>
          <div v-if="ready">
              <div v-for="post in posts">
                  <div class="mdui-card mdblog-article-card mdui-hoverable">
                      <div style="margin: 20px;">
                          <div class="mdui-card-primary">
                            <div class="mdui-row">
                                <a class="mdui-float-left mdblog-list-title mdui-card-primary-title" :href="post.identifier">{{ post.title }}</a>
                                <div class="mdui-chip mdui-float-right">
                                  <span class="mdui-chip-title" @click="type = post.type" style="cursor: pointer">{{ post.type }}</span>
                                </div>
                            </div>

                              <div class="mdui-card-primary-subtitle">{{ post.postTime | formatDate }}</div>

                          </div>
                          <div class="mdui-card-content mdui-typo-body-1">{{ post.contentDescription }}</div>
                      </div>
                  </div>
              </div>
          </div>
          <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
      </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultWatch, defaultMountedWithSearchEvent, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMountedWithSearchEvent,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
