# Readhub-vue
## 使用 vue 模仿  Readhub

### 项目简介
> **[Readhub](https://readhub.me/)** 是 **小道消息**的 作者 **Fenng（冯大辉)** 老师创业公司 **无码科技** 的第一款产品。这是一款极简的资讯类工具，旨在**每天花几分钟了解互联网行业里发生的事情**。目前主要分为热门话题 ，TMT新闻，开发者资讯三个部分。

> 作为一个 Vue 的初学者，我选择了 **Readhub** 作为我的第一个 SPA 项目。我用 Vue-cli 脚手架构建了整个项目的结构，在这里我用了 Vue router 做了 tab 导航之间的路由跳转。由于没有 API 接口，我自己创建了一个 JSON 文件，当作一个虚拟的 API ，使用 Vue resource 进行数据请求，所以并不会与真实的 Readhub 进行同步更新。

> 这是我的第一个 Vue 项目，还有很多的不足需要改进，我也会保持 Vue 的学习热情，同时在前端的路上不断努力。


### 技术栈
- Vue-cli
- Vue.js
- Vue router
- Vue resource

### Demo
![Demo](src/assets/Readhub.gif)

### 构建过程

``` bash
# clone the repo
git clone https://github.com/liruifengv/Readhub-vue.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
