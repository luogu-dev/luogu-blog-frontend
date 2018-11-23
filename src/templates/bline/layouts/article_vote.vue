<template>
  <div id="article-vote">
    <a v-show="canVoteUp"
         :class="{ active: vote === 1 }"
         @click="performVote(1)">
      <span :hidden="vote !== 1">取消</span>赞
    </a>
    <a v-show="canVoteDown"
            :class="{ active: vote === -1 }"
            @click="performVote(-1)">
      <span :hidden="vote !== -1">取消</span>踩
    </a>
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
