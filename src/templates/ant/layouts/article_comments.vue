<template>
  <a-row type="flex" justify="center" style="background:#ECECEC;padding:30px;">
    <a-col :span="8" class="authorinfo-padding">
      <articleLeft></articleLeft>
    </a-col>
    <a-col :span="16" style="padding-left:16px;">
      <a-row type="flex" justify="center">
        <a-col :span="24">
          <a-card>
            <h2 class="article-content-post-title">
              {{articleInfo.postTitle}}
              <a class="article-content-actions" href="./">
                <a-icon type="arrow-left"/>文章列表
              </a>
            </h2>
            <blockquote class="article-content-post-title">
              {{articleInfo.postTime}}
              <span
                class="article-content-actions"
                v-if="BlogGlobals.isBlogAdmin"
              >
                <a :href="BlogGlobals.luoguAddress+'/blogAdmin/article/edit/'+articleInfo.postID">
                  <a-icon type="edit" theme="twoTone"/>
                </a>
                <a :href="BlogGlobals.luoguAddress+'/blogAdmin'" target="_blank">
                  <a-icon type="setting" theme="twoTone"/>
                </a>
              </span>
            </blockquote>
            <a-divider/>

            <div id="article-content" v-html="articleInfo.content"></div>
            <a-row type="flex" justify="end">
              <a-col>
                <articleVote></articleVote>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center" class="comments-top">
        <a-col :span="24">
          <a-card>
            <p>评论：</p>
            <a-form-item>
              <a-textarea :rows="8" v-model="commentContent"></a-textarea>
              <a-row type="flex" justify="end" style="margin-top:10px;">
                <a-col>
                  <a-button @click="postComment" type="primary">发布</a-button>
                </a-col>
              </a-row>
            </a-form-item>
            <a-divider/>
            <a-list itemLayout="horizontal" :dataSource="comments">
              <a-list-item slot="renderItem" slot-scope="comment">
                <a-list-item-meta>
                  <a-avatar
                    :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.author.uid + '.png'"
                    :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
                    target="_blank"
                    slot="avatar"
                  />
                  <div slot="title">
                    <a
                      :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.author.uid"
                    >{{comment.author.name}}</a>
                    <span style="padding-left:8px;color: #ccc;">{{ comment.time | formatDate }}</span>
                  </div>
                  <div slot="description">{{ comment.content }}</div>
                </a-list-item-meta>
              </a-list-item>
              <a-row type="flex" justify="center" style="margin-top:10px;">
                <a-col>
                  <a-pagination
                    slots="[actions]"
                    :defaultCurrent="1"
                    :hideOnSinglePage="true"
                    v-model="page"
                    :total="commentCount"
                    @change="getComments"
                  ></a-pagination>
                </a-col>
              </a-row>
            </a-list>
          </a-card>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script>
import article_left from "./article_left.vue";
import article_vote from "./article_vote.vue";
import {
  Card,
  List,
  ListItem,
  Avatar,
  Tooltip,
  Icon,
  Col,
  Row,
  Divider,
  Tag,
  Input,
  Form,
  Button,
  Pagination,
  ButtonGroup
} from "ant-design-vue";
import {
  defaultData,
  defaultMounted,
  getComments,
  postComment
} from "scripts/article_comments";
import formatDate from "plugins/format_date";
import shareData from "../share.js";

export default {
  data: function() {
    return {
      ...defaultData(),
      articleInfo: window.articleInfo
    };
  },
  mounted() {
    defaultMounted.apply(this);
    shareData.$on("changeTypeEvent", type => {
      if (type) {
        window.location = "./#type=" + type;
      } else {
        window.location = "./";
      }
    });
    shareData.$on("changeKeywordEvent", keyword => {
      if (keyword) {
        window.location = "./#keyword=" + keyword;
      } else {
        window.location = "./";
      }
    });
  },
  methods: { getComments, postComment },
  filters: { formatDate },
  components: {
    articleVote: article_vote,
    articleLeft: article_left,
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-list": List,
    "a-list-item": List.Item,
    "a-list-item-meta": List.Item.Meta,
    "a-avatar": Avatar,
    "a-tooltip": Tooltip,
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    "a-divider": Divider,
    "a-tag": Tag,
    "a-form-item": Form.Item,
    "a-textarea": Input.TextArea,
    "a-button": Button,
    "a-button-group": ButtonGroup,
    "a-pagination": Pagination
  }
};
</script>

