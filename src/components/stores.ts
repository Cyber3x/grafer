import { writable } from "svelte/store";

export const d = writable<number>(50);
export const isDialogMainSettingsVisible = writable<boolean>(true);
export const numberOfNodes = writable<number>(10);