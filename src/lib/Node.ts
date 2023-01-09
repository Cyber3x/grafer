import {p5} from "./Sketch";

export class Node {
    constructor(x: number, y: number, d: number, fillColor: string) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.fillColor = fillColor;
    }

    draw = () => {
        p5.push();
        p5.fill(this.fillColor);
        p5.circle(this.x, this.y, this.d);
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

    draw: () => void,
    updateDiameter: (newDiameter: number) => void,
    updateFillColor: (newColor: string) => void;
}