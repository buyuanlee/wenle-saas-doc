---
title:TechnologyStack
---
# 开发环境
- 框架服务:[Vue](https://cn.vuejs.org/index.html)
- UI组件:[ElementUI](https://element.eleme.io/#/zh-CN)
- 路由管理:[VueRouter](https://router.vuejs.org/zh/)
- 状态管理:[Vuex](https://vuex.vuejs.org/zh/)
- 可视化数据:[v-charts](https://v-charts.js.org/#/)
## 开发环境详情
::: tip
**参见package.json**
:::
```json
{
  "name": "saas",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "core-js": "^2.6.5",
    "echarts": "^4.2.1",
    "element-ui": "^2.9.1",
    "qs": "^6.7.0",
    "v-charts": "^1.19.0",
    "vue": "^2.6.10",
    "vue-baidu-map": "^0.21.20",
    "vue-router": "^3.0.3",
    "vuedraggable": "^2.21.0",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.8.0",
    "@vue/cli-plugin-eslint": "^3.8.0",
    "@vue/cli-service": "^3.8.0",
    "@vue/eslint-config-prettier": "^4.0.1",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "node-sass": "^4.9.2",
    "sass": "^1.18.0",
    "sass-loader": "^7.1.0",
    "vue-cli-plugin-element": "^1.0.1",
    "vue-template-compiler": "^2.6.10"
  }
}
```
::: warning 关于Node版本
Node的版本需要在v8.0以上
:::
## 代码规范
- [EsLint](https://cn.eslint.org/)
- [prettier](https://prettier.io/)
## Vue-cli快速开发配置
```npm
vue create wenle-saas
```
### 配置选项
```
- ? Please pick a preset:    
Manually select features
- ? Check the features needed for your project:   
 ◉ Babel   
 ◯ TypeScript   
 ◯ Progressive Web App (PWA) Support   
 ◉ Router   
 ◉ Vuex   
 ◉ CSS Pre-processors      
 ◉ Linter / Formatter   
 ◯ Unit Testing      
 ◯ E2E Testing   
- ? Use history mode for router?   
n
- ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported b
y default):   
❯ Sass/SCSS (with dart-sass)   
- ? Pick a linter / formatter config:   
❯ ESLint + Prettier
? Pick additional lint features:   
❯◉ Lint on save   
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?   
❯ In dedicated config files
? Save this as a preset for future projects?   
n
```
