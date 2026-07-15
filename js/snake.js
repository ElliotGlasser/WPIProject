var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

let score = 0;
var grid = 16;
var count = 0;

var snake = {
  x: 160,
  y: 160,

  dx: grid,
  dy: 0,

  cells: [],
  maxCells: 4
};

var apple = {
  x: 320,
  y: 320
};

let pendingDx = snake.dx;
let pendingDy = snake.dy;
let directionSetThisFrame = false;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }
  count = 0;

  // allow only one direction application per frame (and one direction change per frame)
  directionSetThisFrame = false;

  context.clearRect(0, 0, canvas.width, canvas.height);

  snake.dx = pendingDx;
  snake.dy = pendingDy;

  snake.x += snake.dx;
  snake.y += snake.dy;

  // snake portal
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // snake portal 2
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // snake tracker
  snake.cells.unshift({ x: snake.x, y: snake.y });

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // draw snake
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      score += 1;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // collision check with all cells after this one
    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        alert("Score: " + score);
        context.clearRect(0, 0, canvas.width, canvas.height);

        score = 0;

        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        pendingDx = snake.dx;
        pendingDy = snake.dy;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;

        return;
      }
    }
  });
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent multiple direction changes being accepted within the same frame
  if (directionSetThisFrame) return;

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    pendingDx = -grid;
    pendingDy = 0;
    directionSetThisFrame = true;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    pendingDx = 0;
    pendingDy = -grid;
    directionSetThisFrame = true;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    pendingDx = grid;
    pendingDy = 0;
    directionSetThisFrame = true;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    pendingDx = 0;
    pendingDy = grid;
    directionSetThisFrame = true;
  }
});

window.addEventListener("keydown", function(e) {
  if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
    e.preventDefault();
  }
}, false);

// start the game
requestAnimationFrame(loop);
