<template>
  <div style="background:#ECECEC; padding:30px">
    <a-row>
      <a-col :span="8" class="authorinfo-padding">
        <a-card style="width:100%">
          <a-row type="flex" justify="center">
            <a-col>
              <div class="author-title">
                <a-avatar :size="96" class="avatar-left" :src="BlogGlobals.picAddress" />
                <h3 class="text-center blog-name">{{BlogGlobals.blogName}}</h3>
                <h4 class="text-center">{{BlogGlobals.blogSubtitle}}</h4>
              </div>
              <a-divider :dashed="true"/>
              <div>
                <a-menu class="menu">
                  <a-sub-menu>
                    <span slot="title">
                      <span>Type one</span>
                    </span>
                  </a-sub-menu>
                  <a-sub-menu>
                    <span slot="title">
                      <span>Type Two</span>
                    </span>
                  </a-sub-menu>
                  <a-sub-menu>
                    <span slot="title">
                      <span>Type Three</span>
                    </span>
                  </a-sub-menu>
                </a-menu>
              </div>
              <a-divider :dashed="true"/>
              <a-input-search
                class="input-search"
                placeholder="input search text"
              />
              <a-divider :dashed="true"/>
              <div class="footer-info">
                <div class="text-center">Powered by
                  <a href="https://www.luogu.org/">LuoguBlog</a>
                </div>
                <div class="text-center">Theme by
                  <a href="https://github.com/cleverdango">cleverdango</a>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="16">
        <a-card
          style="width:100%"
          :title="'文章内容'"
        >
          <p>
            <a-list itemLayout="horizontal" :dataSource="posts">
              <a-list-item slot="renderItem" slot-scope="post">
                <a-col>
                  <a-row>
                    <a-list-item-meta :title="post.Title"></a-list-item-meta>
                  </a-row>
                  <a-row>
                    <a-list-item-meta>
                      <a-tooltip slot="description">
                        <a-tag>{{post.Type}}</a-tag>
                      </a-tooltip>
                    </a-list-item-meta>
                  </a-row>
                  <a-row class="article-content">{{ post.ContentDescription }}</a-row>
                  <a-row>
                    <a href>{{ post.Author.Username }}</a>
                    <span class="inline-padding">发布了</span>
                    <a
                      class="inline-padding-right"
                      href="https://vuecomponent.github.io/ant-design-vue/"
                    >{{post.Title}}</a>
                    <span class="text-grey">{{ post.PostTime | formatDate }}</span>
                  </a-row>
                  <a-row class="article-actions">
                    <span>
                      <a-tooltip title="Like">
                        <a-icon
                          type="like"
                          
                          
                        />
                      </a-tooltip>
                      <span style="padding-left: '8px';cursor: 'auto'">111</span>
                    </span>
                    <a-divider type="vertical"/>
                    <span>
                      <a-tooltip title="Message">
                        <a-icon
                          type="message"
                          
                         
                        />
                      </a-tooltip>
                      <span style="padding-left: '8px';cursor: 'auto'">111</span>
                    </span>
                  </a-row>
                </a-col>
              </a-list-item>
            </a-list>
          </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
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
  Input
} from "ant-design-vue";
import pagination from "../components/pagination.vue";
import {
  defaultData,
  defaultMounted,
  defaultWatch,
  getPosts
} from "scripts/article_list";
import formatDate from "plugins/format_date";

export default {
  data: defaultData,
  mounted: defaultMounted,
  watch: defaultWatch,
  methods: {
    getPosts,
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    }
  },
  filters: { formatDate },
  components: {
    pagination,
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
    "a-input-search": Input.Search
  }
};
</script>
