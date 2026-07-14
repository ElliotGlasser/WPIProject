class keyboardImp{
    constructor(leftPaddle, rightPadle, speed){
        this.leftPaddle = leftPaddle;
        this.rightPadle = rightPadle;
        this.speed = speed; 
        this.UP_ARROW = "ArrowUp";
        this.DOWN_ARROW = "ArrowDown";
        this.W_KEY = "W";
        this.S_KEY = "S";
        window.addEventListener("keydown",(event) => this.keyDown(event));
        window.addEventListener("keyup",(event) => this.keyUp(event));


    }
    keyDown(event){
        switch(event.key){
            case this.UP_Arrow:
                this.leftPaddle.moveUp(this.speed);
                break;
            case this.DOWN_ARROW:
                this.leftPaddle.moveDown(this.speed);
                break;
            case this.W_KEY:
                case this.W_KEY.toUpperCase():
                this.rightPadle.moveUp(this.speed);
                break;
            case this.S_KEY:
                case this.S_KEY.toUpperCase():
                this.rightPadle.moveDown(this.speed);
                break;
            default:
                break;
        }
    }
    keyUp(event){
        switch(event.key){
            case this.UP_Arrow:
                this.leftPaddle.stop();
                break;
            case this.DOWN_ARROW:
                this.leftPaddle.stop();
                break;
            case this.W_KEY:
                case this.W_KEY.toUpperCase():
                this.rightPadle.stop();
                break;
            case this.S_KEY:
                case this.S_KEY.toUpperCase():
                this.rightPadle.stop();
                break;
            default:
                break;
        }
    }
}