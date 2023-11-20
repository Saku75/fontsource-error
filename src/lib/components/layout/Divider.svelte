<script lang="ts">
  import cn from "$lib/utils/cn";

  export let orientation: "vertical" | "horizontal" = "vertical";
  export let className: string = "";

  const classes = cn(
    {
      "h-1/2 w-px": orientation === "vertical",
      "h-px w-1/2": orientation === "horizontal",
    },
    "bg-zinc-400 dark:bg-zinc-600",
    className,
  );
</script>

<div class={classes}></div>
