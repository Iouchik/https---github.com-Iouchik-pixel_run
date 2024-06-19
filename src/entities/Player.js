import { keyboard } from "../events";
import { Cell } from "./Field";

export class Player extends Cell {
    constructor(row, column, size) {
        super(row, column, size, "red");
    }

    move() {
        if (keyboard.get("KeyW") || keyboard.get("ArrowUp")) {
            
        }
        if (keyboard.get("KeyA") || keyboard.get("ArrowLeft")) {
            
        }
        if (keyboard.get("KeyS") || keyboard.get("ArrowDown")) {
            
        }
        if (keyboard.get("KeyD") || keyboard.get("ArrowRight")) {
            
        }
    }

    update() {
        this.move();
    }
}