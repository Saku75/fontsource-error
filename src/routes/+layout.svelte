<script lang="ts">
  import "../app.scss";
  import "@fontsource-variable/inter";
  import "@fontsource-variable/dancing-script";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import { setTitle, getTitleReadonly } from "$lib/context/title";

  setTitle();
  const title = getTitleReadonly();
</script>

<svelte:head>
  <title>{$title ? `${$title} - Example.com` : "Example.com"}</title>
</svelte:head>

<div class="sticky top-0 z-40 row-start-1 self-end">
  <Header />
</div>

<slot />

<Footer />
