void setup() {
  size(400, 400);
}

void draw() {
  background(25, 35, 45);
  rectMode(CENTER);
  ellipseMode(CENTER); 

  // Antena 
  stroke(46, 204, 113); 
  strokeWeight(3); 
  line(200, 110, 200, 75); 
  line(200, 75, 215, 65); 
  
  // Brazos 
  stroke(30, 132, 73); 
  strokeWeight(4); 
  line(130, 250, 95, 290); 
  line(270, 250, 305, 290); 
  noStroke(); 
  
  // Punta de la antena 
  fill(46, 204, 113); 
  circle(215, 65, 12); 
  
  // Cabeza 
  fill(46, 204, 113); 
  rect(200, 140, 120, 80, 15);
  
  // Pantalla de la cara 
  fill(15, 30, 20); 
  rect(200, 135, 90, 35, 8); 
  
  // Ojos 
  fill(235, 247, 240); 
  circle(180, 135, 16); 
  circle(220, 135, 16); 
  
  // Cuello
  fill(27, 94, 32); 
  rect(200, 185, 30, 10); 
  
  // Cuerpo 
  fill(30, 132, 73); 
  rect(200, 270, 140, 160, 20); 
  
  // Panel del cuerpo 
  fill(200, 230, 201); 
  rect(200, 265, 90, 80, 5); 
  
  // Botón 
  fill(46, 204, 113); 
  circle(200, 265, 35); 
  
  // Manos
  fill(39, 174, 96); 
  triangle(95, 290, 80, 315, 110, 315); 
  triangle(305, 290, 290, 315, 320, 315); 
}
