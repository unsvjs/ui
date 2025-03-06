<script lang="ts">
  import { Button } from "bits-ui";
  import type { Snippet } from "svelte";
  import type { PrimaryColor } from "../../../colors";

  type Props = {
    size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
    type: "button" | string;
    icon?: string;
    color: PrimaryColor | string;
    variant: "link" | "solid" | "outline" | "soft" | "link";
    children?: Snippet;
  };

  const {
    size = "md",
    type = "button",
    variant = "solid",
    icon,
    color = "orange",
    children,
    ...rest
  }: Props = $props();

  const variants: Record<Props["variant"], string> = {
    link: "",
    solid: "bg-surface-900 text-surface-50",
    outline: "",
    soft: "",
  };

  const sizes: Record<Props["size"], string> = {
    "2xs": "p-xxs",
    xs: "p-xs",
    sm: "p-sm",
    md: "p-md",
    lg: "p-lg",
    xl: "p-xl",
  };
</script>

<Button.Root class={[variants[variant], sizes[size]]} {...rest}>
  {#if children}
    {@render children()}
  {/if}
</Button.Root>
