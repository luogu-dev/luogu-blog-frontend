<template>
  <a-row type="flex" justify="center" style="background:#ECECEC; padding:30px;min-height:100vh;">
    <a-col :span="8" class="authorinfo-padding">
      <articleLeft></articleLeft>
    </a-col>
    <a-col :span="16" style="padding-left:16px;">
      <a-card style="width:100%" :title="'文章 ('+postCount+')'" class="article-body-top">
        <a
          target="_blank"
          :href="BlogGlobals.luoguAddress+'/blogAdmin'"
          slot="extra"
          v-if="BlogGlobals.isBlogAdmin"
        >管理后台</a>
        <p>
          <a-list itemLayout="horizontal" :dataSource="posts">
            <a-list-item slot="renderItem" slot-scope="post">
              <a-col>
                <a-row>
                  <a-list-item-meta>
                    <a :href="post.identifier" slot="title" style="font-weight: bold;">{{post.title}}</a>
                  </a-list-item-meta>
                </a-row>
                <a-row>
                  <a-list-item-meta>
                    <a-tooltip slot="description">
                      <a-tag @click.stop.prevent="type = post.type">{{post.type}}</a-tag>
                    </a-tooltip>
                  </a-list-item-meta>
                </a-row>
                <a-row class="article-content">{{ post.contentDescription }}</a-row>
                <a-row>
                  <a href>{{ post.author.name }}</a>
                  <span class="inline-padding">发布于</span>
                  <span class="text-grey">{{ post.postTime | formatDate }}</span>
                </a-row>
                <a-row class="article-actions">
                  <span>
                    <a-tooltip>
                      <a-icon type="like"/>
                    </a-tooltip>
                    <span style="padding-left: '8px';cursor: 'auto'">{{post.thumbUp}}</span>
                  </span>
                  <a-divider type="vertical"/>
                  <span>
                    <a-tooltip>
                      <a-icon type="message"/>
                    </a-tooltip>
                    <span style="padding-left: '8px';cursor: 'auto'">{{post.commentCount}}</span>
                  </span>
                </a-row>
              </a-col>
            </a-list-item>
          </a-list>
        </p>
        <a-divider/>
        <a-row type="flex" justify="center">
          <a-col>
            <a-pagination
              slots="[actions]"
              :defaultCurrent="1"
              :hideOnSinglePage="true"
              v-model="page"
              :total="postCount"
              @change="getPosts"
            ></a-pagination>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
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
  Pagination
} from "ant-design-vue";

import article_left from "./article_left.vue";
import {
  defaultData,
  defaultMounted,
  defaultWatch,
  getPosts
} from "scripts/article_list";
import formatDate from "plugins/format_date";
import shareData from "../share.js";
import * as searchBar from "scripts/search_bar";

export default {
  data() {
    return {
      ...defaultData(),
      BlogGlobals: window.BlogGlobals
    };
  },
  mounted() {
    defaultMounted.apply(this);
    shareData.$on("changeTypeEvent", type => {
      this.type = type;
    });
    shareData.$on("changeKeywordEvent", keyword => {
      this.keyword = keyword;
      this.getPosts(1);
    });

  },

  watch: defaultWatch,
  methods: {
    getPosts
  },
  filters: {
    formatDate
  },
  components: {
    articleLeft: article_left,
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-list": List,
    "a-list-item": List.Item,
    "a-list-item-meta": List.Item.Meta,
    "a-tooltip": Tooltip,
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    "a-divider": Divider,
    "a-tag": Tag,
    "a-pagination": Pagination
  }
};
</script>
