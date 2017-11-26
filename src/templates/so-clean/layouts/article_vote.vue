<template>
  <div id="article-vote">
		<div v-if="uid">
			<div v-if="vote===0">
				<a @click="performVote(1)">赞 <span>{{ thumbUp }}</span></a> | <a @click="performVote(-1)">踩</a>
			</div>
			<div v-else>
				<a @click="performVote(vote)">取消<span v-if="vote==1">赞</span><span v-if="vote==-1">踩</span> <span>{{ thumbUp }}</span></a>
			</div>
		</div>
		<div v-else>
			本文目前已有 {{ thumbUp }} 个赞。
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
