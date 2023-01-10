import {p5} from "./Sketch";

export class Node {
    constructor(x: number, y: number, d: number, id: number, fillColor: string) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.id = id;
        this.fillColor = fillColor;
    }

    draw = ({drawId}: DrawOptions) => {
        p5.push();
        p5.fill(this.fillColor);
        p5.circle(this.x, this.y, this.d);
        if (drawId) {

            p5.fill("#000");
            p5.textSize(this.d * (1 / 2));
            p5.textAlign(p5.CENTER, p5.CENTER);
            p5.text(this.id + 1, this.x, this.y);
        }
        p5.pop();
    }

    updateDiameter = (newDiameter: number) => {
        this.d = newDiameter;
    }

    updateFillColor = (newColor: string) => {
        this.fillColor = newColor;
    }

    updatePosition(newX: number, newY: number) {
        this.x = newX;
        this.y = newY;
    }
}

export interface Node {
    x: number,
    y: number,
    d: number,
    fillColor: string;
    id: number; 

    draw: (options: DrawOptions) => void,
    updateDiameter: (newDiameter: number) => void,
    updateFillColor: (newColor: string) => void;
    updatePosition: (newX: number, newY: number) => void;
}

export interface DrawOptions {
    drawId: boolean
}