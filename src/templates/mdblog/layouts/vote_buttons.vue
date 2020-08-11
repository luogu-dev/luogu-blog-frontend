<template>
      <div id="vote-buttons" class="mdui-fab-wrapper" mdui-fab="options" >
          <button class="mdui-fab mdui-ripple mdui-color-theme-accent">
              <i class="mdui-icon material-icons">add</i>
              <i id = "mdblog-scroll" class="mdui-icon mdui-fab-opened material-icons">keyboard_arrow_up</i>
          </button>
          <div class="mdui-fab-dial">
              <button class="mdblog-fab-icon mdui-fab mdui-fab-mini mdui-ripple mdui-color-red"
                      @click="performVote(vote)"
                      :hidden="vote == 0" v-if="uid"><i class="mdui-icon material-icons">cancel</i></button>
              <button class="mdblog-fab-icon mdui-fab mdui-fab-mini mdui-ripple mdui-color-red"
                      :class="{ disabled: !uid || (vote !== 0 && vote !== 1) }"
                      @click="performVote(1)"
                      :hidden="vote != 0" v-if="uid"><i class="mdui-icon material-icons">thumb_up</i></button>
              <button class="mdblog-fab-icon mdui-fab mdui-fab-mini mdui-ripple mdui-color-teal"
                      :class="{ disabled: !uid || (vote !== 0 && vote !== -1), active: vote == -1 }"
                      @click="performVote(-1)"
                      :hidden="vote != 0" v-if="uid"><i class="mdui-icon material-icons">thumb_down</i></button>
              <a class="mdblog-fab-icon mdui-fab mdui-fab-mini mdui-ripple mdui-color-orange" href="#blog-comments"> <i class="mdui-icon material-icons">chat</i></a>
              <a class="mdblog-fab-icon mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue"
                 :href="BlogGlobals.luoguAddress+'/blogAdmin/article/edit/' + BlogGlobals.blogID" v-if="BlogGlobals.isBlogAdmin"><i class="mdui-icon material-icons">edit</i></a>
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
  watch: {
    thumbUp: function (newthumbUp) {
      BlogGlobals.thumbUp = newthumbUp
      BlogGlobals.vote = this.vote
    },
    vote: function (newVote) {
      BlogGlobals.vote = newVote
      BlogGlobals.thumbUp = this.thumbUp
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
