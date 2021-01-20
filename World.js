let World = function (ctx) {
    this.ctx = ctx;
    this.entitys = [];


    this.update = function () {
        for (x in this.entitys) {
            this.entitys.update();
        }
    }

    this.draw = function () {
        for (x in this.entitys) {
            this.entitys[x].draw(ctx);
        }
    }

    this.addEntity = function (entity) {
        this.entitys.push(entity);
    }
}