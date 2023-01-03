import { p5 } from "./Sketch";

export class Node {
    constructor(x: number, y: number, d: number) {
        this.x = x;
        this.y = y;
        this.d = d;
    }

    draw = () => {
        p5.circle(this.x, this.y, this.d);
    }

    setDiameter = (newDiameter: number) => {
        this.d = newDiameter;
    }
}

export interface Node {
    x: number,
    y: number,
    d: number,

    draw: () => void,
    setDiameter: (newDiameter: number) => void,
}