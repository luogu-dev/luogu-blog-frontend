<template>
  <div id="article-vote">
    <div>
      <button type="button"
              class="btn btn-outline-primary"
              :class="{ active: vote === 1 }"
              @click="performVote(1)">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
      <button type="button"
              class="btn btn-outline-secondary"
              :class="{ active: vote === -1 }"
              @click="performVote(-1)">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
      </button>
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

