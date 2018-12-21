<template>
  <div id="article-list">
    <div class="ui text container">
      <div style="text-align: right;">
        <div
          class="ui icon input"
          :class="{ labeled: type }"
          style="min-width: 50%;"
        >
          <div
            v-if="type"
            class="ui label"
            style="cursor: pointer;"
            @click="type = ''"
          >
            <i class="bookmark icon" />
            {{ type }}
          </div>
          <input
            v-model="keyword"
            type="text"
            placeholder="搜索"
          >
          <i
            v-if="ready"
            class="inverted circular search link icon"
            @click="getPosts(1)"
          />
          <i
            v-if="!ready"
            class="spinner icon"
          />
        </div>
      </div>
      <div v-if="ready">
        <div
          v-for="post in posts"
          :key="post.PostTime"
          class="ui vertical segment"
        >
          <h2 class="ui header">
            <a :href="post.Identifier">
              {{ post.Title }}
            </a>
            <span class="sub header">
              <i class="wait icon" />{{ post.PostTime | formatDate }}
              &emsp;
              <i class="thumbs outline up icon" />{{ post.ThumbUp }}
              &emsp;
              <i class="bookmark icon" /><a
                style="cursor: pointer;"
                @click="type = post.Type"
              >
                {{ post.Type }}
              </a>
            </span>
          </h2>
          <p>{{ post.ContentDescription }}</p>
        </div>
      </div>
      <loader v-else />
    </div>

    <pagination
      v-if="ready"
      :page="page"
      :total-pages="totalPages"
      :callback="getPosts"
    />
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import loader from '../components/loader.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  filters: { formatDate },
  components: { pagination, loader },
  data: defaultData,
  watch: defaultWatch,
  mounted: defaultMounted,
  methods: { getPosts }
}
</script>
