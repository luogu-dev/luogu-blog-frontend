import axios from 'axios'
import formatDate from '../plugins/format_date'

export default pagination => {
  return {
    data () {
      return {
        postCount: 0,
        posts: [],
        page: 1,
        totalPages: 1,
        ready: false
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.getPosts(this.page)
      })
    },
    methods: {
      async getPosts (page) {
        this.page = page
        this.ready = false
        const response = await axios.get('/api/blog/lists', {
          params: {
            uid: blogUID,
            page: page
          }
        })
        this.postCount = response.data.data.count
        this.totalPages = 1 + parseInt((this.postCount - 1) / 10)
        this.posts = response.data.data.result
        this.ready = true
      }
    },
    filters: {
      formatDate: formatDate
    },
    components: {
      pagination: pagination
    }
  }
}
