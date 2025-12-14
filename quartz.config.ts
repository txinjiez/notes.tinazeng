import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "system",
      cdnCaching: true,
      typography: {
        header: `"Courier New", monospace`,
        body: `"Courier New", monospace`,
        code: `"Courier New", monospace`,
      },
      colors: {
        lightMode: {
          light: "#f5f5f5",
          lightgray: "#e7e3ed",
          gray: "#c7bdcf",
          darkgray: "#5c4f70",
          dark: "#796188",
          secondary: "#796188",
          tertiary: "#a18fb4",
          highlight: "rgba(121, 97, 136, 0.14)",
          textHighlight: "#79618855",
        },
        darkMode: {
          light: "#17141a",
          lightgray: "#2f2a34",
          gray: "#5a4f64",
          darkgray: "#d9cfdf",
          dark: "#f1eafb",
          secondary: "#d9cfdf",
          tertiary: "#a18fb4",
          highlight: "rgba(209, 192, 224, 0.18)",
          textHighlight: "#d9cfdf55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.Graph(),
      Plugin.PageGraph(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
