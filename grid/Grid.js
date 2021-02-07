class Grid {
    constructor() {
        this.grid = document.querySelector(".grid");
        this.init();
        this.gridArray = this.getGridArray();
        this.grid.addEventListener("click", normalClick);
        this.grid.addEventListener("click", shiftClick);
        this.grid.addEventListener("click", ctrlClick);
        this.grid.style.width = wight + 2 + "px";
        this.grid.style.height = height + 2 + "px";
        this.mouseClickType = 0;
        console.log(this.grid);
    }

    getNodeFromGrid = (x, y) => document.getElementById(x + "-" + y);

    getNodeFromVectorFromGrid = (pos) => this.getNodeFromGrid(pos.x, pos.y);

    removeFound = () => this.resetAllNodesByType(TileTypes.found);

    removePath = () => this.resetAllNodesByType(TileTypes.path);

    removeWalls = () => this.resetAllNodesByType(TileTypes.wall);

    resetAllNodes() {
        for (let x in TileTypes) {
            this.resetAllNodesByType(TileTypes[x]);
        }
    }

    resetAllNodesByType(type) {
        for (let x in this.gridArray) {
            let tile = new Tile(this.gridArray[x]);
            this.resetNodeType(tile, type);
        }
    }

    resetNodeType(tile, type) {
        if (tile.firstType === type) {
            tile.changeType(TileTypes.road);
        }
    }

    resetGrid () {
        rootTile = null;
        targetTile = null;
        this.resetAllNodes();
    }

    getGridArray()  {
        let result = [];
        for (let x = 0; x < gridWight; x++) {
            for (let y = 0; y < gridHeigt; y++) {
                result.push(this.getNodeFromGrid(x, y));
            }
        }
        return result;
    }

    scramble() {
        this.removePath();
        this.removeFound();
        this.removeWalls();
        for (let x in this.gridArray) {
            let tile = new Tile(this.gridArray[x]);
            if (tile.firstType !== TileTypes.root && tile.firstType !== TileTypes.target) {
                if (Math.random() >= 0.60) {
                    tile.changeType(TileTypes.wall);
                }
            }
        }
    }

    removeAlgorithemTiles() {
        grid.removePath();
        grid.removeFound();
    }

    genNewPath() {
        this.removeAlgorithemTiles();
        let path = aStar.run(targetTile.pos, rootTile.pos);
        if (path !== false) {
            this.walkOverPath(path);
        }
    }

    stepMouseClick() {
        let changeButton = document.getElementById("changeButton");
        this.mouseClickType++;
        if (this.mouseClickType >= 4) {
            this.mouseClickType = 0;
        }
        switch (this.mouseClickType) {
            case 0:
                changeButton.className = "changeButton " +changeButtonTypes.wall;
                break;
            case 1:
                changeButton.className = "changeButton " +changeButtonTypes.road;
                break
            case 2:
                changeButton.className = "changeButton " +changeButtonTypes.target;
                break;
            case 3:
                changeButton.className = "changeButton " +changeButtonTypes.root;
                break;
        }
    }

    walkOverPath(path) {
        path.forEach((tile, index) => {
            (function (i) {
                setTimeout(function () {
                    tile.changeType(TileTypes.path);
                }, 70 * index);
            })(index);
        });
    }

    init() {
        for (let x = 0; x < gridWight; x++) {
            for (let y = 0; y < gridHeigt; y++) {
                let node = document.createElement('div');
                node.className = 'node ' +TileTypes.road;
                node.id = `${x}-${y}`;
                node.style.width = `${tileSize}px`;
                node.style.height = `${tileSize}px`;
                node.style.top = `${y * tileSize + 1}px`;
                node.style.left = `${x * tileSize + 1}px`;
                this.grid.appendChild(node);
            }
        }
    }
}