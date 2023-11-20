import cn from "$lib/utils/cn";

const navItemStyle = cn(
  "flex items-center gap-1 px-4 transition-colors",
  "text-zinc-600 hover:text-zinc-800 focus:text-zinc-800 active:text-zinc-950",
  "hover:bg-zinc-200 focus:bg-zinc-200 active:bg-zinc-300",
  "dark:text-zinc-400 dark:hover:text-zinc-200 dark:focus:text-zinc-200 dark:active:text-zinc-50",
  "dark:hover:bg-zinc-800 dark:focus:bg-zinc-800 dark:active:bg-zinc-700",
);

export { navItemStyle };
