normalClick = (event) => {
    if (event.target.classList.item(0) === "node") {
        tile = new Tile(event.target);
        switch (grid.mouseClickType) {
            case 0:
                tile.changeType(changeButtonTypes.wall);
                break;
            case 1:
                tile.changeType(changeButtonTypes.road);
                break
            case 2:
                tile.changeType(changeButtonTypes.target)
                break;
            case 3:
                tile.changeType(changeButtonTypes.root);
                break;
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

