<template>
	<div id="article-list">
		<article v-for="post in posts">
			<header>
				<h1>
					<a :href="post.Identifier">{{ post.Title }}</a>
				</h1>
				<br />
				<small><time>{{ post.PostTime | formatDate }}</time></small>
			</header>
			<p>{{ post.ContentDescription }}</p>
		</article>
		<pagination v-if="ready" :page="page" :totalPages="totalPages" :callback="getPosts"></pagination>
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
