<template>
  <div id="article-list">
    <div class="ui text container">
      <div v-if="ready">
        <div v-for="post in posts" class="ui vertical segment">
          <h2 class="ui header">
            <a :href="post.Identifier">{{ post.Title }}</a>
            <span class="sub header">
              <i class="wait icon"></i>{{ post.PostTime | formatDate }}
              &emsp;
              <i class="thumbs outline up icon"></i>{{ post.ThumbUp }}
            </span>
          </h2>
          <p>{{ post.ContentDescription }}</p>
        </div>
      </div>
      <div class="ui segment" v-else>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
        <div class="ui active inverted dimmer">
          <div class="ui text loader"></div>
        </div>
      </div>
    </div>

    <pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
  </div>
</template>

<script>
  import pagination from '../components/pagination.vue'
  import ArticleList from 'scripts/article_list'
  export default ArticleList(pagination)
</script>
