const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext("2d")

canvas.style.backgroundColor = '#fff'
canvas.style.border = '2px solid #000'

let snake = [ {x: 150, y: 150}, {x: 140, y: 150}, {x: 130, y: 150}, {x: 120, y: 150}, {x: 110, y: 150}]

main()

function main(){
    drawSnake()
}

function drawSnakePart(snakePart){
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen'
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake(){
    snake.forEach(drawSnakePart)
}

