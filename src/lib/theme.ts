import { type ResolvedTheme } from "@sveltepress/vite";
import { createHighlighter } from "shiki";

export function theme() {
  const highlighter = createHighlighter({
    langs: ["js", "svelte"],
    themes: ["github-light", "github-dark"],
  });

  return {
    name: "theme:unsv-ui",
  };
}
