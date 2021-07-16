var iss, spacecraft, issImage, spacecraftImage
var hasDocked = false


function preload() {
bg = loadImage("spacebg.jpg")
issImage = loadImage("iss.png")
spacecraftImage1 = loadImage("spacecraft1.png")
spacecraftImage2 = loadImage("spacecraft2.png")
spacecraftImage3 = loadImage("spacecraft3.png")
spacecraftImage4 = loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(800,400);
 spacecraft = createSprite(285,240);
 spacecraft.addImage(spacecraftImage1)
 spacecraft.scale = 0.15

 iss = createSprite(330,130);
 iss.addImage(issImage);
 iss.scale = 0.25


}

function draw() {
  background(bg);  
  spacecraft.addImage(spacecraftImage1)

    if (! hasDocked){
      spacecraft.x = spacecraft.x + random(-1,1);
    if (keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y - 2
  spacecraft.addImage(spacecraftImage2)
    }
    if (keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImage1)
    }
    if (keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x - 1
      spacecraft.addImage(spacecraftImage4)
    }
    if (keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x + 1
      spacecraft.addImage(spacecraftImage3)
    }
    }

    if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
      hasDocked = true
      textSize(25)
      fill("white")
      text("Docking Successful", 200,300)
    }
  drawSprites();
}