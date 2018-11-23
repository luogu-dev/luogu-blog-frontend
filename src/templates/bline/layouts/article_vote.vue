<template>
  <div class="ui mini right floated buttons" id="article-vote">
    <div class="ui left labeled button"
         :class="{ disabled: !canVoteUp }"
         @click="performVote(1)">
      <a class="ui basic blue right pointing label">
        {{ thumbUp }}
      </a>
      <div class="ui blue button"
           :class="{ active: vote === 1}">
        <i class="thumbs up icon"></i> <span :hidden="vote !== 1">取消</span>赞
      </div>
    </div>
    <div class="or"></div>
    <button class="ui button"
            :class="{ disabled: !canVoteDown, active: vote === -1 }"
            @click="performVote(-1)">
      <i class="thumbs down icon"></i> <span :hidden="vote !== -1">取消</span>踩
    </button>
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
