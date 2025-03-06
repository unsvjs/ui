import unocss, { type VitePluginConfig } from "unocss/vite";
import {
  presetWind4,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { mergeConfig } from "vite";

export type Options = {
  unocss?: VitePluginConfig;
  primary?: string;
  surface?: string;
};

export function ui(opts: Options = {}) {
  const wind4 = presetWind4({});

  const primary = opts.primary || "orange";
  const surface = opts.surface || "zinc";

  console.log(wind4.theme?.colors?.[primary]);

  const uno = unocss(
    mergeConfig<VitePluginConfig, VitePluginConfig>(opts.unocss || {}, {
      safelist: ["primary"],
      presets: [wind4],
      theme: {
        colors: {
          primary: wind4.theme?.colors?.[primary],
          surface: wind4.theme?.colors?.[surface],
        },
      },
      transformers: [
        transformerCompileClass(),
        transformerDirectives(),
        transformerVariantGroup(),
      ],
    })
  );

  return [uno];
}
