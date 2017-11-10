import axios from 'axios'

export default {
  data () {
    return {
      vote: BlogGlobals.vote,
      thumbUp: BlogGlobals.thumbUp,
      uid: BlogGlobals.currentUser,
      BlogGlobals
    }
  },
  methods: {
    async performVote (voteType) {
      if (voteType === this.vote) { this.vote = 0 } else { this.vote = voteType }

      if (voteType === 1 && this.vote === 0) { this.thumbUp-- } else if (voteType === 1 && this.vote === 1) { this.thumbUp++ }

      await axios.post('/api/blog/vote/' + this.BlogGlobals.blogID, {
        Type: this.vote
      })
    }
  }
}
