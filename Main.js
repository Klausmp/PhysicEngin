const wight = 640;
const height = 480;
const tileSize = 32;
const gridWight = wight / tileSize;
const gridHeigt = height / tileSize;

//console.log(gridWight +"gridWight");
//console.log(gridHeigt +"gridHeight");

document.addEventListener("keypress", keyboardInput);

let grid = new Grid();
