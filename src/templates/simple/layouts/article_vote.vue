<template>
  <div id="article-vote">
    <span :is="checkCanVote(-1) ? 'a' : 'span'"
      href="javascript:void 0" @click="performVote(-1)"
    >
      <i class="icon thumbs down" :class="{ 'outline': vote !== -1 }"
        style="transform: scale(-1,1);"
      ></i>
    </span>
    赞：{{ thumbUp }}
    <span :is="checkCanVote(1) ? 'a' : 'span'"
      href="javascript:void 0" @click="performVote(1)"
    >
      <i class="icon thumbs up" :class="{ 'outline': vote !== 1 }"></i>
    </span>
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
