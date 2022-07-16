export default class TileMap{
    constructor(tileSize){
        this.tileSize = tileSize;

        this.wall = new Image()
        this.wall.src = "../images/wall.png"
    }

    map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1],
        [1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
        [1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1],
        [1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1],
        [1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1],
        [1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1],
        [1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1],
        [1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        
    ]

    drawWall(ctx, file, column, row, size){
        ctx.drawImage(file, column*this.tileSize, row*this.tileSize, size, size);
    }

    drawTiles(ctx){
        for (let row = 0; row<this.map.length; row++){
            for(let column =0; column < this.map[row].length; column++){
                let tile = this.map[row][column]
                if(tile === 1){
                    this.drawWall(ctx, this.wall, column, row, this.tileSize);
                }
                else if(tile === 0){
                    this.drawWall(ctx, this.floor, column, row, this.tileSize);
                }
            }
        }
    }

    setCanvasSize(canvas){
        canvas.width = this.map[0].length * 32;
        canvas.height = this.map.length * 32;
    }
}