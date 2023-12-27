module.exports = {
  title: 'Zero',
  description: 'zero-admin文档',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"))
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
    ['vuepress-plugin-code-copy', true],
    "@vuepress/nprogress",
    ["@vuepress/plugin-medium-zoom"]
  ],
  themeConfig: {
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
    sidebarDepth: 2,
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
          title: '部署相关',   // 必要的
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
