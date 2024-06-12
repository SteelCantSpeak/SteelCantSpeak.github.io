const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//Initial Values

const baseCanvasSize = 300;

const paddleWidth = 10;
const paddleHeight = 50;
const ballSize = 5;

let player1Y = canvas.height / 2 - paddleHeight / 2;
let player2Y = canvas.height / 2 - paddleHeight / 2;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;

let ballspeed = 4;
let ballSpeedX = ballspeed;
let ballSpeedY = ballspeed;

let playerSpeed = 10;

let player1Speed = playerSpeed + Math.random() * 2;
let player2Speed = playerSpeed + Math.random() * 2;

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
}

function draw() {
    canvas.width = Math.max(100, Math.min(window.innerWidth * 0.8, baseCanvasSize*2));
    canvas.height = canvas.width / 2;
    let ratio = canvas.width / baseCanvasSize;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    drawRect(2, player1Y, paddleWidth * ratio, paddleHeight * ratio, 'white');
    drawRect(canvas.width - (paddleWidth * ratio) -2, player2Y, (paddleWidth*ratio), (paddleHeight*ratio), 'white');

    // Draw ball
    drawBall(ballX, ballY, ballSize*ratio, 'white');

    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Player 1 (bot) movement
    player1Y += (ballY - (player1Y + (paddleHeight * ratio) / 2)-20) * (player1Speed / 100);
    player1Y = Math.min(Math.max(player1Y, 0), canvas.height - (paddleHeight * ratio));

    // Player 2 (bot) movement
    player2Y += (ballY - (player2Y + (paddleHeight * ratio) / 2)-20) * (player2Speed / 100);
    player2Y = Math.min(Math.max(player2Y, 0), canvas.height - (paddleHeight * ratio));

    // Ball collision with walls
    if (ballY <= 0 || ballY >= canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (ballX <= (paddleWidth * ratio) && ballY >= player1Y && ballY <= player1Y + (paddleHeight * ratio)) {
        ballSpeedX = -ballSpeedX;
        player1Speed += 4 + Math.random() * 2;
    }

    if (ballX >= canvas.width - (paddleWidth * ratio) && ballY >= player2Y && ballY <= player2Y + (paddleHeight * ratio)) {
        ballSpeedX = -ballSpeedX;
        player2Speed += 4 + Math.random() * 2;
    }

    // Ball reset when it goes beyond the canvas
    if (ballX < 0 || ballX > canvas.width) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = ballSpeedY = ballspeed;
        player1Speed = playerSpeed + Math.random() * 2;
        player2Speed = playerSpeed + Math.random() * 2;
    }
}

setInterval(draw, 30); // Draw every 30 milliseconds