let canvas = document.getElementById("pacmanCanvas");
let ctx = canvas.getContext("2d");


function drawPacman() {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(100, 100);
    ctx.lineWidth = '5'
    ctx.strokeStyle = 'black'
    ctx.fillStyle = "yellow";
    ctx.stroke()
    ctx.fill();
    ctx.closePath();

    // глаза
    ctx.beginPath();
    ctx.arc(95, 75, 5, 0, 2 * Math.PI);
    // ctx.arc(115, 80, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

drawPacman();