import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    {
      text: "阅读须知",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
    },
    {
      text: "轮椅人教程",
      prefix: "guide/noob/",
      icon: "launch",
      collapsable: true,
      children: "structure",
    },
    {
      text: "网络联机",
      prefix: "guide/network/",
      icon: "light",
      // collapsable: true,
      children: "structure",
    },
    {
      text: "目录结构",
      prefix: "guide/structure/",
      icon: "structure",
      // collapsable: true,
      children: "structure",
    },
    {
      text: "故障排除",
      prefix: "guide/fault/",
      icon: "question",
      // collapsable: true,
      children: "structure",
    }
  ],
});
