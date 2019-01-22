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
          <a-list-item slot="renderItem" slot-scope="item" class="card-container">
            <a-list-item-meta
              title="text 1"
              description="段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。"
            ></a-list-item-meta>
            <div class="test">
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              <a slot="title" href="https://vuecomponent.github.io/ant-design-vue/">{{item.title}}<span>某用户发布在httspans://ant.design</span></a>
              
            </div>
          </a-list-item>
        </a-list>
      </p>
      <p v-else-if="noTitleKey === 'app'">app content</p>
      <p v-else-if="noTitleKey === 'project'">project content</p>
    </a-card>
  </div>
</template>

<script>
import { Card, List, ListItem, Avatar } from "ant-design-vue";
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
      noTitleKey: "app",
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
    "a-avatar": Avatar
  }
};
</script>
