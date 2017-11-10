import axios from 'axios'
import formatDate from '../plugins/format_date'

export default pagination => {
  return {
    data () {
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
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getComments(this.page)
      })
    },
    methods: {
      async getComments (page) {
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
      },
      async postComment () {
        this.commentPosting = true
        await axios.post('/api/blog/reply/' + this.BlogGlobals.blogID, {
          content: this.commentContent
        })
        this.commentContent = ''
        this.commentPosting = false
        this.getComments(1 + parseInt((this.commentCount) / 10))
      }
    },
    filters: { formatDate },
    components: { pagination }
  }
}
