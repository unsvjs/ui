<script>
  import "@unocss/reset/tailwind.css";

  const { children } = $props();
</script>

<!-- Leave this. Or you can add more content for your custom layout -->
{@render children?.()}
