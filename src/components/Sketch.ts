import type { p5 as p5Interface, Sketch } from "p5-svelte";

import { get } from "svelte/store";
import {
    nodeDiameter,
    isDialogMainSettingsVisible,
    numberOfNodes,
    nodeFillColor,
    graphRadius,
    mainCanvasHeight,
    mainCanvasWidth,
} from "../components/stores";
import { Graph } from "./Graph";

let p5: p5Interface;

let graph; Graph;

const sketch: Sketch = (_p5) => {

    p5 = _p5; // make the p5 object accesible to every other class
   
    p5.setup = () => {
        p5.createCanvas(get(mainCanvasWidth), get(mainCanvasHeight));
        p5.noLoop();
        graph = new Graph(get(numberOfNodes), get(nodeDiameter), get(nodeFillColor), get(graphRadius));
    };

    p5.draw = () => {
        p5.background(50);
        graph.draw();
    };

    p5.keyPressed = () => {
        if (p5.keyCode === 83) {
            isDialogMainSettingsVisible.update((value) => !value);
        }
    };

    numberOfNodes.subscribe(newNumber => {
        graph?.setNumberOfNodes(newNumber)
        p5.redraw();
    });

    nodeDiameter.subscribe((newDiameter) => {
        graph?.setNodeDiameter(newDiameter)
        p5.redraw();
    });

    nodeFillColor.subscribe((newColor) => {
        graph?.setNodeFillColor(newColor)
        p5.redraw();
    });

    graphRadius.subscribe((newRadius) => {
        graph?.setGraphRadius(newRadius)
        p5.redraw();
    });

    const updateCanvasSize = (newWidth: number, newHeight: number) => {
        console.log(newWidth, newHeight);
        p5.resizeCanvas(newWidth, newHeight);
        graph?.updateNodesPosition();
        p5.redraw();
    } 

    mainCanvasWidth.subscribe(newWidth => {
        updateCanvasSize(newWidth, p5.height);
    });

    mainCanvasHeight.subscribe(newHeight => {
        updateCanvasSize(p5.width, newHeight)
    });
};


export { p5, sketch };