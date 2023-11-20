<script lang="ts">
  import { Home, Gift, Menu, X } from "lucide-svelte";
  import NavItem from "./NavItem.svelte";
  import type { NavigationItem } from "./navItem.types";
  import { navItemStyle } from "./utils/navItemStyle";
  import { beforeNavigate } from "$app/navigation";
  import cn from "$lib/utils/cn";

  export let items: NavigationItem[] = [
    {
      text: "Home",
      href: "/",
      Icon: Home,
    },
  ];

  let isOpen = false;

  function openMenu() {
    isOpen = true;
  }

  function closeMenu() {
    isOpen = false;
  }

  beforeNavigate(closeMenu);
</script>

<div class="flex justify-end sm:hidden">
  <button class={navItemStyle} on:click={openMenu}>
    <Menu size="1.5rem" />
    Menu
  </button>
</div>

<nav
  class="fixed inset-0 bg-white/50 backdrop-blur dark:bg-black/50 sm:contents sm:bg-none"
  class:hidden={!isOpen}
  class:grid={isOpen}
>
  <ul class="sm:flex">
    <li class="border-b border-zinc-400 dark:border-zinc-600 sm:hidden">
      <button
        class={cn(navItemStyle, "h-12 w-full px-8 text-xl")}
        class:hidden={!isOpen}
        on:click={closeMenu}
      >
        <X class="h-5 w-5 sm:h-4 sm:w-4" />
        Close
      </button>
    </li>
    {#each items as item}
      <NavItem {...item} />
    {/each}
  </ul>
</nav>
