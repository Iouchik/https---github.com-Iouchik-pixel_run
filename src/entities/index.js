import { ctx } from "../canvas";

export class Entity {
    constructor() {
        this.toDelete = false;
    }

    update() {}

    draw() {}
}

export class Rect extends Entity {
    constructor(x, y, width, height, color) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}