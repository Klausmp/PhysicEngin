normalClick = (event) => {
    if (event.target.classList.item(0) === "node") {
        if (event.shiftKey === false && event.ctrlKey === false) {
            tile = new Tile(event.target);
            if (tile.firstType !== TileTypes.road) {
                tile.changeType(TileTypes.road)
                return;
            }
            tile.changeType(TileTypes.wall);
        }
    }
}

function shiftClick(event) {
    if (event.target.className !== "grid") {
        if (event.shiftKey === true && event.ctrlKey === false) {
            grid.removeFound();
            grid.removePath();
            tile = new Tile(event.target);
            tile.changeType("target");
        }
    }
}

function ctrlClick(event) {
    if (event.target.className !== "grid") {
        if (event.shiftKey === false && event.ctrlKey === true) {
            grid.removeFound();
            grid.removePath();
            tile = new Tile(event.target);
            tile.changeType(TileTypes.root);
        }
    }
}

function keyboardInput(event) {
    if (event.code === "KeyR") {
        grid.resetGrid();
    }

    if (event.code === "KeyF") {
        if (rootTile != null && targetTile != null) {
            grid.genNewPath();
        }
    }

    if (event.code === "KeyE") {
        grid.removeFound();
    }

    if (event.code === "KeyD") {
        grid.removePath();
    }

    if (event.code === "KeyA") {
        grid.removeAlgorithemTiles()
    }

    if (event.code === "KeyS") {
        grid.scramble();
    }
}

