import { Cell } from "./Field";

export class Wall extends Cell {
    constructor(row, column, size) {
        super(row, column, size, "gray");
    }
}