import { getContext, setContext } from "svelte";
import { type Readable, type Writable, readonly, writable } from "svelte/store";

function setTitle(data?: string) {
  const store = writable<string>(data || "");

  setContext("title", store);
  setContext("titleReadonly", readonly(store));
}

function getTitle() {
  return getContext<Writable<string>>("title");
}

function getTitleReadonly() {
  return getContext<Readable<string>>("titleReadonly");
}

export { getTitle, getTitleReadonly, setTitle };
