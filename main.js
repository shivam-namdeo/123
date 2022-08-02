function setup ()

{
    video=createCanvas(VIDEO);

    video.size(550,550);

    canvas=createCanvas(550,550);

    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modeloded);

    poseNet.on('pose',gotPose);
}


function modeloded()

{
    console.log('PoseNet Is Initialized');
}

function draw()

{
    background('#969A97');
}

function gotPose(results)

{

if(results.length>0)

{
    console.log(results);
}

}