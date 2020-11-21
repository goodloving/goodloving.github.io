(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{337:function(e,t,n){"use strict";n.r(t);var s=n(33),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"基于vuepress的个人博客建立和部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于vuepress的个人博客建立和部署"}},[e._v("#")]),e._v(" 基于VuePress的个人博客建立和部署")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1-知识储备"}},[e._v("1.知识储备")])]),n("li",[n("a",{attrs:{href:"#_2-快速上手"}},[e._v("2.快速上手")])]),n("li",[n("a",{attrs:{href:"#_3-建立项目结构"}},[e._v("3.建立项目结构")])]),n("li",[n("a",{attrs:{href:"#_4-快速部署和发布"}},[e._v("4.快速部署和发布")])])])]),n("p"),e._v(" "),n("p",[e._v("大家先看看完成后的大致效果  "),n("strong",[n("a",{attrs:{href:"https://goodloving.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodloving的个人博客"),n("OutboundLink")],1)]),e._v("（https://goodloving.github.io/）  ，当然，该博客也可以在项目中查看。")]),e._v(" "),n("p",[e._v("博客中也会定期更新一些知识点和一些不同的项目教程，同时大家有兴趣也可以关注本人的个人公众号 "),n("strong",[e._v("迟亦早")]),e._v(" ，内容会同步发布！\n"),n("img",{attrs:{src:"/blogsHome.png"}}),n("img",{attrs:{src:"/blogsexp.png"}})]),e._v(" "),n("p",[e._v("该实例简单易懂，能够实现快速建立个人博客和说明文档的需求；但是也有不足，文档格式相对固定，只针对markdown格式，样式比较统一！")]),e._v(" "),n("h2",{attrs:{id:"_1-知识储备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-知识储备"}},[e._v("#")]),e._v(" 1.知识储备")]),e._v(" "),n("ul",[n("li",[e._v("1、了解基本的npm操作")]),e._v(" "),n("li",[e._v("2、具有Vue.js基础")]),e._v(" "),n("li",[e._v("3、了解markdown的基本语法")])]),e._v(" "),n("h2",{attrs:{id:"_2-快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速上手"}},[e._v("#")]),e._v(" 2.快速上手")]),e._v(" "),n("ul",[n("li",[e._v("1、全局安装vuepress")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yarn global add vuepress  或者 npm install -g vuepress\n")])])]),n("ul",[n("li",[e._v("2、创建项目目录")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mkdir vuepress-starter && cd vuepress-starter\n")])])]),n("ul",[n("li",[e._v("3、初始化项目")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm init  或者 yarn init\n")])])]),n("ul",[n("li",[e._v("4、添加运行命令\n在第三步生成的pageckage.json文件的script中添加项目运行和打包的命令")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"scripts": {\n    "dev": "vuepress dev docs",         //预览\n    "build": "vuepress build docs"      //项目打包\n}\n')])])]),n("p",[e._v("进行到这里，我们输入下面项目运行命令并不会有效果，因为我们到现在还没有搭建项目基本的结构！")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm run dev 或者 yarn dev\n")])])]),n("h2",{attrs:{id:"_3-建立项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立项目结构"}},[e._v("#")]),e._v(" 3.建立项目结构")]),e._v(" "),n("p",[e._v("VuePress 遵循 “约定优于配置” 的原则，也就是说我们必须按照官网中要求的项目结构搭建项目目录，推荐的目录结构如下,当然官网上更加全面大家可以参照"),n("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),n("OutboundLink")],1),e._v("进行：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".\n├── docs\n│   ├── .vuepress \n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public \n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── config.js \n│   │ \n│   ├── README.md\n│   ├── pages\n│   │   └── 自己的md文档目录，比如该项目中我设置为blogs文件夹\n│   └── config.md\n├── deploy.sh     //之后用于编写上传、发布脚本的文件\n└── package.json\n")])])]),n("p",[e._v("建立完基本结构后我们还需要对项目中的基本内容进行填充：")]),e._v(" "),n("ul",[n("li",[e._v("1、在config.js中进行顶部导航栏等项目核心配置")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('module.exports = {\n  title: "GoodLoving博客", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称\n  description: "goodloving的个人博客", // meta 中的描述文字，用于搜索引擎中搜索字段\n  // 下面代码会注入当生成的HTML <head> 的标签中\n  head: [\n    [\n      "link",\n      { rel: "icon", href: "/deer.png" }, //浏览器的标签栏的图标，\'/\'表示public文件夹的文件\n    ],\n  ],\n  themeConfig: {\n    logo: "/deer.png", //网页顶端导航栏左上角的图标\n\n    //顶部导航栏\n    nav: [\n      //格式一：直接跳转，\'/\'为不添加路由，跳转至首页\n      { text: "首页", link: "/" },\n      { text: "文章", link: "/pages/blogs/catalog.md" },\n      { text: "CSDN", link: "https://blog.csdn.net/qq_31967985" },\n      { text: "码云", link: "https://gitee.com/goodloving" },\n      { text: "Github", link: "https://github.com/goodloving" },\n    ]\n  },\n};\n\n')])])]),n("p",[e._v("对应网页中的显示如下图：\n"),n("img",{attrs:{src:"/config1.jpg"}})]),e._v(" "),n("ul",[n("li",[e._v("2、在README.md文件中修改首页样式")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("---\nhome: true\nheroImage: /deer.png\nheroText: GL的学习记录\ntagline: 好好学习，天天向上\nactionText: 进入Blogs →\nactionLink: /pages/blogs/catalog.md\nfeatures:\n- title: 零碎知识点\n  details: 博客中涉及到html、js、css等相关的内容，大部分是个人中生活工作中所遇到和有兴趣去了解记录的，内容因个人而异。\n- title: 框架应用\n  details: 这里所指的框架不单单是前端框架如VUE、REACT、WEEX、FLUTTER等，也会涉及到后端框架如EXPRESS,不过绝大部分还是前端相关。\n- title: 实例应用\n  details: 所学目的为所有，博客中会结合所了解的web前后端技术、合理运用各种框架来实现各种程序应用，在写程序的过程中加深对技术的了解！\n---\n")])])]),n("p",[e._v("对应生成的首页如下图：\n"),n("img",{attrs:{src:"/blogsHome.png"}})]),e._v(" "),n("ul",[n("li",[e._v("3、在config.js中进行侧边导航栏等项目核心配置")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('module.exports = {\n\n  //隐藏上述代码·····\n\n  themeConfig: {\n    logo: "/deer.png", //网页顶端导航栏左上角的图标\n\n    //顶部导航栏\n    nav: [\n      //格式一：直接跳转，\'/\'为不添加路由，跳转至首页\n      { text: "首页", link: "/" },\n      { text: "文章", link: "/pages/blogs/catalog.md" },\n      { text: "CSDN", link: "https://blog.csdn.net/qq_31967985" },\n      { text: "码云", link: "https://gitee.com/goodloving" },\n      { text: "Github", link: "https://github.com/goodloving" },\n    ],\n\n    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏\n    sidebar: {\n      "/pages/blogs/": [\n        {\n          title: "导航", // 一级菜单名称\n          collapsable: true, // false为默认展开菜单, 默认值true是折叠,\n          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级\n          children: [\n            ["catalog.md", "目录"], //菜单名称为\'子菜单1\'，跳转至/pages/folder1/test1.md\n          ],\n        },\n        {\n          title: "Vue基础", // 一级菜单名称\n          collapsable: true, // false为默认展开菜单, 默认值true是折叠,\n          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级\n          children: [\n            ["[Vue一]:了解Vue项目的建立.md", "[Vue一]:了解Vue项目的建立"], \n            ["[Vue二]:简单登录界面的实现.md", "[Vue二]:简单登录界面的实现"],\n            ["[Vue三]:用户登录状态保存和判断.md", "[Vue三]:用户登录状态保存和判断"], \n            ["[Vue四]:node后端响应登录请求.md", "[Vue四]:node后端响应登录请求"],\n            ["[Vue五]:Vue和echarts结合.md", "[Vue五]:Vue和echarts结合"], \n            ["[Vue六]:vue开发自定义插件.md", "[Vue六]:vue开发自定义插件"],\n            ["[Vue七]:通过nginx的服务器配置.md", "[Vue七]:通过nginx的服务器配置"]\n          ],\n        },\n        {\n          title: "Node基础", // 一级菜单名称\n          collapsable: true, // false为默认展开菜单, 默认值true是折叠,\n          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级\n          children: [\n            ["async、await与promise.md", "async、await与promise"], \n            ["node.js自带的异步写法.md", "node.js自带的异步写法"],\n          ],\n        },\n        {\n          title: "项目应用", // 一级菜单名称\n          collapsable: true, // false为默认展开菜单, 默认值true是折叠,\n          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级\n          children: [\n            ["基于VuePress的个人博客建立和部署.md", "1、基于VuePress的个人博客建立和部署"], \n          ],\n        },\n        \n      ]\n      //...\n    },\n  },\n};\n')])])]),n("p",[e._v("进行到这里我们的项目基本可以运行"),n("code",[e._v("npm run dev 或者 yarn dev")]),e._v("简单观察下效果！\n"),n("img",{attrs:{src:"/config2.jpg"}}),e._v(" "),n("strong",[e._v("注意")]),e._v("："),n("strong",[e._v("这里我们必须注意一点"),n("code",[e._v("nav")]),e._v("中对应的"),n("code",[e._v("link")]),e._v("为"),n("code",[e._v("/pages/blogs/catalog.md")]),e._v("，则在设置左侧侧栏时，所有的文档必须放在catalog.md的同一级别目录下！在通过"),n("code",[e._v("sidebar")]),e._v("中的 "),n("code",[e._v("children")]),e._v("对目录进行分类！")])]),e._v(" "),n("ul",[n("li",[e._v("4、项目对markdown的解析\n进行完上面操作，我对于导航栏、侧边栏、首页我们应该都有所了解，当时当我们配置中的md文件不存在时，点击相应的导航将会跳转到404。如对应的md文件存在，在运行时项目会将md解析为对应的html文件！如下图所示：\n"),n("img",{attrs:{src:"/dist.jpg"}})])]),e._v(" "),n("h2",{attrs:{id:"_4-快速部署和发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-快速部署和发布"}},[e._v("#")]),e._v(" 4.快速部署和发布")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('在 docs/.vuepress/config.js 中设置正确的 base。\n如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。\n如果你打算发布到 https://<USERNAME>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。\n在该项目中我直接部署到github.io/\n')])])]),n("ul",[n("li",[e._v("1、在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run docs:build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\ncd -\n")])])]),n("ul",[n("li",[e._v("2、修改package.json，添加执行发布部署脚本的命令")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"scripts": {\n    ......\n    "deploy": "bash deploy.sh"\n}\n')])])]),n("p",[e._v("之后我们每次执行的时候，只需要运行 "),n("code",[e._v("npm run deploy 或者 yarn deploy")]),e._v("  ,经过上述步骤我们就可以通过"),n("code",[e._v("https://你的用户名.github.io")]),e._v("访问自己的博客或者说明文档了！")]),e._v(" "),n("p",[e._v("欢迎大家关注本人的微信公众号，微信公众号将不定期发送相应学习文章和教程")]),e._v(" "),n("p",[n("strong",[n("center",[e._v("微信号：chiyizao")])],1),e._v(" "),n("center",[e._v("或者微信公众号搜索：")]),n("center",[e._v("迟亦早")]),e._v(" "),n("strong",[n("center",[e._v("二维码")])],1),e._v(" "),n("center",[n("img",{staticStyle:{height:"250px",width:"250px"},attrs:{src:"/vxgzhcode.jpg"}})])],1),e._v(" "),n("p",[e._v("文章参考：")]),e._v(" "),n("ul",[n("li",[e._v("1、裂泉：https://juejin.im/post/5dce1e0e5188254eda3936c5")]),e._v(" "),n("li",[e._v("2、官网：https://www.vuepress.cn/")])])])}),[],!1,null,null,null);t.default=a.exports}}]);