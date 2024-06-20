import { drawRectangle } from "../basicDrawingFunctions";

export class Entity {
    constructor() {
        this.toDelete = false;
    }
    updating() {}
    drawing() {}
}

export class Rectangle extends Entity {
    constructor(x, y, width, height, color, transparency = 1) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.transparency = transparency;
    }

    draw() {
        drawRectangle(this.color, this.width, this.height, this.x, this.y, this.transparency)
    }
}