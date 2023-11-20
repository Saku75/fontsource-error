<script lang="ts">
  import cn from "$lib/utils/cn";
  import type { NavigationItem } from "./navItem.types";
  import { navItemStyle } from "./utils/navItemStyle";

  export let text: NavigationItem["text"];
  export let href: NavigationItem["href"];
  export let Icon: NavigationItem["Icon"] = undefined;
  export let preload: NavigationItem["preload"] = "hover";
</script>

<li class="contents">
  <a
    {href}
    class={cn(navItemStyle, "h-12 px-8 text-xl sm:px-4 sm:text-base")}
    data-sveltekit-preload-data={preload}
  >
    {#if Icon}
      <svelte:component this={Icon} class="h-5 w-5 sm:h-4 sm:w-4" />
    {/if}
    {text}
  </a>
</li>
