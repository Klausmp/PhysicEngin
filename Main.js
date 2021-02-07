const wight = 640;
const height = 480;
const tileSize = 32;
const gridWight = wight / tileSize;
const gridHeigt = height / tileSize;

//console.log(gridWight +"gridWight");
//console.log(gridHeigt +"gridHeight");
let TileTypes = { road : "road", found: "found", root: "root", target: "target", path: "path", wall: "wall"};
let changeButtonTypes = {road: "road", wall: "wall", root: "root", target: "target"};
let alorithem = aStar;
document.addEventListener("keypress", keyboardInput);

let grid = new Grid();
