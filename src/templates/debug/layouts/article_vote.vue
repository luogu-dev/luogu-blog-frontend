<template>
  <div class="ui mini right floated buttons" id="article-vote">
    <div class="ui left labeled button"
         :class="{ disabled: !uid || (vote !== 0 && vote !== 1) }"
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
            :class="{ disabled: !uid || (vote !== 0 && vote !== -1), active: vote === -1 }"
            @click="performVote(-1)">
      <i class="thumbs down icon"></i> <span :hidden="vote !== -1">取消</span>踩
    </button>
  </div>
</template>

<script>
  import ArticleVote from 'scripts/article_vote'
  export default ArticleVote
</script>
