
function preload() {
    bgImg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")

    //load the images here
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(800,650)
    cat.addAnimation("sitting",cat1)
    cat.scale=0.2

    mouse=createSprite(100,650)
    mouse.addAnimation("walking",mouse1)
    mouse.scale=0.2
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        mouse.addAnimation("look",mouse3)
        mouse.changeAnimation("look")
        cat.addAnimation("sit",cat3)
        cat.changeAnimation("sit")
        cat.velocityX=0
        cat.x=200
    }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        mouse.addAnimation("teasing",mouse2)
        mouse.changeAnimation("teasing")
        mouse.frameDelay=15
    }

    if(keyCode===LEFT_ARROW){
        cat.addAnimation("running",cat2)
        cat.changeAnimation("running")
        cat.velocityX=-5
    }



  //For moving and changing animation write code here


}
