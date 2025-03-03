import { defaultTheme } from "@sveltepress/theme-default";
import { sveltepress } from "@sveltepress/vite";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          Guides: [
            {
              title: "Getting Started",
              collapsible: true,
              items: [
                {
                  title: "Introduction",
                  to: "/getting-started",
                },
                {
                  title: "Installation",
                  to: "/getting-started/installation",
                },
                {
                  title: "Theming",
                  to: "/getting-started/theming",
                },
              ],
            },
          ],
        },
        github: "https://github.com/unsvjs",
        logo: "/sveltepress.svg",
      }),
      siteConfig: {
        title: "unsv UI",
        description: "a ui library for the rest of us",
      },
    }),
  ],
});

export default config;
