import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    {
      text: "阅读须知",
      icon: "creative",
      prefix: "/",
      link: "/",
    },
    {
      text: "HDD轮椅人教程",
      prefix: "noob/",
      icon: "disability",
      link: "noob/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "网络联机",
      prefix: "network/",
      icon: "network",
      link: "network/",
      // collapsable: true,
      children: "structure",
    },
    {
      text: '目录结构',
      prefix: "structure/",
      icon: "structure",
      // collapsable: true,
      children: "structure",
    },
    {
      text: "故障排除",
      prefix: "trouble-shooting/",
      icon: "question",
      collapsable: true,
      children: "structure",
    }
  ],
  "/eacsdvx/": "structure",
});
