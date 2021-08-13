var ball=
{
x:100,
y:250,
r:50,
xSpeed:0,
ySpeed:0,
color:["white","green","black"]
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("grey");
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[0])
  ball.xSpeed=1
  ball.x=ball.x+ball.xSpeed
}