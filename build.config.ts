import { defineBuildConfig } from "unbuild";
import svelte from "rollup-plugin-svelte";

export default defineBuildConfig({
  entries: [],
  declaration: true,
  externals: ["svelte"],
  failOnWarn: false,
  hooks: {
    "rollup:options"(ctx, options) {
      options.plugins = [...options.plugins, svelte()];
    },
  },
});
