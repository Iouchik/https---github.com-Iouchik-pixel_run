import { Cell } from "./Field";


export class Lava extends Cell {
    constructor(row, column, size) {
        super(row, column, size, "gray");
    }
}