import axios from 'axios'

export function defaultData () {
  return {
    postCount: 0,
    posts: [],
    page: 1,
    keyword: '',
    type: '',
    totalPages: 1,
    ready: false,
    uid: BlogGlobals.currentUser
  }
}

export function defaultMounted () {
  this.$nextTick(function () {
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
