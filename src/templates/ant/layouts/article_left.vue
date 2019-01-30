<template>
  <a-card style="width:100%;">
    <a-row type="flex" justify="center">
      <a-col>
        <div class="author-title">
          <a-avatar :size="96" class="avatar-left" :src="BlogGlobals.picAddress"/>
          <h3 class="text-center blog-name">{{BlogGlobals.blogName}}</h3>
          <h4 class="text-center">{{BlogGlobals.blogSubtitle}}</h4>
        </div>
        <a-divider :dashed="true"/>
        <div>
          <a-menu class="menu" :forceSubMenuRender="true">
            <a-menu-item v-for="(tp,index) in typeList" :key="index" @click="type = tp" href="/">
              <a-icon type="tag"/>
              {{tp}}
            </a-menu-item>
          </a-menu>
        </div>
        <a-divider :dashed="true"/>
        <a-input-search
          class="input-search"
          placeholder="input search text"
          v-model="keyword"
          @click="getPosts"
          @keyup.enter="getPosts"
        />
        <a-divider :dashed="true"/>
        <div class="footer-info">

          <div class="text-center">
            Theme by
            <a href="https://github.com/cleverdango">@cleverdango</a>
          </div>
          <div class="text-center">
            <a class="item" href="_sitemap">Site Map</a>
            <a-divider type="vertical"/>
            <a class="item" href="https://github.com/luogu-dev/luogu-blog-frontend">GitHub</a>
            <a-divider type="vertical"/>
            <a class="item" href="{{ luoguAddress }}">洛谷</a>
          </div>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
import {
  Card,
  Avatar,
  Icon,
  Col,
  Row,
  Divider,
  Menu,
  Input
} from "ant-design-vue";
import {
  defaultData,
  defaultMounted,
  defaultWatch,
  getPosts
} from "scripts/article_list";

import formatDate from "plugins/format_date";
export default {
  data: function() {
    return {
      ...defaultData(),
      BlogGlobals: window.BlogGlobals
    };
  },
  mounted: defaultMounted,
  watch: defaultWatch,
  computed: {
    typeList: function() {
      let types = [];
      this.posts.map((post, index) => {
        types.push(post.Type);
      });
      let typeSet = new Set(types);
      console.log(Array.from(typeSet));
      return Array.from(typeSet);
    }
  },
  methods: {
    getPosts
  },
  filters: {
    formatDate
  },
  components: {
    "a-card": Card,
    "a-card-meta": Card.Meta,
    "a-avatar": Avatar,
    "a-icon": Icon,
    "a-row": Row,
    "a-col": Col,
    "a-divider": Divider,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-sub-menu": Menu.SubMenu,
    "a-input-search": Input.Search
  }
};
</script>

