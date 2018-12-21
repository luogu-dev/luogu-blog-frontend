<template>
  <div id="article-list">
    <div>
      <div v-if="ready">
        <div
          v-for="post in posts"
          :key="post.postID"
        >
          <div class="mdui-card mdblog-article-card mdui-hoverable">
            <div style="margin: 20px;">
              <div class="mdui-card-primary">
                <div class="mdui-row">
                  <a
                    class="mdui-float-left mdblog-list-title mdui-card-primary-title"
                    :href="post.Identifier"
                  >
                    {{ post.Title }}
                  </a>
                  <div class="mdui-chip mdui-float-right">
                    <span
                      class="mdui-chip-title"
                      style="cursor: pointer"
                      @click="type = post.Type"
                    >
                      {{ post.Type }}
                    </span>
                  </div>
                </div>

                <div class="mdui-card-primary-subtitle">
                  {{ post.PostTime | formatDate }}
                </div>
              </div>
              <div class="mdui-card-content mdui-typo-body-1">
                {{ post.ContentDescription }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination
        v-if="ready"
        :page="page"
        :total-pages="totalPages"
        :callback="getPosts"
      />
    </div>
  </div>
</template>

<script>
  import pagination from '../components/pagination.vue'
  import { defaultData, defaultWatch, defaultMountedWithSearchEvent, getPosts } from 'scripts/article_list'
  import formatDate from 'plugins/format_date'

  export default {
    filters: { formatDate },
    components: { pagination },
    data: defaultData,
    watch: defaultWatch,
    mounted: defaultMountedWithSearchEvent,
    methods: { getPosts }
  }
</script>
