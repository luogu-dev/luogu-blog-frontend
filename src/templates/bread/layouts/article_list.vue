<template>
  <div id="article-list" class="container">
    <div class="row">
      <div class="
                col-lg-8 col-lg-offset-1
                col-md-8 col-md-offset-1
                col-sm-12
                col-xs-12
                post-list-container" v-if="posts.length !== 0" style="margin-top: 30px">
        <div class="post-list" v-for="post in posts">
          <a :href="post.Identifier">
            <h2 class="post-title">
              {{ post.Title }}
            </h2>
            <div class="post-content-preview">
              {{ post.ContentDescription }}
            </div>
            <div class="post-meta">
              {{ post.Type }} on {{ post.PostTime }}
            </div>
          </a>
          <hr/>
        </div>
      </div>
      <div class="
                col-lg-3 col-lg-offset-0
                col-md-3 col-md-offset-0
                col-sm-12
                col-xs-12
                sidebar-container" v-if="posts !==0">
        <section class="visible-md visible-lg">
          <br/>
          <img :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'">
          <p>{{ config.config.personal_setting.about }}</p>
          <ul class="list-inline">
            <li v-if="config.config.personal_setting.github_url">
              <a target="_blank" :href="config.config.personal_setting.github_url">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
              </a>
            </li>
            <li v-if="config.config.personal_setting.zhihu_url">
              <a target="_blank" :href="config.config.personal_setting.zhihu_url">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa  fa-stack-1x fa-inverse">知</i>
              </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <pagination v-if="ready" :page="page" :total-pages="totalPages" :callback="getPosts"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import formatDate from 'plugins/format_date'

export default {
  data: { defaultData },
  mounted: defaultMounted,
  watch: { defaultWatch },
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
