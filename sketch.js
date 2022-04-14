var player,healthyfood,unhealthyfood,healthyfoodGroup



function preload() {
    watermelonimg=loadImage("watermelon.png")  
  kiwiimg=loadImage("kiwi.png")
  fishimg=loadImage("fish.png")
  eggimg=loadImage("egg.png")
  tomatoimg=loadImage("tomato.png")

  pizzaimg=loadImage("pizza.png")
  hotdogimg=loadImage("hotdog.png")
  breakfastimg=loadImage("breakfast.png")
  chickenlegimg=loadImage("chickenleg.png")
 bombimg=loadImage("bomb.png")

}

function setup(){
createCanvas(windowWidth-50,windowHeight-50)
player=createSprite(width/2,height-50)


healthyfoodGroup = new Group()
UnhealthyfoodGroup= new Group()


}

function draw(){
background("pink")
spawnHealthyfood()
spawnUnHealthyfood()


if(keyDown("LEFT_ARROW")){
    player.x += -5
}


if(keyDown("RIGHT_ARROW")){
    player.x += 5
}

if(keyDown("space")){
    player.velocityY=-10
}

drawSprites()
}


function spawnHealthyfood(){
if(frameCount% 100 ==0){
    healthyfood=createSprite(-10,100)
    healthyfood.velocityX=Math.round(random(10,25))
  //  healthyfood.velocityY=Math.round(random(5,15))
var rand=Math.round(random(1,5))
healthyfood.scale=1.5

switch(rand){
    case 1: healthyfood.addImage(watermelonimg)
    break;

    case 2: healthyfood.addImage(kiwiimg)
    break;

    case 3: healthyfood.addImage(fishimg)
    break;

    case 4: healthyfood.addImage(tomatoimg)
    break;

    case 5: healthyfood.addImage(eggimg)
    break;

    default: break;
}
healthyfood.scale=1.5
    healthyfoodGroup.add(healthyfood)
}


}

function spawnUnHealthyfood(){
    if(frameCount% 100 ==0){
        Unhealthyfood=createSprite(width,100)
        Unhealthyfood.velocityX=Math.round(random(-10,-25))
        Unhealthyfood.velocityY=Math.round(random(15,25))
    
        var rand1=Math.round(random(1,5))

        switch(rand1){
            case 1: Unhealthyfood.addImage(breakfastimg)
            break;
        
            case 2: Unhealthyfood.addImage(pizzaimg)
            break;
        
            case 3: Unhealthyfood.addImage(hotdogimg)
            break;
        
            case 4: Unhealthyfood.addImage(chickenlegimg)
            break;
        
            case 5: Unhealthyfood.addImage(bombimg)
            break;
        
            default: break;
        }



        UnhealthyfoodGroup.add(Unhealthyfood)
    }
    
    
    }



