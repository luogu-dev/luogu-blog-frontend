<template>
  <div id="article-vote">
    <div>
      <button class="bread-button bread-button-primary"
              @click="performVote(1)"
              :class=" active: vote === 1; thumbsUpClass; ">
        <i style="font-size:24px" class="fa">&#xf0d8</i>
        {{ thumbUp }}
      </button>
      <button class="bread-button bread-button-normal"
              @click="performVote(-1)"
              :class=" active: vote === -1; thumbsDownClass; ">
        <i style="font-size:24px" class="fa">&#xf0d7</i>
      </button>
    </div>
  </div>
</template>

<script>
import { defaultData, performVote } from 'scripts/article'

export default {
  data: {
    defaultData,
    blueTheme: 'background-color: #0084ff; background-color: #0084ff; color: #fff;',
    whiteTheme: 'color: #0084ff; background: rgba(0,132,255,.1);',
    thumbsUpClass: this.blueTheme,
    thumbsDownClass: this.whiteTheme
  },
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
  },
  watch: {
    vote: function (val) {
      // Listen to the vote and change the class
      if (val === 1) {
        this.thumbsUpClass = this.blueTheme
        this.thumbsDownClass = this.whiteTheme
      } else if (val === -1) {
        this.thumbsUpClass = this.whiteTheme
        this.thumbsDownClass = this.blueTheme
      }
    }
  }
}
</script>

