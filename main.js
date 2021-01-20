main();

function main() {
    let canves = document.getElementById("canves")

    let ctx = canves.getContext("2d");
    ctx.fillStyle = "#11d6cc";


    let world = new World(ctx);
    world.addEntity(new Entity(100, 100, squareShape(100, 100)));
    world.draw();

}