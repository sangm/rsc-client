const Font = require('./font');
const Color = require('./color');

class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    setColor(color) {
        this.ctx.fillStyle = color.toCanvasStyle();
        this.ctx.strokeStyle = color.toCanvasStyle();
    }

    fillRect(x, y, width, height) {
        this.ctx.fillRect(x, y, width, height);
    }

    drawRect(x, y, width, height) {
        this.ctx.strokeRect(x, y, width, height);
    }

    setFont(font) {
        this.ctx.font = String(font);
    }

    drawString(s, x, y) {
        this.ctx.fillText(s, x, y);
    }

    measureTextWidth(s) {
        return this.ctx.measureText(s).width;
    }

    drawImage(image, x, y) {
        this.ctx.putImageData(image, x, y);
    }

    getImage(width, height) {
        return this.ctx.getImageData(0, 0, width, height);
    }
}

module.exports = Graphics;
