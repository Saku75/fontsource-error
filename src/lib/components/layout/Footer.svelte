<script lang="ts">
  import { Copyright } from "lucide-svelte";

  const initialYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearRange =
    currentYear > initialYear ? `${initialYear} - ${currentYear}` : initialYear;
</script>

<footer class="px-4">
  <div class="mx-auto flex h-6 max-w-screen-2xl justify-end">
    <small
      class="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400"
    >
      <Copyright size="0.75rem" />
      <span>Example.com {yearRange}</span>
    </small>
  </div>
</footer>
