import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "en-US",
  title: "KONAMI NMSL",
  description: "Never Mind the Scandal and Libel",

  base: "/",

  // head: [
  //   [
  //     "link",
  //     {
  //       rel: "stylesheet",
  //       href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
  //     },
  //   ],
  // ],

  themeConfig,
});
