import axios from 'axios'

export default {
  data() {
    return {
      vote: vote,
      thumbUp: thumbUp,
      uid: currentUser
    }
  },
  methods: {
    async performVote(voteType) {
      if(voteType === this.vote)
        this.vote = -1;
      else
        this.vote = voteType;

      if(voteType === 1 && this.vote === 0)
        this.thumbUp--;
      else if(voteType === 1 && this.vote === 1)
        this.thumbUp++;

      await axios.post("/api/blog/vote/" + blogID, {
        Type: this.vote
      });
    }
  }
}
