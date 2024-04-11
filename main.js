noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(500, 500);
canvas.position(850, 150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet is initialized.')
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("Nose x is " + noseX + "Nose y is " + noseY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left wrist x is " + leftWristX + "Right wrist x is " + rightWristX + "Difference is " + difference);
}
}


function draw(){
background('pink');
document.getElementById("square_size").innerHTML = "The width and height of the square is " + difference + "px";
fill("aqua");
stroke("black");
square(noseX, noseY, difference);
}