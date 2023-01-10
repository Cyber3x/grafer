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
    GConsole,
    showNodesIds,
} from "../Stores/stores";
import { isConsoleOpen } from "../Stores/UIStore";
import { Graph } from "./Graph";

let p5: p5Interface;
let graph: Graph;

let offset = {
    x: 0,
    y: 0,
    prevX: undefined,
    prevY: undefined
}

const sketch: Sketch = (_p5) => {

    p5 = _p5; // make the p5 object accesible to every other class
   
    p5.setup = () => {
        p5.createCanvas(get(mainCanvasWidth), get(mainCanvasHeight));
        graph = new Graph(get(numberOfNodes), get(nodeDiameter), get(nodeFillColor), get(graphRadius));
        p5.noLoop();
    };

    p5.draw = () => {
        p5.translate(offset.x, offset.y)
        p5.background(50);
        p5.circle(p5.width / 2, p5.height / 2, 10);
        graph.draw();
    };

    p5.keyPressed = () => {
        if (p5.keyCode === 83) {
            isDialogMainSettingsVisible.update((value) => !value);
        }

        if (p5.keyCode === 67) {
            isConsoleOpen.update(value => !value)
        } // LETTER C
    };

    numberOfNodes.subscribe(newNumber => {
        graph?.setNumberOfNodes(newNumber)
        p5.redraw();
    });

    nodeDiameter.subscribe((newDiameter) => {
        graph?.setNodeDiameter(newDiameter)
        GConsole.log(newDiameter.toString());
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

    showNodesIds.subscribe(value => {
        graph?.setDrawNodesIds(value);
        GConsole.log("Show node ids: " + value)
        p5.redraw();
    })

    const updateCanvasSize = (newWidth: number, newHeight: number) => {
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

    p5.mouseDragged = (e: MouseEvent) => {
        if (e.target.className === 'p5Canvas' && p5.mouseButton === p5.LEFT) {
            let x = p5.mouseX;
            let y = p5.mouseY;

            if (!offset.prevX) {
                offset.prevX = x
            } else {
                let dx = x - offset.prevX;
                offset.x += dx;
                offset.prevX = x;
            }

            if (!offset.prevY) {
                offset.prevY = y
            } else { 
                let dy = y - offset.prevY;
                offset.y += dy;
                offset.prevY = y;
            };
            GConsole.log(offset.x + " " + offset.y)
            p5.redraw();
        }
        
    }

    p5.mouseReleased = () => {
        offset.prevX = undefined;
        offset.prevY = undefined;
    }

    // TODO: connect letter C to toggle console

};


export { p5, sketch };