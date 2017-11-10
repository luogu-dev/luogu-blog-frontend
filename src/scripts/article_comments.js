import axios from 'axios'

export function defaultData () {
  return {
    commentCount: 0,
    comments: [],
    page: 1,
    totalPages: 1,
    ready: false,
    commentContent: '',
    commentPosting: false,
    BlogGlobals,
    uid: BlogGlobals.currentUser
  }
}

export function defaultMounted () {
  this.$nextTick(function () {
    this.getComments(this.page)
  })
}

export async function getComments (page) {
  this.page = page
  this.ready = false
  const response = await axios.get('/api/blog/replies/' + this.BlogGlobals.blogID, {
    params: {
      page: page
    }
  })

  this.commentCount = response.data.data.count
  this.totalPages = 1 + parseInt((this.commentCount - 1) / 10)
  this.comments = response.data.data.result
  this.ready = true
}

export async function postComment () {
  this.commentPosting = true
  await axios.post('/api/blog/reply/' + this.BlogGlobals.blogID, {
    content: this.commentContent
  })
  this.commentContent = ''
  this.commentPosting = false
  this.getComments(1 + parseInt((this.commentCount) / 10))
}
