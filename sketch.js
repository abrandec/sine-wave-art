function setup() {
    createCanvas(750, 750, WEBGL);
    angleMode(DEGREES); //so we can rotate the axis in 3D
  }
  
  function draw() {
    background(35);
    rotateX(180); //axis rotation
    noFill();
    stroke(255);
  
    for (var i = 0; i < 60; i++) {
      //defining  rgb cycle
      var r = map(sin(frameCount), -1, 1, 0, 150);
      var g = map(i, 0, 4, 0, 20);
      var b = map(cos(frameCount), -1, 1, 200, 0);
  
      //display those colors, 60 fps
      stroke(r, g, b);
      rotate(frameCount / 60);
      
      beginShape();
      //defining shape (a circle) & adding rotation with cos and sin
      for (var j = 0; j < 360; j += 180) {
        var rad = i * 6;
        var x = rad * cos(j);
        var y = rad * sin(j);
        var z = sin(frameCount + i * 5) * 50;
  
        vertex(x, y, z);
      }
      endShape(CLOSE);
    }
  }
  