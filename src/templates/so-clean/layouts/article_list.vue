<template>
	<div id="article-list">
		<article v-for="post in posts">
			<header>
				<h1>
					<a :href="post.identifier">{{ post.title }}</a>
				</h1>
				<br />
				<small>
          <time>{{ post.postTime | formatDate }}</time>
          in <a style="cursor: pointer" @click="type = post.type">{{ post.type }}</a>
        </small>
			</header>
			<p>{{ post.contentDescription }}</p>
		</article>
		<pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
	</div>
</template>

<script>
import pagination from '../components/pagination.vue'
import { defaultData, defaultMounted, defaultWatch, getPosts } from 'scripts/article_list'
import formatDate from 'plugins/format_date'
export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: { getPosts },
  filters: { formatDate },
  components: { pagination }
}
</script>
