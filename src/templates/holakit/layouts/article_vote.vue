<template>
  <div id="article-vote">
    <button class="hola-button hola-button-primary"
         v-show="canVoteUp"
         :class="{ active: vote === 1 }"
         @click="performVote(1)">
      <span :hidden="vote !== 1">取消</span>赞
    </button>
    <button class="hola-button hola-button-normal"
            v-show="canVoteDown"
            :class="{ active: vote === -1 }"
            @click="performVote(-1)">
      <span :hidden="vote !== -1">取消</span>踩
    </button>
    <p></p>
    <p><b>本文共得到 {{ thumbUp }} 赞</b></p>
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
