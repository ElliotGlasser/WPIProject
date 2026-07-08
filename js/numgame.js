const numfield = document.getElementById("num-field");
const messageText = document.getElementById("message-text");
const guessCountText = document.getElementById("guess-count-text");
const guessButton = document.getElementById("guess-button");
const resetButton = document.getElementById("reset-button");
const numtitle = document.getElementById("numtitle");
const homeButton = document.getElementById("home-button");
const aboutmeButton = document.getElementById("aboutme-button");
const mytownButton = document.getElementById("mytown-button");
const numgameButton = document.getElementById("numgame-button");
const tagline = document.getElementById("tagline");

let min=1;
let max=100;
let secret;
let guessCount=0;
let warning=0

 const moveguessButton = () => {
            var x = Math.random() * (window.innerWidth - guessButton.offsetWidth);
            var y = Math.random() * (window.innerHeight - guessButton.offsetHeight);

            guessButton.style.position = 'absolute';
            guessButton.style.left = `${x}px`;
            guessButton.style.top = `${y}px`;
}
const movePissedOffGuessButton = () => {
            var x = Math.random() * (window.innerWidth - guessButton.offsetWidth);
            var y = Math.random() * (window.innerHeight - guessButton.offsetHeight);

            guessButton.style.position = 'absolute';
            guessButton.style.left = `${x}px`;
            guessButton.style.top = `${y}px`;
        
}
function makeGuess(){
    const guess = parseInt(numfield.value);
    
    if (isNaN(guess)){
    messageText.textContent = "Please enter a valid number.";
    return;
    }
    
    guessCount++;
    guessCountText.textContent = "Guess Count: " + guessCount
    if (warning ===0){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess < secret) {
            if(guess < min){
                messageText.textContent = "Why would you think negative numbers are allowed? Try again.";
                warning +=1
            }else {
                messageText.textContent = "Too low! Try again.";
            }
        } else if (guess > secret) {
            if (guess > max){
                messageText.textContent = "You can count right? " +guess+ " is bigger than " +max+ " Try again.";
                warning +=1
            }else {
                messageText.textContent = "Too high! Try again.";
            }
        }else {
            messageText.textContent = "Please enter a number between " + min + " and " + max + ".";
        }
    } else if (warning ===1){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
            warning +=1
        }else if (guess <min || guess > max){
            messageText.textContent = "I said between " + min + " and " + max + "! Try again.";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===2){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        }else if (guess <min || guess > max){
            messageText.textContent = "Stop it!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===3){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "I'm serious!!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===4){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "Ahhhhhh";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===5){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "You have been warned!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===6){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "No more warnings!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===7){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "You have been warned enough times!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===8){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "I will not tell you again!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===9){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "You have been warned enough times!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===10){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "Thats it!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }    
    } else if (warning ===11){
        if (guess === secret) {
            messageText.textContent = "Congratulations! You guessed the number!";
        } else if (guess <min || guess > max){
            messageText.textContent = "No more button for you!";
            warning +=1
        }
        else if (guess < secret) {
            messageText.textContent = "Too low! Try again.";
        } else if (guess > secret) {
            messageText.textContent = "Too high! Try again.";
        }
    } else if (warning ===12){
       
        guessButton.addEventListener('click', moveguessButton);
        guessButton.addEventListener('mouseenter', moveguessButton);
    } else{
        return;
    }
}
function hoverButton(){
    if (warning === 13) {
        guessButton.removeEventListener('click', moveguessButton);
        guessButton.removeEventListener('mouseenter', moveguessButton);
         

        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        warning +=1

    } else if (warning === 14) {
        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        warning +=1
    } else if (warning === 15) {
        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        homeButton.textContent = "I";
        homeButton.style.backgroundColor = "red";
        warning +=1
    } else if (warning === 16) {
        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        aboutmeButton.textContent = "am";
        aboutmeButton.style.backgroundColor = "red";
        warning +=1

    } else if (warning === 17) {
        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        mytownButton.textContent = "a";
        mytownButton.style.backgroundColor = "red";
        warning +=1
    } else if (warning === 18) {
        guessButton.addEventListener('click', movePissedOffGuessButton);
        guessButton.addEventListener('mouseenter', movePissedOffGuessButton);
        numgameButton.textContent = "god";
        numgameButton.style.backgroundColor = "red";
        close();

    } else{
        return;
    }
}
function resetGame(){

        if (warning >= 12) {
            resetButton.style.display = "none";
            numtitle.textContent = "You think you can stop me?";
            numtitle.style.backgroundColor = "red";
            warning +=1
            

        }else{
            secret = Math.floor(Math.random() * (max - min + 1)) + min;
            guessCount=0;
            messageText.textContent = "Enter your first number:";
            guessCountText.textContent = "Guess Count: 0 ";
            console.log("Secret number is: " + secret);        
        } 
}

console.log("Secret: " + secret + ", Guess Count: " + guessCount + ", Warning: " + warning);


resetGame();
