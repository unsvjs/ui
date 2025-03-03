import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [],
  declaration: true,
  externals: ["svelte"],
  failOnWarn: false,
});
