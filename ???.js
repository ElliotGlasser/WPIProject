const output = document.getElementById('output');
const commandLine = document.getElementById('command-line');

let realisticTextOptions = []; // Array to hold realistic text options

// Initial welcome message
addOutputLine("Why couldn't you just guess the number?");
addOutputLine("Now you're trapped!");
addOutputLine("IT WAS A NUMBERS GAME FOR CHRIST'S SAKE!");
addOutputLine("HOW DO YOU SCREW UP A NUMBERS GAME?!?!?");

// Event listener for command line input
commandLine.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default enter behavior (form submission)

        const command = commandLine.value.trim();
        if (command.toLowerCase() === 'help') {
            addOutputLine("No");
        } else if (command.toLowerCase() === 'exit') {
            addOutputLine("nice try");
        } else if (command.toLowerCase() === 'clear') {
            output.innerHTML = '';
        } else if (command.toLowerCase() === 'sudo exit'){
            addOutputLine("dang it")
            window.location.href = "index.html"
        } 
        else {
            addOutputLine(`Command '${command}' not recognized.`);
        }

        commandLine.value = ''; // Clear command line
    }
});


function addOutputLine(text) {
    const line = document.createElement('div');
    line.textContent = text;
    output.appendChild(line);

    // Scroll to bottom of output
    output.scrollTop = output.scrollHeight;
}
