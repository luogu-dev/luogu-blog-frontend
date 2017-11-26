<template>
  <span id="article-vote" class="am-comment-actions">
	<a href="#" @click="performVote(1)"><i class="am-icon-thumbs-up" :class="{ voteactive: vote === 1}"></i></a> {{ thumbUp }}
	<a href="#" @click="performVote(-1)"><i class="am-icon-thumbs-down" :class="{ disabled: !canVoteDown, voteactive: vote === -1 }"></i></a> 
	<a href="#"><i class="am-icon-reply"></i></a>
  </span>
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
