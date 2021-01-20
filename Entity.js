let Entity = function (x, y, shape) {
    this.x = x;
    this.y = y;
    this.shape = shape;

    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        for (x in shape) {
            ctx.lineTo(this.x + shape[x].x, this.y + shape[x].y);
        }
        ctx.closePath();
        ctx.fill();
    }
}
