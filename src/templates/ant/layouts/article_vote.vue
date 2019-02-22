<template>
  <div id="article-vote">
    <a-tooltip
      title="踩"
      :is="checkCanVote(-1) ? 'a' : 'span'"
      href="javascript:void 0"
      @click="dislike"
    >
      <a-icon type="dislike" :theme="vote === '-1' ? 'filled' : 'outlined'"/>
    </a-tooltip>
    <a-divider type="vertical"/>

    <a-tooltip
      title="赞"
      :is="checkCanVote(1) ? 'a' : 'span'"
      href="javascript:void 0"
      @click="like"
    >
      <a-icon type="like" :theme="vote === '1'? 'filled' : 'outlined'"/>
      <span style="padding-left: '8px';cursor: 'auto'">{{ thumbUp }}</span>
    </a-tooltip>
  </div>
</template>

<script>
import { Icon, Divider, Tooltip } from "ant-design-vue";
import { defaultData, performVote } from "scripts/article";
export default {
  data() {
    return {
      ...defaultData(),
      action: null
    };
  },
  computed: {
    canVoteUp() {
      return this.checkCanVote(1);
    },
    canVoteDown() {
      return this.checkCanVote(-1);
    }
  },
  methods: {
    performVote,
    checkCanVote(voteType) {
      // Must be logged in, and either not voted,
      // or voted the same voteType,
      // (in which case triggers un-vote)
      return this.uid && (this.vote === 0 || this.vote === voteType);
    },
    like() {
      // 如果没有表态，则赞
      if (this.vote === '0') {
        this.performVote(1);
      } else if (this.vote === '1') {
        // 如果已赞，则取消赞
        this.performVote(0);
      }
    },
    dislike() {
      // 如果没有表态，则踩
      if (this.vote === '0') {
        this.performVote(-1);
      } else if (this.vote === '-1') {
        // 如果已踩，则取消踩
        this.performVote(0);
      }
    }
  },
  components: {
    "a-icon": Icon,
    "a-divider": Divider,
    "a-tooltip": Tooltip
  }
};
</script>
