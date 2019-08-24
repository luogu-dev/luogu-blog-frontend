<template>
  <div id="article-vote" style="float:right">
    <button type="button"
      class="button button-info"
      :class="{ 'button-info-active': vote === 1 }"
      @click="performVote(1)">
      <i class="fa fa-thumbs-up" aria-hidden="true" />
      {{ thumbUp }}
    </button>
    <button type="button"
      class="button button-secondary"
      :class="{ 'button-secondary-active': vote === -1 }"
      @click="performVote(-1)">
      <i class="fa fa-thumbs-down" aria-hidden="true" />
    </button>
  </div>
</template>

<script>
import { defaultData, performVote } from 'scripts/article'
export default {
  data: defaultData,
  methods: {
    performVote,
    checkCanVote (voteType) {
      return this.uid && (this.vote === 0 || this.vote === voteType)
    }
  }
}
</script>
