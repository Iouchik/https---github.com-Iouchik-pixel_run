import { Rect } from ".";
import { drawRectangle, drawLine } from "../basicDrawingFunctions";
import { cellsInLevel } from "../main";

export class Cell extends Rect {
    constructor(x, y, width, height, rowNumber, columnNumber, color = null) {
        super(x, y, width, height, color);
        this.rowNumber = rowNumber;
        this.columnNumber = columnNumber;
    }
}

export class Field {
    constructor(x, y, width, height, rowsCount, columnsCount, cellsSize, color) {
        super(x, y, width, height, color);
        this.rowsCount = rowsCount;
        this.columnsCount = columnsCount;
        this.cellsSize = cellsSize;
    }

    building() {
        const frameSpaceWidth = 60;
        const frameSpaceHeight = 56;
        const widthMaximum = canvas.width - frameSpaceWidth;
        const heightMaximum = canvas.height - frameSpaceHeight;
    
        this.cellsSize = heightMaximum / this.rowsCount;
        if (this.columnsCount * this.cellsSize > widthMaximum) {
            this.cellsSize = widthMaximum / this.columnsCount;
        }
    
        this.width = this.columnsCount * this.cellsSize;
        this.height = this.rowsCount * this.cellsSize;
        x = (canvas.width - this.width) / 2;
        y = (canvas.height - this.height) / 2;
    
        let xCell = x;
        let yCell = y; 
        for (let i = 0; i < this.rowsCount; i++) {
            for (let l = 0; l < columnsCount; l++) {
                cellsInLevel.push( addEntity(new Cell(xCell, yCell, this.cellsSize, this.cellsSize, i, l)) );
    
                xCell += cellsSize;
            }

            yCell += cellsSize; 
            xCell -= columnsCount * cellsSize;
        }
    }

    drawing() {
        drawRectangle('#000f01', this.width, this.height, this.x, this.y);

        const color = '#008800';
        const lineWidth = 1;
        let horizontalLinesPositions = this.y;
        let verticalLinesPositions = this.x;
    
        for (let i = 0; i < this.rowsCount + 1; i++) {
            drawLine(color, this.x - lineWidth / 2, horizontalLinesPositions, this.x + this.width, horizontalLinesPositions, lineWidth);
            horizontalLinesPositions += this.cellsSize;
        }
        for (let i = 0; i < field.columnsCount; i++) {
            drawLine(color, verticalLinesPositions, this.y - lineWidth / 2, verticalLinesPositions, this.y + this.height, lineWidth);
            verticalLinesPositions += this.cellsSize;
        }
    }
}