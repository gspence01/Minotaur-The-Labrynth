import TileMap from './TileMap.js'

const tileSize = 32;
const canvas = document.getElementById('gameCanvas');
const contxt = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);

function gameLoop(){
    tileMap.drawTiles(contxt);
}

tileMap.setCanvasSize(canvas);

setInterval(gameLoop, 1000);