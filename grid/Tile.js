let rootTile = null;
let targetTile = null;

class Tile {
    constructor(node) {
        this.node = node;
        this.firstType = node.classList.item(1);
        this.pos = getVectorFromId(node.id);
    }

    changeType = (type) => {
        if (type === TileTypes.root) {
            if (rootTile != null) {
                rootTile.changeType(TileTypes.road);
            }
            rootTile = this;
        }
        if (type === TileTypes.target) {
            if (targetTile !== null) {
                targetTile.changeType(TileTypes.road);
            }
            targetTile = this;
        }
        this.node.className = 'node ' + type;
    }
}