class AStar {

    run = (targetPos, rootPos) => {
        let openList = [];
        let closedList = [];
        let nodeGrid = [];

        for (let x = 0; x < gridWight; x++) {
            for (let y = 0; y < gridHeigt; y++) {
                nodeGrid.push(new Node(null, null, new Vector(x, y)));
            }
        }
        let target = nodeGrid.find(node => node.pos.equals(targetPos));
        let root = nodeGrid.find(node => node.pos.equals(rootPos));
        //console.log(target);
        //console.log(root);

        root.target = target;
        openList.push(root);
        let running = true;
        while (running) {
            //console.log(openList)
            //console.log(closedList);
            let bestNode;
            if (openList.length !== 0) {
                bestNode = openList[0];
            } else {
                return false;
            }

            let surroundings = this.getSurroundings(nodeGrid, bestNode);
            for (let x in surroundings) {
                if (surroundings[x] !== undefined) {
                    if ((!openList.includes(surroundings[x]) && !closedList.includes(surroundings[x]))) {
                        if (!openList.includes(surroundings[x]) || !closedList.includes(surroundings[x])) {
                            let tile = new Tile(grid.getNodeFromVectorFromGrid(surroundings[x].pos));
                            if (tile.firstType !== TileTypes.wall) {
                                surroundings[x].parent = bestNode;
                                surroundings[x].target = target;
                                surroundings[x].setFCost();
                                if (surroundings[x] !== target) {
                                    tile.changeType(TileTypes.found);
                                }
                                openList.push(surroundings[x]);
                            }
                        }
                    }
                }
            }
            closedList.push(bestNode)
            openList = removeFromArray(openList, bestNode);
            openList.sort(function (a, b) {
                return a.f - b.f
            });

            if (closedList.find(node => node.compare(target)) === target) {
                running = false;
            }
        }

        let path = [];
        let x = target.parent;
        while (x !== root) {
            let tile = new Tile(grid.getNodeFromVectorFromGrid(x.pos));
            path.push(tile);
            //tile.changeType(TileTypes.path);
            x = x.parent;
        }
        return path;
    }

    getSurroundings = (grid, node) => {
        let result = [];
        let x = node.pos.x;
        let y = node.pos.y;
        result.push(grid.find(node => node.pos.x === x + 1 && node.pos.y === y));
        result.push(grid.find(node => node.pos.x === x && node.pos.y === y + 1));
        result.push(grid.find(node => node.pos.x === x - 1 && node.pos.y === y));
        result.push(grid.find(node => node.pos.x === x && node.pos.y === y - 1));
        return result;
    }
}

let aStar = new AStar();

class Node {
    constructor(parent, target, pos) {
        this.parent = parent;
        this.target = target;
        this.pos = pos;
        this.g = 10;
        this.f = 0;
        this.h = 0;
    }

    setFCost = () => {
        if (this.target != null) {
            this.h = (10 * (Math.abs(this.pos.x - this.target.pos.x) + Math.abs(this.pos.y - this.target.pos.y)));
        } else {
            this.h = 0;
        }
        this.f = this.h + this.g;
    }

    compare = (node) => {
        if (this.pos.x === node.pos.x && this.pos.y === node.pos.y) {
            return true;
        } else {
            return false;
        }
    }
}