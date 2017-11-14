<template>
  <div id="article-list" class="hola-container hola-columns hola-card-stack">
    <div class="hola-columns-item" v-for="post in posts">
      <a :href="post.Identifier" style="text-decoration: none; color: var(--hola-text-dark-color);">
        <div class="hola-card">
          <h2 class="hola-card-title">
            {{ post.Title }}
          </h2>
          <p>{{ post.ContentDescription }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import { defaultData, defaultMounted, getPosts } from 'scripts/article_list'
  import formatDate from 'plugins/format_date'
  export default {
    data: defaultData,
    mounted: defaultMounted,
    methods: { getPosts },
    filters: { formatDate },
    components: { }
  }
</script>
