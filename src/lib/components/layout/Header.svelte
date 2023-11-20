<script lang="ts">
  import Nav from "../navigation/Nav.svelte";
  import Divider from "./Divider.svelte";
</script>

<header
  class="border-y border-zinc-400 bg-zinc-50 px-4 dark:border-zinc-600 dark:bg-zinc-950"
>
  <div
    class="mx-auto grid h-12 max-w-screen-2xl grid-cols-layout items-stretch"
  >
    <div class="flex items-center">
      <a
        class="flex h-full items-center px-4 font-cursive text-3xl font-bold"
        href="/"
      >
        Example
      </a>
      <Divider className="hidden sm:block" />
    </div>
    <Nav />
  </div>
</header>
