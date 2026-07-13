class Ball{
    constructor(x, y, vx, vy, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();

    }

    setVelocity(vx, vy){
        this.vx = vx;
        this.vy = vy;
    }

    reset(x, y){
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
    }
        move(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
    bounceOffTopAndBottom(boardHeight){
        if(this.y - this.radius<0){
            this.vy = Math.abs(this.vy);
        }
        if(this.y + this.radius>boardHeight){
            this.vy = -Math.abs(this.vy);
        }
    }

    bounceOffLeftPaddle(paddle,paddleForce){
        const ballLeft = this.x - this.radius;
        const ballTop = this.y - this.radius;
        const ballBottom = this.y + this.radius;
        const paddleRight = paddle.x + paddle.width;
        const paddleLeft = paddle.x;
        const paddleBottom = paddle.y + paddle.height;

        if (ballLeft > paddleRight) return false;
        if (ballTop > paddleBottom) return false;
        if (ballBottom < paddleTop) return false;
        if (this.vs < 0) {
            this.vs = Math.abs(this.vs);
        }
        return true;
    }
}