<template>
  <div style="background:#ECECEC; padding:30px">
    <a-card
      style="width:100%"
      :tabList="tabListNoTitle"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <p v-if="noTitleKey === 'article'">
        <a-list itemLayout="horizontal" :dataSource="listData">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-col>
              <a-row>
                <a-list-item-meta title="text 1"></a-list-item-meta>
              </a-row>
              <a-row>
                <a-list-item-meta>
                  <a-tooltip slot="description">
                    <a-tag>test</a-tag>
                    <a-tag>test2</a-tag>
                  </a-tooltip>
                </a-list-item-meta>
              </a-row>
              <a-row
                class="article-content"
              >段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。</a-row>
              <a-row>
                <a href="">某用户</a>
                <span class="inline-padding">发布了</span>
                <a class="inline-padding-right" href="https://vuecomponent.github.io/ant-design-vue/">{{item.title}}</a>
                <span class="text-grey">2019-01-23 02:44</span>
              </a-row>
              <a-row class="article-actions">
                <span>
                  <a-tooltip title="Like">
                    <a-icon
                      type="like"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="like"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">111</span>
                </span>
                <a-divider type="vertical"/>
                <span>
                  <a-tooltip title="Message">
                    <a-icon
                      type="message"
                      :theme="action === 'liked' ? 'filled' : 'outlined'"
                      @click="message"
                    />
                  </a-tooltip>
                  <span style="padding-left: '8px';cursor: 'auto'">111</span>
                </span>

              </a-row>
            </a-col>
          </a-list-item>
        </a-list>
      </p>
      <p v-else-if="noTitleKey === 'app'">app content</p>
      <p v-else-if="noTitleKey === 'project'">project content</p>
    </a-card>
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
  Tag
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
  data() {
    return {
      tabList: [
        {
          key: "tab1",
          // tab: 'tab1',
          scopedSlots: { tab: "customRender" }
        },
        {
          key: "tab2",
          tab: "tab2"
        }
      ],
      contentList: {
        tab1: "content1",
        tab2: "content2"
      },
      tabListNoTitle: [
        {
          key: "article",
          tab: "article"
        },
        {
          key: "app",
          tab: "app"
        },
        {
          key: "project",
          tab: "project"
        }
      ],
      key: "tab1",
      noTitleKey: "article",
      listData: [
        {
          title: "Ant Design Title 1"
        },
        {
          title: "Ant Design Title 2"
        },
        {
          title: "Ant Design Title 3"
        },
        {
          title: "Ant Design Title 4"
        }
      ]
    };
  },
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
    "a-tag": Tag
  }
};
</script>
