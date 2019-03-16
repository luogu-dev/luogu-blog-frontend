<template>
  <div class id="article-vote">
    <div class="vote-thumbs">
      <div style="flex:10"></div>
      <a class>{{ thumbUp }}</a>
      <div @click="performVote(1)">
        <i class="thumbs up outline icon" :class="{ 'thump-up' : canVoteUp}"></i>
      </div>
      <div @click="performVote(-1)">
        <i class="thumbs down outline icon" :class="{ 'thump-down' : canVoteDown}"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultData, performVote } from 'scripts/article'
export default {
  data: defaultData,
  computed: {
    canVoteUp () {
      return this.checkCanVote(1)
    },
    canVoteDown () {
      return this.checkCanVote(-1)
    }
  },
  methods: {
    performVote,
    checkCanVote (voteType) {
      // Must be logged in, and either not voted,
      // or voted the same voteType,
      // (in which case triggers un-vote)
      return this.uid && (this.vote === 0 || this.vote === voteType)
    }
  }
}
</script>
