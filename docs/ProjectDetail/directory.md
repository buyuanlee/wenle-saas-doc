# 目录详情
## `public`目录
**vue-cli**默认文件夹，存放`index.html`、`favicon`文件
## `src`目录
### `assets`目录
用以存放公用静态资源
- `img`目录：项目所用图片资源
- `js`目录：公用js文件
    - `comments.js`：常用函数封装
    - `iconfont.js`：图标文件管理
- `style`：公共样式
    - `element-variables.scss`：ElementUI样式变量
    - `index.scss`：初始化样式
    - `variables.scss`：常用变量
### `views`目录
组件以页面为单位进行划分，公用组件存放于`components`文件夹。页面的主组件放在其文件夹根目录，命名为`index.vue`，其余组件放在子文件夹`components`下，
命名以大写字母开头。
- `Login.vue`:登陆页面
- `Home`目录：首页
- `Data`目录：数据中心
- `Order`目录：订单管理
- `Store`目录：店铺管理
- `Works`目录：作品管理
- `Design`目录：店铺装修
- `Coupon`目录：卡券管理
- `Dashboard`目录：仪表盘
### `src`目录其它文件
- `App.vue`：项目主组件
- `main.js`：项目入口文件
- `router.js`：路由管理文件
- `store.js`：状态管理文件
## 主目录其它文件（部分）
- `vue.config.js`：项目配置文件（包括文件解析位置配置/webpack配置等）



