module.exports = {
  title: 'zero-mall',
  description: 'zero-admin文档',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"))
    },
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
    ['vuepress-plugin-code-copy', true],
    "@vuepress/nprogress",
    ["@vuepress/plugin-medium-zoom"],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github', //v3的platform是github，v4的是github-v4
        locale: 'zh', //语言
        // 其他的 Vssue 配置
        owner: 'feihua', //github 账户名或组织名
        repo: 'feihua.github.io', //github 一个项目的名称
        clientId: '5e975013e1a17abdcc6a',//注册的 Client ID
        clientSecret: 'af4fc8ba85b7726adda6d613388012d0be6f25aa',//注册的 Client Secret
        autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
      },
    ],
  ],
  head: [
    // 设置 favor.ico，docs/.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/images/logo.png' }
    ]
  ],
  themeConfig: {
    // logo: '/images/logo.png',// 注意图片放在 public 文件夹下
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/backend/' },
      {
        text: '演示地址', link: 'http://110.41.179.89/mall '
      },
      {
        text: '项目地址',
        items: [
          { text: '前端项目', link: 'https://github.com/feihua/zero-admin-ui' },
          { text: '后端项目', link: 'https://github.com/feihua/zero-admin' }
        ]
      },
      // { text: 'go', link: '/foo/' },
      // { text: 'rust', link: '/foo1/' },
      // { text: '周边生态', link: '/about' },
      // { text: '查看文档源码', link: 'https://github.com/feihua/zero-admin-doc' },
    ],
    sidebarDepth: 3,
    lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    repo: 'feihua/zero-admin', // 导航栏右侧生成Github链接
    sidebar: {
      "/summary/": [""], //这样自动生成对应文章
      '/backend/': [
        '',     /* /foo/ */
        {
          title: '二次开发',
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            'development/goland',
          ]
        },
        {
          title: '项目部署',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            'deploy/docker',
            'deploy/k8s'
          ]
        },

      ],
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two',  /* /foo/two.html */
        {
          title: 'Group 1',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            'two1'
          ]
        },
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ]
    }
  },
}
