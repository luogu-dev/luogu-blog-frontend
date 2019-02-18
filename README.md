# Luogu Blog Frontend

这里是洛谷博客的主题仓库。洛谷博客主题以 AGPL 协议开源，并欢迎大家贡献。

## 开始开发

```shell
git clone https://github.com/luogu-dev/luogu-blog-frontend
cd luogu-blog-frontend
yarn install # 安装依赖、配置 debug 主题所用的 Semantic UI
THEME=debug yarn build # 编译产生指定主题的 Javascript 生产环境归档
THEME=debug yarn build-dev # 编译产生指定主题的 Javascript 测试环境归档（无压缩、优化）
yarn dev-server # 启动用于调试的 API Mock 服务器。可以通过指定 PORT 环境变量修改监听端口。
yarn dev # yarn build-dev && yarn dev-server 的简写。
yarn lint # 使用 ESLint 检查 Javascript 代码风格。
```

API Mock 调试服务器使用时，访问 `http://localhost:<PORT>/<THEME>/` 来浏览该主题的预览。

需要事先运行 `THEME=<theme> yarn build` 来产生对应的 JS 和 CSS 才能工作。

## 主题审核标准

贡献的主题必须符合以下几条标准：

1. 必须符合正常人的审美。
2. 必须不侵犯他人的知识产权。
3. 必须不包含任何的恶意代码，包括试图读取 Cookies 或 CSRF 等。
4. 必须符合架构、代码规范，包括通过 ESLint 等。
5. 同时也不保证一定接受符合以上四条条件的主题。

## 架构

洛谷博客是混合渲染架构。

页面整体框架、以及博客的博文内容由服务器直出，此部分使用 Handlebars 模版引擎。

服务器部分可访问到一些全局变量：
```
blogUID: 博客主的 UID
blogName: 博客标题
blogSubtitle: 博客副标题
currentUser: 当前用户 UID，可能为 null
isBlogAdmin = (currentUser === blogUID)
luoguAddress: 洛谷网站地址（用于在子域名下创建到洛谷的链接）
picAddress: 洛谷图片 CDN 地址
------
文章页：
postID: 博文 ID
postTitle: 博文标题
postThumbUp: 博文点赞数
postTime: 已格式化过的发布时间
postContent: 已转化为HTML的博文内容
userVote: 用户对本文的评价，1 = 赞，-1 = 踩，0 = 没评价
```

页面中部分结构，例如文章列表、评论、点赞功能，由 Vue 在客户端动态渲染。

此部分允许由服务器向客户端传递一个名为 `BlogGlobals` 的全局变量，建议的结构如下：
```javascript
var BlogGlobals = {
   blogName: document.querySelector('meta[name=blog-name]').getAttribute('content'),
   blogUID: parseInt(document.querySelector('meta[name=blog-uid]').getAttribute('content')),
   currentUser: parseInt(document.querySelector('meta[name=current-user]').getAttribute('content')),
   luoguAddress: '{{ luoguAddress }}',
   picAddress: '{{ picAddress }}'
}
// 博文页面
var blogContainer = document.getElementById("blog-container");
BlogGlobals.blogID = parseInt(blogContainer.getAttribute("data-blogid"));
BlogGlobals.vote = parseInt(blogContainer.getAttribute("data-vote"));
BlogGlobals.thumbUp = parseInt(blogContainer.getAttribute("data-thumbUp"));
```
