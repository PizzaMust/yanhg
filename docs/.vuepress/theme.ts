import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://konami.sb",

  iconAssets: "iconfont",

  logo: "/logo.svg",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      // // navbar
      // navbar: navbar.en,

      // // sidebar
      // sidebar: sidebar.en,

      footer: "WTFPL|konami.sb",

      displayFooter: true,
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "WTFPL|konami.sb",

      displayFooter: false,
    },
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
    },
    seo: false,
    sitemap: false,
  },
});
