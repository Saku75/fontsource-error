import type { IconEvents, IconProps } from "lucide-svelte";
import type { SvelteComponent } from "svelte";

type NavigationItem = {
  text: string;
  href: string;
  Icon?: typeof SvelteComponent<IconProps, IconEvents, object>;
  preload?: "hover" | "off" | "tap";
};

export type { NavigationItem };
