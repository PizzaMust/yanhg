import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "KONAMI NMSL",
      description: "To show respects to KONAMI.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "科乐美 NMSL",
      description: "提供一些科乐美游戏的游玩教程",
    },
  },

  theme,
});
