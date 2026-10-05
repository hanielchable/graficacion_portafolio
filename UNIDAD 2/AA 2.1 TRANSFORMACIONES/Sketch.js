let colorCuerpo = 15;
let colorPanza = 245;

function setup() {
  createCanvas(1350, 520);
  angleMode(DEGREES);
}

function draw() {
  background(232, 232, 232);
  
  // ETAPA 1 - BEBÉ
  push();
  translate(170, 300);
  rotate(-6);
  scale(0.45);

  colorCuerpo = 120;
  colorPanza = 250;

  dibujarPinguino();
  dibujarCascaron();

  pop();

  // ETAPA 2 - NIÑO
  push();
  translate(350, 300);
  rotate(4);
  scale(0.60);

  colorCuerpo = 90;
  colorPanza = 248;

  dibujarPinguino();
  dibujarBalon();

  pop();

  // ETAPA 3 - JUVENIL
  push();
  translate(620, 300);
  rotate(-3);
  scale(0.75);

  colorCuerpo = 55;
  colorPanza = 245;

  dibujarPinguino();
  dibujarLibro();

  pop();

  // ETAPA 4 - ADULTO
  push();
  translate(900, 300);
  rotate(3);
  scale(0.90);

  colorCuerpo = 15;
  colorPanza = 245;

  dibujarPinguino();
  dibujarCorbata();

  pop();

  // ETAPA 5 - ANCIANO
  push();
  translate(1180, 300);
  rotate(-5);
  scale(0.95);

  colorCuerpo = 65;
  colorPanza = 225;

  dibujarPinguino();
  dibujarBaston();

  pop();
}

// FUNCIÓN PRINCIPAL DEL PINGÜINO
function dibujarPinguino() {

  stroke(20);
  strokeWeight(4);

  // ALAS
  fill(colorCuerpo);

  push();
  translate(-88, 40);
  rotate(-320);
  ellipse(0, 0, 35, 125);
  pop();

  push();
  translate(88, 40);
  rotate(320);
  ellipse(0, 0, 35, 125);
  pop();

  // PATITAS
  noStroke();
  fill(235, 133, 50);

  push();
  translate(-38, 150);
  rotate(120);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(-25, 150);
  rotate(110);
  ellipse(0, 0, 32, 20);
  pop();

  push();
  translate(-45, 145);
  rotate(120);
  ellipse(0, 0, 32, 20);
  pop();

  push();
  translate(38, 150);
  rotate(60);
  ellipse(0, 0, 35, 20);
  pop();

  push();
  translate(30, 150);
  rotate(80);
  ellipse(0, 0, 32, 20);
  pop();

  push();
  translate(46, 145);
  rotate(60);
  ellipse(0, 0, 32, 20);
  pop();

  // CUERPO
  fill(colorCuerpo);
  stroke(20);
  strokeWeight(4);
  ellipse(0, 55, 160, 180);

  // CABEZA
  fill(colorCuerpo);
  rect(-70, -105, 140, 120, 65);

  // CARA BLANCA
  push();
  noStroke();
  fill(colorPanza);
  rect(-52, -50, 105, 60, 100);
  pop();

  push();
  noStroke();
  fill(colorPanza);
  translate(-30, -40);
  rotate(185);
  ellipse(0, 0, 50, 90);
  pop();

  push();
  noStroke();
  fill(colorPanza);
  translate(30, -40);
  rotate(80);
  ellipse(0, 0, 90, 50);
  pop();

  // OJOS
  fill(15);
  stroke(15);
  strokeWeight(2);
  ellipse(-23, -48, 23, 31);
  ellipse(23, -48, 23, 31);

  // BRILLOS
  noStroke();
  fill(255);
  ellipse(-28, -54, 7, 9);
  ellipse(18, -54, 7, 9);

  ellipse(-18, -42, 4, 4);
  ellipse(28, -42, 4, 4);

  // PANCITA
  noStroke();
  fill(colorPanza);
  ellipse(0, 70, 130, 145);

  // PICO
  fill(235, 133, 50);
  stroke(235, 133, 50);
  strokeWeight(2);

  triangle(-20, -15, 20, -15, 0, 1);
  triangle(-20, -15, 20, -15, 0, -31);
}

// CASCARÓN DEL BEBÉ
function dibujarCascaron() {
  fill(250);
  stroke(180);
  strokeWeight(2);

  ellipse(-250, 30, 180, 228);
  noStroke();
  fill(232, 232, 232);
  rect(-350, -100, 200, 100)
  stroke(180);
  fill(250);
  triangle(-338, -2, -308, -34, -278, -2);
  triangle(-278, -2, -250, -34, -223, -2);
  triangle(-223, -2, -193, -34, -163, -2);
  noStroke();
  rect(-338, -4, 175, 17)
}

// BALÓN
function dibujarBalon() {
  push();
  translate(148, 120);

  fill(245, 150, 55);
  stroke(180, 90, 25);
  strokeWeight(2);
  ellipse(0, 0, 64, 64);

  line(-32, 0, 32, 0);
  line(0, -32, 0, 32);

  line(-21, -21, 21, 21);
  line(-21, 21, 21, -21);


  pop();
}


// CUADERNO
function dibujarLibro() {
  push();
  translate(108, 70);
  rotate(15);

  fill(80, 140, 220);
  stroke(40, 80, 150);
  strokeWeight(2);
  rect(0, 0, 44, 56, 4);

  stroke(255);
  line(6, 10, 38, 10);
  line(6, 18, 38, 18);
  line(6, 26, 38, 26);

  pop();
}

// CORBATA DEL ADULTO
function dibujarCorbata() {
  fill(200, 35, 45);
  stroke(140, 20, 30);
  strokeWeight(2);

  triangle(-12, 23, 12, 23, 0, 10);
  rect(-12, 23, 24, 34)
  triangle(-12, 57, 12, 57, 0, 75);
  ellipse(0, 10, 16, 12);
}

// BASTÓN DEL ANCIANO
function dibujarBaston() {
  stroke(140, 95, 45);
  strokeWeight(5);

  line(128, 45, 128, 145);
  line(128, 45, 114, 30);

  noStroke();
  fill(140, 95, 45);
  ellipse(112, 28, 10, 10);
}