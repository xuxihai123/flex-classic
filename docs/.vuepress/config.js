module.exports = {
  base:'/flex-classic/',
  dest: './dist',
  repo: 'https://github.com/xuxihai123/flex-classic',
  title: 'flex个人手册',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '基础',
        collapsable: false,
        children: [
          '/base/flex-direction',
          '/base/justify-content',
          '/base/align-items',
          // '/base/align-content',
          '/base/flex-wrap',
          '/base/align-self',
          '/base/flex-basis',
          '/base/flex-grow',
          '/base/flex-shrink',
          '/base/order',
          // '/base/flex-flow',
        ],
      },
      {
        title: 'flex计算',
        children: [
          '/shortcut/flex1',
          '/shortcut/flex2',
          '/shortcut/flex3',
          '/shortcut/flex4',
        ],
      },
      {
        title: '经典布局',
        children: [
          '/classic/shengbei',
        ],
      },
    ],
  },
};
