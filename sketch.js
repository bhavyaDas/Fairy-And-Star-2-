//////////////////////////////////////////Code Started//////////////////////////////////////////////


//Created variables:starImg,bgImg,bgImg1;
var starImg,bgImg,bgImg1;

//Created variables:star,starImg1, starBody; 
var star,starImg1, starBody;

//Created variables: start,startImg;
var start,startImg;

//Created variables: fairy,fairyImg,fairyImg1;
var fairy,fairyImg,fairyImg1;

//Created variable: fairySound;
var fairySound;

//Created const: Engine with value as Matter.Engine;
const Engine = Matter.Engine;

//Created const: World with value as Matter.World;
const World = Matter.World;

//Created const: Bodies with value as Matter.Bodies;
const Bodies = Matter.Bodies;

//Created const: Body with value as Matter.Body;
const Body = Matter.Body;

//Created variable PLAY with value as 1
var PLAY=1

//Created variable SERVE value as 0
var SERVE=0

//Created variable gameState with value as SERVE
var gameState=SERVE


///////////////////////////////////////////// Function Preload Started///////////////////////////////////////


//Images-Storage Pre-defined function
function preload(){

	//Loaded an animation inside starImg for star
	starImg = loadAnimation("images/starImage.png");

	//Loaded an animation inside starImg1 for star
	starImg1=loadAnimation("images/star.png")

	//Loaded an image inside bgImg for background
	bgImg = loadImage("images/starNight.png");

	//Loaded an image inside bgImg1 for background
	bgImg1=loadImage("images/starryNight.jpg")

	//Loaded an animation inside fairyImg for fairy
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

	//Loaded an animation inside fairyImg1 for fairy
	fairyImg1=loadAnimation("images/fairy.png")

	//Loaded a sound inside fairySound for background Music
	fairySound=loadSound("sound/JoyMusic.mp3")

	//Loaded an image inside startImg for start Button to start
	startImg=loadImage("images/start.png")

}


////////////////////////////////////////Function Preload Ended///////////////////////////////////////////

////////////////////////////////////////Function Setup Started//////////////////////////////////////////


//Pre-defined function:  function setup ()
function setup() {

	//Created canvas with width and height set of as of window's
	createCanvas(windowWidth, windowHeight-5);

	//Play fairySound () for background Music
fairySound.play()

	//Created fairy sprite with (X-position,Y-position,Width,Height) coordinates
      fairy=createSprite(130,520)
	
	//Resize the animation under fairy sprite using scale property
	  fairy.scale=0.2

	//Created star sprite with (X-position,Y-position,Width,Height) coordinates  
	star = createSprite(650,50);
	
	//Resize the animation under star sprite using scale property
	star.scale = 0.3;

//Created start sprite with (X-position,Y-position,Width,Height) coordinates  
start=createSprite(width/2,height/2+100)

//Added an image to start sprite 
start.addImage("start_button",startImg)

//Resize the image under start sprite using scale property
start.scale=0.5

//Created Engine inside the variable engine
	engine = Engine.create();

	//Set world as engine.world 
	world = engine.world;

	/*Inside starBody made the physics objects in circle shape 
	/Coordinates are (X-position,Y-position,Radius,Restitution(bounciness),isStatic(object at rest or work))*/
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});

//Added starBody inside World
	World.add(world, starBody);
	
	//Running the engine
	Engine.run(engine);

}


/////////////////////////////////////////////////Function Setup Ended///////////////////////////////////////

////////////////////////////////////////////////Function Draw Started/////////////////////////////////////


//Pre-defined function(repeatated every command)- draw Function
function draw() {

//Set a if condition if gameState is equal to SERVE
if(gameState==SERVE){

	//Added a background image(bgImg1) to the canvas background
	background(bgImg1);

	//Set text's size as 100 pixels
textSize(100)

//Set text family or style as "Comic Sans Ms"
textFont("Comic Sans Ms")

//Set text's color as "pink"
fill("pink")

//Set text's outline color as "blue"
stroke("blue")

//Set text's outline weight as 20 
strokeWeight(20)

//Set text as  `Fairy  and Star` with X and Y positions
text(`Fairy and Star`,width/2-300,height/2)

//Added an animation to sprite fairy in gameState SERVE
fairy.addAnimation("fairyFlying",fairyImg1)

//Added an animation to sprite star in gameState SERVE
star.addAnimation("star1",starImg1);

//Set a else if condition where gameState is equal to PLAY and not SERVE
} else if (gameState==PLAY){

//Added a background image(bgImg) to the canvas background	
	background(bgImg)
	
//Added an different animation to sprite star in gameState PLAY
	star.addAnimation("star1",starImg);

	//Then changed the animation of star as starImg;
	star.changeAnimation("star1",starImg);

	//Resize the animation under star using scale property
	star.scale=0.05
	
	//Set star's X-position according to star Body's X-position
	star.x= starBody.position.x 

	//Set star's Y-position according to star Body's Y-position
	star.y= starBody.position.y 
  
	//Will get updates of star's Y-position as it falls through console.log
	console.log(star.y);
  
	//Set a condition to stop the  star as it touches the fairy hand when it falls where gameState is equal to PLAY
	if(star.y>470 &&starBody.position.y>470&&gameState==PLAY){

		//In Matter.Body setStatic of starBody as true
	  Matter.Body.setStatic(starBody,true)

  }

}

//Set a condition if mouse is pressed over (start) sprite  and gameState is equal to SERVE
if(mousePressedOver(start)&&gameState==SERVE){

	//Set visiblity of (start) sprite to be false
	start.visible=false

	//Assigned gameState value again as PLAY
	gameState=PLAY

	//Added an animation to sprite fairy as: fairyImg
	fairy.addAnimation("fairyFlying",fairyImg)

	//Changed the animation of the sprite fairy as: fairyImg
	fairy.changeAnimation("fairyFlying",fairyImg)

}

//Added a function to draw sprites as there in function draw so it will draw it again and again
  drawSprites();
 
}


///////////////////////////////////////////Function Draw Ended/////////////////////////////////////

//////////////////////////////////////////Function KeyPressed Started/////////////////////////////


// Pre-defined Function: keyPressed()
function keyPressed() {

//Set a condition if keyCode is equal to DOWN_ARROW
	if (keyCode === DOWN_ARROW) {

		//Inside Matter.Body set the starBody static as true
		Matter.Body.setStatic(starBody,false); 

	}

//Set a condition if keyCode is equal to RIGHT_ARROW
	if(keyCode===RIGHT_ARROW){

		//Set fairy's X position to 20 steps more towards the right
		fairy.x=fairy.x+20

	}
	
	//Set a condition if keyCode is equal to LEFT_ARROW
	if(keyCode===LEFT_ARROW){

		//Set fairy's X position to 20 steps more towards the left
		fairy.x=fairy.x-20

	}

}


////////////////////////////////////////////Function KeyPressed Ended/////////////////////////

///////////////////////////////////////////Code Ended////////////////////////////////////////
