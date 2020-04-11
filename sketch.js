var bg;

var name;
var userCount;

var form, paint, user;
var database;

var drawing = [];

var paintState=0;

function setup(){
  var canvas = createCanvas(2000, 2000);
    database = firebase.database();
  paint = new Paint();
  paint.getState();
  paint.start();
}
  
function draw(){
    background(220);
    
    if(mouseIsPressed){
      var point = {
        x: mouseX,
        y: mouseY
      };
      drawing.push(point);
    }

  fill("black");

    beginShape();
    stroke("black");
    strokeWeight(8);
    noFill();
    for (var i =0; i<drawing.length; i++){
      vertex(drawing[i].x, drawing[i].y)
    }
    endShape();

}

function clearCanvas(){
  drawing=[];
}