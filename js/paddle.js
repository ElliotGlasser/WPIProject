class Paddle{
    constructor(x, y, width, height, color, boardHeight){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.boardHeight = boardHeight;
        this.vy = 0;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    move(){
        const newY = this.y + this.vy;
        if (newY<0) {
            this.y = 0;
            returnl
        }
        if (newY + this.height > this.boardHeight) {
            this.y = this.boardHeight - this.height;
            return;
        }
        this.y = newY;
    }
    moveUp(speed){
        this.vy = -speed;

    }
    moveDown(speed){
        this.vy = speed;
    }
    stop(){
        this.vy = 0;
    }
    reset(y){
        this.y = y;
        this.vy = 0;
    }
}