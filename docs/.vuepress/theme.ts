import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://doc.573.gay",

  iconAssets: "//at.alicdn.com/t/c/font_3648253_31qf7vu8kws.css",

  logo: "/logo.svg",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      // // navbar
      navbar: navbar.zh,

      // // sidebar
      sidebar: sidebar.zh,

      footer: "WTFPL|573.gay",

      displayFooter: false,
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: navbar.zh,

    //   // sidebar
    //   sidebar: sidebar.zh,

    //   footer: "WTFPL|573.gay",

    //   displayFooter: false,
    // },
  },

  navbarLayout: {
    left: ["Brand"],
    center: ["Links"],
    right: ["Outlook", "Search"],
  },

  plugins: {
    mdEnhance: {
      enableAll:false,
      container: true,
      tabs: true,
      codetabs: true,
      align: true,
      imageSize: true,
      tasklist: true,
      footnote: true,
    },
    seo: false,
    sitemap: false,
  },
});
