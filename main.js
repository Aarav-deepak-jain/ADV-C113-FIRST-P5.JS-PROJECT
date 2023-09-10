function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 140, 100, 340, 280);
    fill("red");
    stroke("orange")
    rect(30, 25, 560, 20);
    fill("red");
    stroke("orange")
    rect(30, 450, 560, 20);
    fill("red");
    stroke("orange");
    rect(20, 30, 20, 440);
    fill("black");
    stroke("white")
    circle(30,30,40);
    fill("black");
    stroke("white")
    circle(30,460,40);
    fill("red");
    stroke("orange");
    rect(590, 30, 20, 440);
    fill("black");
    stroke("white")
    circle(600,30,40);
    fill("black");
    stroke("white")
    circle(600,460,40);
}

function take_snapshot(){
    save("student_image.png");
}

