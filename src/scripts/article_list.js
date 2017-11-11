import axios from 'axios'

export function defaultData () {
  return {
    postCount: 0,
    posts: [],
    page: 1,
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

export async function getPosts (page) {
  this.page = page
  this.ready = false
  const response = await axios.get('/api/blog/lists', {
    params: {
      uid: this.blogID,
      page
    }
  })
  this.postCount = response.data.data.count
  this.totalPages = 1 + parseInt((this.postCount - 1) / 10)
  this.posts = response.data.data.result
  this.ready = true
}
