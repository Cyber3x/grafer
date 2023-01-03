import type { p5 as p5Interface, Sketch } from "p5-svelte";
import { get } from "svelte/store";
import { Node } from "./Node";

import { d, isDialogMainSettingsVisible } from './stores'

let _p5: p5Interface;

let height = window.innerHeight;
let width = window.innerWidth;
let a: Node;

export {_p5 as p5};
export const sketch: Sketch = (p5) => {
    _p5 = p5; // make the p5 object accesible to every other class
    p5.setup = () => {
        p5.createCanvas(width, height);
        a = new Node(width / 2, height / 2, get(d));
    };

    p5.draw = () => {
        p5.background(50);
        a.setDiameter(get(d));
        a.draw();
    };

    p5.keyPressed = () => {
        if (p5.keyCode === 83) {
            isDialogMainSettingsVisible.update(value => !value);
            console.log(get(isDialogMainSettingsVisible));
        }
    }
};