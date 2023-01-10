import { get } from "svelte/store";
import { mainCanvasHeight, mainCanvasWidth } from "../Stores/stores";
import { Node } from "./Node"; 
import { p5 } from "./Sketch";

export class Graph {
    constructor(numberOfNodes: number, nodeDiameter: number, nodeFillColor: string, graphRadius: number) {
        this.nodes = []
        this.numberOfNodes = numberOfNodes;
        this.nodeDiameter = nodeDiameter;
        this.nodeFillColor = nodeFillColor;
        this.graphRadius = graphRadius;
        this.drawNodesId = true;
        
        this.regenerateNodes();
    }

    draw() {
        this.nodes.forEach((node) => node.draw({drawId: this.drawNodesId}));
    }

    regenerateNodes() {
        this.nodes = []
        const angleDelta = p5.TWO_PI / this.numberOfNodes;
        for (let i = 0; i < this.numberOfNodes; i++) {
            let x = get(mainCanvasWidth) / 2 + p5.cos(angleDelta * i) * this.graphRadius;
            let y = get(mainCanvasHeight) / 2 + p5.sin(angleDelta * i) * this.graphRadius;
            this.nodes.push(new Node(x, y, this.nodeDiameter, i, this.nodeFillColor));
        }
    };

    setNodeDiameter(newDiameter: number) {
        this.nodes.forEach(node => node.updateDiameter(newDiameter));
    }

    setNodeFillColor(newColor: string) {
        this.nodes.forEach(node => node.updateFillColor(newColor));
    }
    
    setNumberOfNodes(newNumber: number) {
        this.numberOfNodes = newNumber;
        this.regenerateNodes();

    }

    setGraphRadius(newRadius: number) {
        this.graphRadius = newRadius;
        this.updateNodesPosition();
    }

    updateNodesPosition() {
        const angleDelta = p5.TWO_PI / this.numberOfNodes;
        for (let i = 0; i < this.numberOfNodes; i++) {
            let newX = get(mainCanvasWidth) / 2 + p5.cos(angleDelta * i) * this.graphRadius;
            let newY = get(mainCanvasHeight) / 2 + p5.sin(angleDelta * i) * this.graphRadius;
            this.nodes[i].updatePosition(newX, newY);
        }
    }

    setDrawNodesIds(newValue: boolean) {
        this.drawNodesId = newValue;
    }
}

export interface Graph {
    numberOfNodes: number
    nodes: Node[],
    nodeDiameter: number;
    nodeFillColor: string;
    graphRadius: number;
    drawNodesId: boolean;

}