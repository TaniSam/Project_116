nose_x= 0;
nose_y= 0;

function modelLoaded(){
    console.log('PoseNet is Initialized');
    }
    
    function draw(){
    image(video, 0,0,350,300);
    image(mo_img, nose_x, nose_y, 80 ,40);
    }
     
    function setup(){
        canvas= createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide;
    
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    
    }
    
    function preload(){
        mo_img= loadImage('https://i.postimg.cc/5tX7Ds7y/mo-removebg-preview.png');
    }
    function snap(){
        save ("snap.png");
    }
    
    function gotPoses(results){
        if (results.length > 0){
            console.log(results);
            nose_x=  results[0].pose.nose.x-12 ;
            nose_y=  results[0].pose.nose.y-10 ;
            console.log("Nose x=" + nose_x);
            console.log("Nose y=" + nose_y);
        }
    }
    