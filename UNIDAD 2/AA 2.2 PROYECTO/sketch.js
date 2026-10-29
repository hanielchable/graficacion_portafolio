let velasEncendidas = true;

// Imágenes del proyecto
let fotoEinstein;
let fotoCurie;
let isc;
let tecnm;
let fcp;

// Carga las imágenes antes de iniciar
function preload() {
  fotoEinstein = loadImage("assets/fotoEinstein.png");''
  fotoCurie = loadImage("assets/fotoCurie.png");
  isc = loadImage("assets/isc.png");
  tecnm = loadImage("assets/tecnm.png");
  fcp = loadImage("assets/fcp.png");
}

// Configura el lienzo y los ángulos
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

// Dibuja y anima toda la escena
function draw() {
  background(22, 16, 36);

  // Luz que sigue al mouse
  noStroke();
  fill(255, 210, 90, 35);
  ellipse(mouseX, mouseY, 90, 90);

  fill(255, 220, 120, 20);
  ellipse(mouseX, mouseY, 140, 140);

  push();

  // Centra el escenario
  translate(width / 2, height / 2);

  // Adapta la escala a la ventana
  let escala = width / 1000;

  if (height / 800 < escala) {
    escala = height / 800;
  }

  scale(escala);

  // Fondo
  dibujarFondo();

  // Papel picado
  dibujarEstructuraPapel();
  dibujarPapelPicado();

  // Altar y ofrendas
  dibujarCruz();
  dibujarAltar();
  dibujarFoto();
  dibujarOfrendas();

  // Identidad institucional
  dibujarLogos();

  // Elementos de Sistemas
  dibujarElementosSistemas();

  // Camino y decoraciones
  dibujarCamino();
  dibujarVelasCamino();
  dibujarFloresCamino();
  dibujarCopasIncienso();
  dibujarFloresLaterales();
  dibujarHuellasDispersas();

  // Mascota animada
  dibujarLeoncillo(365, 230, 0.85);

  pop();
}

// Dibuja el resplandor detrás del altar
function dibujarFondo() {
  noStroke();

  fill(55, 30, 70, 90);
  ellipse(0, 10, 420, 290);

  fill(80, 45, 95, 35);
  ellipse(0, 10, 580, 380);
}

// Dibuja los postes, barra y cuerdas
function dibujarEstructuraPapel() {
  fill(101, 62, 57);
  stroke(70, 40, 35);
  strokeWeight(1);

  // Postes laterales
  rect(-400, -150, 10, 450);
  rect(400, -150, 10, 450);

  // Barra superior
  rect(0, -370, 810, 10);

  // Cuerdas curvas
  noFill();
  stroke(200, 180, 150);
  strokeWeight(2);

  bezier(-395, -280, -270, -260, -170, -300, -50, -365);
  bezier(50, -365, 170, -300, 270, -260, 395, -280);
}

// Distribuye el papel picado
function dibujarPapelPicado() {
  // Lado izquierdo
  dibujarBanderin(-345, -288, -10, 220, 60, 80);
  dibujarBanderin(-295, -282, -6, 240, 170, 60);
  dibujarBanderin(-245, -284, 0, 70, 140, 200);
  dibujarBanderin(-195, -295, 6, 240, 140, 50);
  dibujarBanderin(-145, -320, 10, 80, 170, 90);
  dibujarBanderin(-95, -345, 14, 170, 100, 190);

  // Lado derecho
  dibujarBanderin(95, -345, -14, 230, 160, 60);
  dibujarBanderin(145, -320, -10, 80, 150, 200);
  dibujarBanderin(195, -295, -6, 230, 90, 90);
  dibujarBanderin(245, -284, 0, 100, 180, 100);
  dibujarBanderin(295, -282, 6, 240, 180, 70);
  dibujarBanderin(345, -288, 10, 70, 130, 190);
}

// Dibuja y mueve un banderín
function dibujarBanderin(x, y, angulo, r, g, b) {
  push();
  translate(x, y);

  // Movimiento de balanceo
  rotate(angulo + 3 * sin(frameCount * 2 + x));
  translate(0, 26);

  // Cuerpo del papel
  noStroke();
  fill(r, g, b);
  rect(0, 0, 38, 52);

  // Recorte inferior
  fill(22, 16, 36);
  triangle(-20, 28, 20, 28, 0, 15);

  // Centro decorativo
  fill(101, 67, 33);
  ellipse(0, -3, 8, 8);

  // Figuras pequeñas
  fill(255, 240, 220);
  stroke(101, 67, 33);
  strokeWeight(0.4);

  ellipse(0, -8.5, 5, 5);
  ellipse(0, 2.5, 5, 5);
  ellipse(-5.5, -3, 5, 5);
  ellipse(5.5, -3, 5, 5);

  ellipse(4, -7, 5, 5);
  ellipse(4, 1, 5, 5);
  ellipse(-4, 1, 5, 5);
  ellipse(-4, -7, 5, 5);

  pop();
}

// Dibuja la cruz de madera café
function dibujarCruz() {
  noStroke();
  fill(130, 90, 55);

  rect(0, -200, 16, 150);
  rect(0, -240, 78, 12);
}

// Dibuja los tres niveles del altar
function dibujarAltar() {
  dibujarNivel(0, -114, 290, 72);
  dibujarNivel(0, -38, 420, 82);
  dibujarNivel(0, 50, 560, 95);
}

// Dibuja un nivel con mantel decorado
function dibujarNivel(x, y, w, h) {
  push();
  translate(x, y);

  // Mantel blanco
  fill(247, 238, 219);
  stroke(75, 43, 38);
  strokeWeight(1);
  rect(0, 0, w, h);

  // Franja inferior
  noStroke();
  fill(182, 109, 54);
  rect(0, h / 2 - 12, w, 24);

  // Detalles del mantel
  fill(230, 185, 90);
  ellipse(-40, h / 2 - 2, 8, 8);
  ellipse(0, h / 2 - 2, 10, 10);
  ellipse(40, h / 2 - 2, 8, 8);

  pop();
}

// Dibuja los marcos y las fotografías
function dibujarFoto() {
  push();
  translate(0, -186);

  // Marcos de madera
  fill(120, 78, 45);
  stroke(80, 50, 35);
  strokeWeight(2);
  rect(-80, 0, 58, 72);
  rect(80, 0, 58, 72);

  // Interior de los marcos
  noStroke();
  fill(248, 240, 223);
  rect(-80, 0, 44, 58);
  rect(80, 0, 44, 58);

  // Fotografías
  image(fotoEinstein, -80, 0, 40, 54);
  image(fotoCurie, 80, 0, 40, 54);

  pop();
}

// Coloca las ofrendas en cada nivel
function dibujarOfrendas() {
  // Nivel superior
  dibujarAgua(-30, -166);
  dibujarSal(30, -154);

  // Nivel medio
  dibujarPib(0, -83);
  dibujarJicara(-85, -83);
  dibujarJicara(85, -83);
  dibujarVela(-175, -96, 0.9);
  dibujarVela(175, -96, 0.9);

  // Nivel inferior
  dibujarFrutas(-155, -5);
  dibujarFrutas(155, -5);
  dibujarDulces(0, -4);
  dibujarVela(-240, -15, 1);
  dibujarVela(240, -15, 1);
}

// Dibuja un vaso con agua
function dibujarAgua(x, y) {
  push();
  translate(x, y);

  // Vaso transparente
  noStroke();
  fill(190, 225, 245, 120);
  rect(0, 0, 20, 30);

  // Agua
  fill(90, 175, 230, 170);
  rect(0, 5, 17, 19);

  // Borde del vaso
  noFill();
  stroke(220, 240, 255);
  strokeWeight(2);
  ellipse(0, -15, 20, 5);

  pop();
}

// Dibuja un plato con sal
function dibujarSal(x, y) {
  push();
  translate(x, y);

  noStroke();

  // Plato
  fill(205, 165, 110);
  ellipse(0, 0, 35, 12);

  // Sal
  fill(250, 248, 240);
  ellipse(0, -3, 24, 9);
  ellipse(0, -6, 13, 7);

  pop();
}

// Dibuja el pib tradicional
function dibujarPib(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Plato
  fill(205, 165, 110);
  ellipse(0, 0, 78, 18);

  // Hojas
  fill(65, 115, 55);
  ellipse(-20, -5, 40, 16);
  ellipse(20, -5, 40, 16);

  // Cuerpo del pib
  fill(150, 85, 35);
  ellipse(0, -10, 60, 27);

  // Superficie dorada
  fill(195, 125, 48);
  ellipse(0, -15, 50, 15);

  // Detalles
  fill(115, 65, 30);
  ellipse(-12, -17, 7, 4);
  ellipse(9, -13, 10, 4);

  pop();
}

// Dibuja una jícara con bebida
function dibujarJicara(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Recipiente
  fill(130, 80, 40);
  ellipse(0, 0, 42, 20);

  // Bebida
  fill(75, 45, 25);
  ellipse(0, -5, 34, 11);

  // Reflejo
  fill(165, 110, 65);
  ellipse(-9, -7, 9, 3);

  pop();
}

// Dibuja un plato de frutas
function dibujarFrutas(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Plato
  fill(185, 140, 85);
  ellipse(0, 0, 100, 18);

  // Frutas
  fill(245, 140, 25);
  ellipse(-27, -15, 27, 27);

  fill(255, 175, 35);
  ellipse(0, -17, 30, 30);

  fill(230, 115, 25);
  ellipse(27, -13, 25, 25);

  // Hojas
  fill(60, 125, 55);
  ellipse(-23, -29, 13, 6);
  ellipse(4, -32, 14, 6);
  ellipse(30, -26, 12, 6);

  pop();
}

// Dibuja los dulces regionales
function dibujarDulces(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Bandeja
  fill(170, 125, 75);
  ellipse(0, 0, 105, 20);

  // Dulces
  fill(190, 110, 55);
  rect(-28, -10, 20, 15);

  fill(225, 165, 85);
  rect(0, -12, 20, 18);

  fill(150, 85, 45);
  rect(28, -10, 20, 15);

  // Decoración
  fill(245, 200, 125);
  ellipse(-28, -17, 12, 4);
  ellipse(0, -21, 12, 4);
  ellipse(28, -17, 12, 4);

  pop();
}

// Coloca los tres logos institucionales
function dibujarLogos() {
  dibujarLogoColgante(tecnm, -320, -205, 78, 78, 0, true);
  dibujarLogoColgante(isc, 320, -205, 78, 78, 90, true);
  dibujarLogoColgante(fcp, -400, 200, 82, 62, 180, false);
}

// Dibuja un logo colgante animado

function dibujarLogoColgante(img, x, y, w, h, fase, hilo) {
  push();

  // Movimiento vertical del logo
  translate(x, y + 4 * sin(frameCount * 2 + fase));

  // Dibuja el hilo solamente cuando se solicita
  if (hilo) {
    stroke(230, 215, 180);
    strokeWeight(2);
    line(0, -72, 0, -8);
  }

  // Fondo del logo
  noStroke();
  fill(248, 240, 223, 230);
  rect(0, 30, w + 18, h + 18);

  // Marco
  noFill();
  stroke(120, 78, 45);
  strokeWeight(2);
  rect(0, 30, w + 18, h + 18);

  // Imagen
  image(img, 0, 30, w, h);

  pop();
}


// Distribuye los elementos de Sistemas
function dibujarElementosSistemas() {
  dibujarMonitorCodigo(0, 40);
  dibujarServidor(-315, 120, 0.95);
  dibujarServidor(315, 120, 0.95);
  dibujarMicrochip(-95, 40, 0.9);
  dibujarMicrochip(95, 40, 0.9);
}

// Dibuja un monitor con líneas de código
function dibujarMonitorCodigo(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Monitor
  fill(45, 55, 70);
  rect(0, 0, 80, 44);

  // Pantalla
  fill(12, 26, 38);
  rect(0, 0, 62, 28);

  // Código
  stroke(80, 230, 150);
  strokeWeight(2);
  line(-18, -7, 2, -7);
  line(-18, 0, 14, 0);
  line(-18, 7, 6, 7);

  // Base
  stroke(150, 160, 170);
  strokeWeight(4);
  line(0, 22, 0, 30);
  line(-12, 30, 12, 30);

  pop();
}

// Dibuja un servidor
function dibujarServidor(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();

  // Gabinete
  fill(60, 68, 82);
  rect(0, 0, 46, 95);

  // Compartimentos
  fill(35, 42, 52);
  rect(0, -18, 34, 18);
  rect(0, 8, 34, 18);
  rect(0, 34, 34, 18);

  // Luces indicadoras
  fill(70, 220, 120);
  ellipse(12, -18, 4, 4);
  ellipse(12, 8, 4, 4);
  ellipse(12, 34, 4, 4);

  // Ranuras
  stroke(120, 130, 140);
  strokeWeight(2);
  line(-10, -18, 4, -18);
  line(-10, 8, 4, 8);
  line(-10, 34, 4, 34);

  pop();
}

// Dibuja un microchip
function dibujarMicrochip(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Placa
  noStroke();
  fill(50, 115, 85);
  rect(0, 0, 28, 28);

  // Circuito central
  fill(25, 55, 45);
  rect(0, 0, 16, 16);

  // Conexiones
  stroke(215, 180, 80);
  strokeWeight(2);

  line(-18, -10, -14, -10);
  line(-18, -3, -14, -3);
  line(-18, 4, -14, 4);
  line(-18, 11, -14, 11);

  line(18, -10, 14, -10);
  line(18, -3, 14, -3);
  line(18, 4, 14, 4);
  line(18, 11, 14, 11);

  line(-10, -18, -10, -14);
  line(-3, -18, -3, -14);
  line(4, -18, 4, -14);
  line(11, -18, 11, -14);

  line(-10, 18, -10, 14);
  line(-3, 18, -3, 14);
  line(4, 18, 4, 14);
  line(11, 18, 11, 14);

  pop();
}

// Distribuye las piedras del camino
function dibujarCamino() {
  dibujarPiedra(-110, 265, 78, 34);
  dibujarPiedra(110, 265, 78, 34);

  dibujarPiedra(-100, 233, 66, 28);
  dibujarPiedra(100, 233, 66, 28);

  dibujarPiedra(-90, 203, 66, 28);
  dibujarPiedra(90, 203, 66, 28);

  dibujarPiedra(-80, 169, 58, 24);
  dibujarPiedra(80, 169, 58, 24);

  dibujarPiedra(-70, 140, 54, 23);
  dibujarPiedra(70, 140, 54, 23);

  dibujarPiedra(-60, 112, 48, 20);
  dibujarPiedra(60, 112, 48, 20);
}

// Dibuja una piedra con iluminación
function dibujarPiedra(x, y, w, h) {
  noStroke();

  // Piedra
  fill(145, 145, 145);
  ellipse(x, y, w, h);

  // Reflejo
  fill(180, 180, 180);
  ellipse(x - 10, y - 3, w * 0.35, h * 0.35);
}

// Distribuye las velas del camino
function dibujarVelasCamino() {
  dibujarVela(-155, 230, 1);
  dibujarVela(155, 230, 1);

  dibujarVela(-135, 190, 0.9);
  dibujarVela(135, 190, 0.9);

  dibujarVela(-115, 150, 0.82);
  dibujarVela(115, 150, 0.82);

  dibujarVela(-95, 110, 0.75);
  dibujarVela(95, 110, 0.75);
}

// Dibuja una vela con llama animada
function dibujarVela(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();

  // Cuerpo
  fill(245, 233, 206);
  rect(0, 0, 20, 36);

  // Base
  fill(230, 210, 180);
  ellipse(0, 18, 20, 6);

  // Mecha
  stroke(80, 55, 30);
  strokeWeight(2);
  line(0, -18, 0, -24);

  if (velasEncendidas) {
    push();
    translate(0, -31);

    // Parpadeo mediante escala
    scale(1, 1 + 0.12 * sin(frameCount * 7 + x));

    // Llama exterior
    noStroke();
    fill(255, 130, 20);
    ellipse(0, 0, 12, 20);

    // Llama interior
    fill(255, 220, 90);
    ellipse(0, 2, 6, 10);

    pop();
  }

  pop();
}

// Distribuye las flores del camino
function dibujarFloresCamino() {
  dibujarFlorPequena(-55, 275, 0.8);
  dibujarFlorPequena(55, 275, 0.8);
  dibujarFlorPequena(-18, 275, 0.8);
  dibujarFlorPequena(18, 275, 0.8);

  dibujarFlorPequena(-45, 245, 0.7);
  dibujarFlorPequena(45, 245, 0.7);
  dibujarFlorPequena(-15, 245, 0.7);
  dibujarFlorPequena(15, 245, 0.7);

  dibujarFlorPequena(-35, 215, 0.8);
  dibujarFlorPequena(35, 215, 0.8);
  dibujarFlorPequena(0, 215, 0.8);

  dibujarFlorPequena(-30, 185, 0.7);
  dibujarFlorPequena(30, 185, 0.7);
  dibujarFlorPequena(0, 185, 0.7);

  dibujarFlorPequena(-20, 155, 0.75);
  dibujarFlorPequena(20, 155, 0.75);

  dibujarFlorPequena(-15, 125, 0.72);
  dibujarFlorPequena(15, 125, 0.72);
}

// Dibuja una flor con movimiento
function dibujarFlorPequena(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Balanceo de la flor
  rotate(8 * sin(frameCount * 2 + x));

  noStroke();

  // Pétalos exteriores
  fill(240, 145, 20);
  ellipse(0, -10, 12, 18);
  ellipse(10, 0, 18, 12);
  ellipse(0, 10, 12, 18);
  ellipse(-10, 0, 18, 12);

  // Pétalos interiores
  ellipse(7, -7, 12, 12);
  ellipse(-7, -7, 12, 12);
  ellipse(7, 7, 12, 12);
  ellipse(-7, 7, 12, 12);

  // Centro de la flor
  fill(255, 190, 50);
  ellipse(0, 0, 12, 12);

  fill(120, 80, 30);
  ellipse(0, 0, 5, 5);

  pop();
}

// Coloca las copas de incienso
function dibujarCopasIncienso() {
  dibujarCopa(-250, 205);
  dibujarCopa(250, 205);
}

// Dibuja una copa con humo animado
function dibujarCopa(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Base
  fill(125, 78, 45);
  ellipse(0, 22, 36, 10);
  rect(0, 12, 14, 18);

  // Recipiente
  fill(150, 95, 58);
  ellipse(0, 0, 56, 18);
  rect(0, -8, 52, 30, 45);

  // Incienso
  fill(95, 72, 55);
  ellipse(0, -12, 34, 10);

  // Humo
  noFill();
  stroke(210, 210, 210, 150);
  strokeWeight(2);

  push();
  translate(0, -24);

  // Balanceo del humo
  rotate(4 * sin(frameCount * 2 + x));

  ellipse(0, 0, 12, 18);
  ellipse(6, -14, 14, 22);
  ellipse(0, -30, 16, 24);

  pop();
  pop();
}

// Coloca los floreros laterales
function dibujarFloresLaterales() {
  dibujarRamo(-400, 30);
  dibujarRamo(400, 30);
}

// Dibuja un florero con tres flores
function dibujarRamo(x, y) {
  push();
  translate(x, y);
  noStroke();

  // Florero
  fill(35, 115, 140);
  ellipse(0, 62, 65, 28);
  rect(0, 35, 50, 50);
  ellipse(0, 8, 36, 18);

  // Decoración del florero
  fill(230, 145, 60);
  ellipse(0, 35, 18, 18);
  ellipse(-12, 35, 12, 12);
  ellipse(12, 35, 12, 12);
  ellipse(0, 23, 12, 12);
  ellipse(0, 47, 12, 12);

  // Tallos
  stroke(55, 110, 65);
  strokeWeight(4);
  line(-8, 5, -35, -35);
  line(0, 5, 0, -40);
  line(8, 5, 35, -28);

  // Hojas y ramas
  strokeWeight(2);
  line(-24, -15, -40, -22);
  line(0, -18, 16, -32);
  line(22, -12, 38, -5);

  noStroke();

  // Flores del ramo
  dibujarFlorGrande(-35, -38);
  dibujarFlorGrande(0, -48);
  dibujarFlorGrande(36, -30);

  pop();
}

// Dibuja una flor grande animada
function dibujarFlorGrande(x, y) {
  push();
  translate(x, y);

  // Movimiento suave
  rotate(4 * sin(frameCount * 2 + x));

  noStroke();
  fill(242, 142, 20);

  // Pétalos
  ellipse(0, -18, 20, 32);
  ellipse(18, 0, 32, 20);
  ellipse(0, 18, 20, 32);
  ellipse(-18, 0, 32, 20);

  ellipse(13, -13, 20, 20);
  ellipse(-13, -13, 20, 20);
  ellipse(13, 13, 20, 20);
  ellipse(-13, 13, 20, 20);

  // Centro
  fill(255, 188, 40);
  ellipse(0, 0, 22, 22);

  fill(125, 80, 35);
  ellipse(0, 0, 10, 10);

  pop();
}

// Distribuye las huellas del leoncillo
function dibujarHuellasDispersas() {
  dibujarHuella(-340, 390, 0.8);
  dibujarHuella(-260, 345, 0.72);
  dibujarHuella(-310, 290, 0.64);
  dibujarHuella(-205, 325, 0.58);

  dibujarHuella(335, 300, 0.8);
  dibujarHuella(245, 335, 0.72);
  dibujarHuella(185, 245, 0.58);

  dibujarHuella(-365, 175, 0.55);
  dibujarHuella(-280, 120, 0.5);
  dibujarHuella(360, 125, 0.5);

  dibujarHuella(-50, 340, 0.65);
  dibujarHuella(60, 275, 0.65);
  dibujarHuella(-140, 250, 0.58);
  dibujarHuella(115, 310, 0.58);
}

// Dibuja una huella con sus almohadillas
function dibujarHuella(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  noStroke();
  fill(235, 190, 105);

  // Almohadilla principal
  ellipse(0, 0, 18, 14);

  // Dedos
  ellipse(-8, -10, 7, 9);
  ellipse(0, -13, 7, 9);
  ellipse(8, -10, 7, 9);
  ellipse(13, -2, 6, 8);

  pop();
}

// Dibuja al leoncillo con pata y cabeza animadas
function dibujarLeoncillo(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  // Cola
  stroke(95, 90, 88);
  strokeWeight(10);
  line(48, 8, 88, -12);

  noStroke();
  fill(120, 115, 110);
  ellipse(90, -14, 16, 16);

  // Pata del fondo
  fill(110, 105, 100);
  rect(10, 35, 18, 42);

  // Pata que saluda
  push();
  translate(-38, -8);

  // Rotación desde el hombro
  rotate(-150 + 10 * sin(frameCount * 4));

  fill(115, 110, 105);
  rect(0, -18, 15, 48);

  // Patita
  fill(95, 90, 88);
  ellipse(0, -42, 22, 16);

  pop();

  // Cuerpo
  fill(120, 115, 110);
  ellipse(0, 0, 105, 55);

  // Patas traseras
  fill(110, 105, 100);
  rect(-25, 35, 18, 42);

  fill(95, 90, 88);
  ellipse(-25, 56, 24, 12);
  ellipse(10, 56, 24, 12);

  // Pata delantera apoyada
  fill(115, 110, 105);
  rect(30, 28, 16, 40);

  fill(95, 90, 88);
  ellipse(30, 48, 22, 11);

  // Cuello
  fill(118, 113, 108);
  ellipse(-38, -12, 34, 26);

  // Cabeza
  push();
  translate(-62, -22);

  // Balanceo de cabeza
  rotate(3 * sin(frameCount * 2));

  fill(120, 115, 110);
  ellipse(0, 0, 52, 42);

  // Orejas
  fill(115, 110, 105);
  ellipse(-16, -14, 12, 12);
  ellipse(16, -14, 12, 12);

  fill(210, 175, 145);
  ellipse(-16, -14, 6, 6);
  ellipse(16, -14, 6, 6);

  // Hocico
  fill(155, 135, 112);
  ellipse(0, 8, 22, 14);

  // Nariz
  fill(60, 50, 45);
  ellipse(0, 3, 7, 5);

  // Ojos
  fill(255);
  ellipse(-10, -3, 8, 8);
  ellipse(10, -3, 8, 8);

  fill(35, 35, 35);
  ellipse(-10, -3, 4, 4);
  ellipse(10, -3, 4, 4);

  // Bigotes
  stroke(220, 220, 220);
  strokeWeight(1);
  line(-18, 8, -28, 6);
  line(-18, 11, -28, 13);
  line(18, 8, 28, 6);
  line(18, 11, 28, 13);

  pop();
  pop();
}

// Enciende y apaga las velas con un clic
function mousePressed() {
  velasEncendidas = !velasEncendidas;
}

// Ajusta el lienzo al cambiar la ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}