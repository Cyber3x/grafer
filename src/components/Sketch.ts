import p5 from "p5";
import type { p5 as p5Interface, Sketch } from "p5-svelte";
import { get } from "svelte/store";
import { Node } from "./Node";

import { nodeDiameter, isDialogMainSettingsVisible, numberOfNodes, graphRadius, mainCanvasParrent } from './stores'

let _p5: p5Interface;
let height = innerHeight;
let width = innerWidth;

let nodes: Node[] = [];

export {_p5 as p5};
export const sketch: Sketch = (p5) => {

    _p5 = p5; // make the p5 object accesible to every other class
    p5.setup = () => {
        p5.createCanvas(width, height);
        p5.noLoop();
        regenerateNodes();
    };

    p5.draw = () => {
        p5.background(50);
        nodes.forEach(node => node.draw());
    };

    p5.keyPressed = () => {
        if (p5.keyCode === 83) {
            isDialogMainSettingsVisible.update(value => !value);
        }
    }

    const regenerateNodes = () => {
        nodes = [];
        const angleDelta = (2 * p5.PI) / get(numberOfNodes);
        for (let i = 0; i < get(numberOfNodes); i++) {
            let x = width / 2 + p5.cos(angleDelta * i) * get(graphRadius);
            let y = height / 2 + p5.sin(angleDelta * i) * get(graphRadius);
            nodes.push(new Node(x, y, get(nodeDiameter)));
            p5.redraw();
        }
    }

    numberOfNodes.subscribe(() => {
        regenerateNodes();
    })

    nodeDiameter.subscribe(newDiameter => {
        nodes.forEach(node => node.setDiameter(newDiameter));
        p5.redraw();
    })

    graphRadius.subscribe(() => {
        regenerateNodes();
    })

    mainCanvasParrent.subscribe((element) => {
        height = element.clientHeight;
        width = element.clientWidth;
        console.log(width, height);
        p5.resizeCanvas(width, height);
    })


    const reset = () => {

    }
};