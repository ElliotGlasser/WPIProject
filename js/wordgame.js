const words=[
"apple",
"crane",
]
let secretWord="";
let tries = 0;
const guessField = document.getElementById('guess-field');
const messageText = document.getElementById('messageText');
const tableBody = document.getElementById('guess-history-body');
const secretDisplay = document.getElementById('display');

function startGame(){
    secretWord = words[Math.floor(Math.random() * words.length)];
    tries = 0;
    guessField.value = "";
    messageText.textContent = "Enter guess";
    tableBody.innerHTML = "";
    consol.log("Secret Word: " + secretWord);
}

