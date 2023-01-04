import { writable } from "svelte/store";

export const nodeDiameter = writable<number>(50);
export const nodeFillColor = writable<number>();
export const isDialogMainSettingsVisible = writable<boolean>(true);
export const numberOfNodes = writable<number>(10);
export const graphRadius = writable<number>((window.innerHeight / 2) * 0.8)
export const mainCanvasParrent = writable<HTMLDivElement>();