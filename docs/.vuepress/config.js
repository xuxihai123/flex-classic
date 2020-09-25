module.exports = {
  base: "/flex-classic/",
  dest: "./dist",
  repo: "https://github.com/xuxihai123/flex-classic",
  title: "flex个人手册",
  description: "Just playing around",
  themeConfig: {
    sidebar: [
      {
        title: "容器属性",
        collapsable: false,
        children: [
          "/container/flex-direction",
          "/container/justify-content",
          "/container/align-items",
          '/container/align-content',
          "/container/flex-wrap",
          "/container/flex-flow"
        ]
      },
      {
        title: "元素属性",
        collapsable: false,
        children: [
          "/element/align-self",
          "/element/flex-basis",
          "/element/flex-grow",
          "/element/flex-shrink",
          "/element/order"
        ]
      },
      {
        title: "flex计算",
        children: ["/shortcut/flex1", "/shortcut/flex2", "/shortcut/flex3", "/shortcut/flex4"]
      },
      {
        title: "经典布局",
        children: ["/classic/shengbei"]
      }
    ]
  }
};
