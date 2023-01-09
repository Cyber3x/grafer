import { writable } from "svelte/store";

export const nodeDiameter = writable<number>(50);
export const nodeFillColor = writable<string>("#ff3399");
export const isDialogMainSettingsVisible = writable<boolean>(true);
export const numberOfNodes = writable<number>(10);
export const nodeStrokeColor = writable<string>("#000");
export const graphRadius = writable<number>((window.innerHeight / 4) * 0.8)

export const mainCanvasWidth = writable<number>();
export const mainCanvasHeight = writable<number>();


// labos
export const paramA = writable<number>(3);
export const paramB = writable<number>(1);
export const paramC = writable<number>(2);

// console lines
const MAX_GCONSOLE_LINES = 100;

const createGConsole = () => {
    const { subscribe, set, update } = writable<string[]>(["Hello world"]);

    return {
        subscribe,
        clear: () => set([]),
        log: (line: string) => 
            update(lines => {
                let newLines = [line, ...lines]
                if (newLines.length > MAX_GCONSOLE_LINES) newLines.pop();
                return newLines;
            }),
        set: (lines: string[]) => set(lines)
    }
} 
export const GConsole = createGConsole();