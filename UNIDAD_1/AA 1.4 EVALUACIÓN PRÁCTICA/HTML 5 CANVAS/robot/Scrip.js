let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// fondo
ctx.fillStyle = "rgb(25, 35, 45)";
ctx.fillRect(0, 0, 400, 400);
// antena
ctx.strokeStyle = "rgb(46, 204, 113)";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(200, 110);
ctx.lineTo(200, 75);
ctx.lineTo(215, 65);
ctx.stroke();

// punta antena
ctx.fillStyle = "rgb(46, 204, 113)";

ctx.beginPath();
ctx.arc(215, 65, 6, 0, Math.PI * 2);
ctx.fill();
// cabeza

ctx.fillStyle = "rgb(46, 204, 113)";

ctx.beginPath();
ctx.roundRect(140, 100, 120, 80, 15);
ctx.fill();

//pantalla
ctx.fillStyle = "rgb(15, 30, 20)";

ctx.beginPath();
ctx.roundRect(155, 117.5, 90, 35, 8);
ctx.fill();

// ojos
ctx.fillStyle = "rgb(235, 247, 240)";

ctx.beginPath();
ctx.arc(180, 135, 8, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(220, 135, 8, 0, Math.PI * 2);
ctx.fill();
//cuello

ctx.fillStyle = "rgb(15, 113, 15)";

ctx.fillRect(185, 180, 30, 10);


// CUERPO


ctx.fillStyle = "rgb(30, 132, 73)";

ctx.beginPath();
ctx.roundRect(130, 190, 140, 160, 20);
ctx.fill();


// panel del cuerpo

ctx.fillStyle = "rgb(200, 230, 201)";

ctx.beginPath();
ctx.roundRect(155, 225, 90, 80, 5);
ctx.fill();

//centro del cuerpo
ctx.fillStyle = "rgb(46, 204, 113)";

ctx.beginPath();
ctx.arc(200, 265, 17.5, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "rgb(39, 174, 96)";

// Mano izquierda
ctx.beginPath();
ctx.moveTo(95, 290);
ctx.lineTo(80, 315);
ctx.lineTo(110, 315);
ctx.closePath();
ctx.fill();

// Mano derecha
ctx.beginPath();
ctx.moveTo(305, 290);
ctx.lineTo(290, 315);
ctx.lineTo(320, 315);
ctx.closePath();
ctx.fill()

// brazo
ctx.fillStyle = "rgb(39, 174, 96)";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(270, 250);
ctx.lineTo(306,290);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 250);
ctx.lineTo(95,290);
ctx.stroke();