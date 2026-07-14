class PongGame{
    constructor(){
        this.canvas = document.getElementsById("gameboard");
        this.ctx = this.canvas.getContext("2d");
        this.scoreboard = document.getElementById("scoreboard")
        this.resetButton = document.getElementById("reset");
        this.boardWidth = 500;
        this.boardHeight = 500;
        this.paddleWidth = 25;
        this.paddleHeight = 100;
        this.paddleSpeed = 5;
        this.ballRadius = 12.5;
        this.ballSpeed = 1;
        this.timerId = null

        this.canvas.width = this.boardWidth;
        this.canvas.height = this.boardHeight;
        this.createObjects();
        this.controls = new KeyBoardControls(this.leftPaddle, this.rightPaddle, this.paddleSpeed);
        this.resetButton.addEventListener("click", () => {
            this.resetGame();
        });
        // this.updateScore();
        this.draw();
        this.start();
        // this.start();
    }
    createObjects(){
            this.leftPaddle = new Paddle(
                0,
                this.boardHeight / 2 - this.paddleHeight / 2,
                this.paddleWidth,
                this.paddleHeight,
                "blue",
                this.boardHeight
            );
            this.rightPaddle = new Paddle(
                this.boardWidth - this.paddleWidth,
                this.boardHeight / 2 - this.paddleHeight / 2,
                this.paddleWidth,
                this.paddleHeight,
                "red",
                this.boardHeight
            );
            this.resetBall();

        };

     
   
    
    resetBall(){
        const direction = Math.random() < 0.5 ? -1 : 1;
        const verticleDirection = Math.random() < 0.5 ? -1 : 1;
        this.ball = new Ball(
            this.boardWidth / 2,
            this.boardHeight / 2,
            this.ballSpeed * direction,
            this.ballSpeed * verticleDirection,
            this.ballRadius,
            "hotpink"
        );
    }
    resetGame(){
        this.stop();
        this.scoreboard.reset();
    }
    clearBoard(){
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.boardWidth, this.boardHeight);
    }

    draw(){
        this.clearBoard();
        this.ball.draw(this.ctx);
        this.leftPaddle.draw(this.ctx);
        this.rightPaddle.draw(this.ctx);

    }

}

window.addEventListener("DOMContentLoaded", () => {
    new PongGame();
});