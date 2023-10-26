var bg, bgImg
var bottomGround
var topGround
var turtle, turtleImg
var obstaculo1, obstaculo2
var grupoDeObstaculosTop
var gameState = "play"
var obstaculo3, obstaculo4, obstaculo5
var gerarObstaculosBottom
var restart
var over
var restartImg
var overImg


function preload(){
  bgImg = loadImage("assets/bg.png")

  turtleImg = loadAnimation("assets/turtle1.png","assets/turtle2.png","assets/turtle3.png","assets/turtle4.png","assets/turtle5.png")
  obstaculo1 = loadImage("assets/obsTop1.png")
  obstaculo2 = loadImage("assets/obsTop2.png")
  obstaculo3 = loadImage("assets/obsBottom1.png")
  obstaculo4 = loadImage("assets/obsBottom2.png")
  obstaculo5 = loadImage("assets/obsBottom3.png")
  restartImg = loadImage("assets/4e75f96f6a8e4f7.png")
  overImg = loadImage("assets/download.jpeg")


}

function setup(){
  createCanvas(700 ,500)

  grupoDeObstaculosTop = new Group()
  grupoDeObstaculosBottom = new Group()
//imagem de fundo
  bg = createSprite(300,400,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3

  //criar o solo superior e inferior
  bottomGround = createSprite(200,495,1000,20);
  bottomGround.visible = true;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criar o balão     
  turtle = createSprite(100,200,20,50);
  turtle.addAnimation("turtle",turtleImg);
  turtle.scale = 1;
  //turtle.mirrorX(-1)

  restart = createSprite(350,300)
  over = createSprite(350,400)
  restart.addImage(restartImg)
  over.addImage(overImg)
  restart.scale = 0.1
  over.scale = 0.5
  restart.visible = false
  over.visible = false

}

function draw() {
  
  background("black");
        
  if(gameState === "play"){
          //faça o balão de ar quente pular
          if(keyDown("space")) {
            turtle.velocityY= -6 ;
            
          }

          //adicione gravidade
           turtle.velocityY = turtle.velocityY+0.5;
   
       
        gerarObstaculosTop();
        gerarObstaculosBottom();
         if(turtle.isTouching(bottomGround) || turtle.isTouching(topGround) || turtle.isTouching(grupoDeObstaculosTop) || turtle.isTouching(grupoDeObstaculosBottom)){
          //turtle.visible = false
          gameState ="end"
        }
  
        
      } else if(gameState === "end"){
        // textSize(50)
        // text("Game Over", 170, 200)

        grupoDeObstaculosTop.destroyEach()
        grupoDeObstaculosBottom.destroyEach()
        bottomGround.destroy()
        turtle.destroy()
        restart.visible = true
        over.visible = true
        if(mousePressedOver(restart)){ window.location.reload() }

      }
      drawSprites();

}

function gerarObstaculosTop(){
  if (frameCount % 100 ===0){
    var obstaculo = createSprite(600,100,10,40);
    obstaculo.velocityX=-3 
   
    //switch case vai gerar obstaculos aleatorios 
    //cria uma variavel aleatoria para armazenar um numero aleatorio, e passa essa variável no switch, para entrar no caso aleatorio 
    
    var aleatorio = Math.round(random(1,2));
    switch(aleatorio){
      case 1: obstaculo.addImage(obstaculo1);
        obstaculo.scale = 0.15              
              break;
      case 2: obstaculo.addImage(obstaculo2);
        obstaculo.scale = 0.1   
              break;
       
              default: break; 
    }
    
    //definir tamanho do objeto 
    //obstaculo.scale=0.5;
    
    //atribui tempo de duração do obstaculo
    obstaculo.lifetime = 200; 
    
    //adiciona cada obstaculo ao grupo
    grupoDeObstaculosTop.add(obstaculo);
    
   
  }
}


function gerarObstaculosBottom(){
  if (frameCount % 100 ===0){
    var obstaculo = createSprite(600,450   ,10,40);
    obstaculo.velocityX=-3 
   
    //switch case vai gerar obstaculos aleatorios 
    //cria uma variavel aleatoria para armazenar um numero aleatorio, e passa essa variável no switch, para entrar no caso aleatorio 
    
    var aleatorio = Math.round(random(1,3));
    switch(aleatorio){
      case 1: obstaculo.addImage(obstaculo3);
        obstaculo.scale = 0.15            
              break;
      case 2: obstaculo.addImage(obstaculo4);
        obstaculo.scale = 0.15 
              break;
       
      case 3: obstaculo.addImage(obstaculo5);
              obstaculo.scale = 0.15 
                    break;

              default: break; 
    }
    
    //definir tamanho do objeto 
    //obstaculo.scale=0.5;
    
    //atribui tempo de duração do obstaculo
    obstaculo.lifetime = 200; 
    
    //adiciona cada obstaculo ao grupo
    grupoDeObstaculosBottom.add(obstaculo);
    
   
  }
}

// function reset(){

// }

