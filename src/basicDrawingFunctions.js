import { ctx } from "./canvas";

export function drawRectangle(color, width, height, x, y, transparency = 1) {
	ctx.globalAlpha = transparency;
    ctx.fillStyle = color;

    ctx.fillRect(x, y, width, height);
}

export function drawLine(color, xStart, yStart, xEnd, yEnd, thickness = 1, transparency = 1) {
	ctx.globalAlpha = transparency;
    ctx.strokeStyle = color;
	ctx.lineWidth = thickness;

	ctx.beginPath();
	ctx.moveTo(xStart, yStart);
	ctx.lineTo(xEnd, yEnd);
	ctx.stroke(); 
}