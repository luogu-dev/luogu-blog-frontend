<template>
  <div style="background:#ECECEC; padding:30px">
    <a-row type="flex" justify="center">
      <a-col :span="18">
        <a-card>
          <h2>{{articleInfo.postTitle}}</h2>
          <blockquote>{{articleInfo.postTime}}</blockquote>
          <a-divider/>
          <a :href="BlogGlobals.luoguAddress" slot="extra" v-if="BlogGlobals.isBlogAdmin">管理后台</a>
          <div id="article-content" v-html="articleInfo.content"></div>
          <articleVote></articleVote>
        </a-card>
      </a-col>
    </a-row>
    <a-row type="flex" justify="center" class="comments-top">
      <a-col :span="18">
        <a-card>
          <p>评论：</p>
          <a-form-item>
            <a-textarea :rows="8" v-model="commentContent"></a-textarea>
            <a-row type="flex" justify="end" style="margin-top:10px;">
              <a-col>
                <a-button  @click="postComment" type="primary">发布</a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-divider/>
          <a-list itemLayout="horizontal" :dataSource="comments">
            <a-list-item slot="renderItem" slot-scope="comment">
              <a-list-item-meta :description="comment.Content">
                <a-avatar
                  :src="BlogGlobals.picAddress + '/upload/usericon/' + comment.Author.UID + '.png'"
                  :href="BlogGlobals.luoguAddress +'/space/show?uid=' + comment.Author.UID"
                  target="_blank"
                  slot="avatar"
                />
              </a-list-item-meta>
               <blockquote>At {{ comment.ReplyTime | formatDate }}</blockquote>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import pagination from "../components/pagination.vue";
import article_vote from "./article_vote.vue";
import {
  Card,
  List,
  ListItem,
  Avatar,
  contentList,
  Tooltip,
  Icon,
  Col,
  Row,
  Divider,
  Tag,
  Menu,
  Input,
  Form,
  Button
} from "ant-design-vue";
import {
  defaultData,
  defaultMounted,
  getComments,
  postComment
} from "scripts/article_comments";
import formatDate from "plugins/format_date";

export default {
  data: function() {
    return {
      ...defaultData(),
      articleInfo: window.articleInfo
    };
  },
  mounted: defaultMounted,
  computed: {
    typeList: function() {
      let types = [];
      this.posts.map((post, index) => {
        types.push(post.Type);
      });
      let typeSet = new Set(types);
      return Array.from(typeSet);
    }
  },
  methods: { getComments, postComment },
  filters: { formatDate },
  components: {
    pagination,
    articleVote: article_vote,
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
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-sub-menu": Menu.SubMenu,
    "a-input-search": Input.Search,
    "a-form-item": Form.Item,
    "a-textarea": Input.TextArea,
    "a-button": Button
  }
};
</script>

