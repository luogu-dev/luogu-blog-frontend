import axios from 'axios'
import queryParams from 'plugins/query_string'
import queryString from 'query-string'
import _ from 'lodash'

export function defaultData () {
  return {
    postCount: 0,
    posts: [],
    page: 1,
    keyword: _.get(queryParams, 'keyword', ''),
    type: _.get(queryParams, 'type', ''),
    totalPages: 1,
    ready: false,
    uid: BlogGlobals.currentUser,
    config: BlogGlobals.config
  }
}

export function defaultMounted () {
  this.$nextTick(function () {
    this.getPosts(this.page)
  })
}

export function defaultMountedWithSearchEvent () {
  this.$nextTick(function () {
    window.eventBus.$on('search', keyword => {
      this.keyword = keyword
      this.getPosts(1)
    })
    this.getPosts(this.page)
  })
}

export const defaultWatch = {
  type () {
    this.getPosts(1)
  }
}

export async function getPosts (page) {
  this.page = page
  this.ready = false
  window.location.hash = queryString.stringify(_.pickBy({
    type: this.type,
    keyword: this.keyword
  }, _.identity))
  const response = await axios.get('/api/blog/lists', {
    params: {
      uid: BlogGlobals.blogUID,
      keyword: this.keyword,
      type: this.type,
      page
    }
  })
  this.postCount = response.data.data.count
  this.totalPages = 1 + parseInt((this.postCount - 1) / 10)
  this.posts = response.data.data.result
  this.ready = true
}

export async function getWaterfallPosts (page) {
  if (!this.ready || this.page === this.totalPages) return
  this.page = page
  this.ready = false
  const response = await axios.get('/api/blog/lists', {
    params: {
      uid: BlogGlobals.blogUID,
      page
    }
  })
  this.postCount = response.data.data.count
  this.totalPages = 1 + parseInt((this.postCount - 1) / 10)
  this.posts = this.posts.concat(response.data.data.result)
  this.ready = true
}
