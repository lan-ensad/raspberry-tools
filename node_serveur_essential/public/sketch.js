let socket;

function setup(){
  createCanvas(500, 500);

  socket = io.connect();
  socket.on('mouse',
    function(data) {
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x,data.y,80,80);
    }
  );
}


function draw(){
  background(200);
  ellipse(mouseX, mouseY, 10, 10);

  mouseDragged();
}

function mouseDragged(){
  let data = {
    x:mouseX,
    y:mouseY
  };
  socket.emit('mouse', data);
}
