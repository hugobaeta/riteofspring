// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Rite of Spring - Changing of the Seasons Interactive Story
//
// Hugo Baeta  [hugobaeta.com]
// Tonson Pine

var img;  // Declare variable 'img'.
var x = 0;
var tint = 0;
var img2, img3, img4;

function setup() {
	noCanvas();
  createCanvas( windowWidth, windowHeight );
  //createCanvas(720, 400);
  img = loadImage("images/mountains-illustration.svg");
  img2 = loadImage("images/mountains-02-illustration.svg");
  img3 = loadImage("images/mountains-03-illustration.svg");
  img4 = loadImage("images/mountains-04-illustration.svg");
   // Load the image 
}

function draw() {
	background(229,233,231);
  // Displays the image at its actual size at point (0,0)
  image(img, x, -20, 550, 180);
  // // Displays the image at point (0, height/2) at half size
  // image(img, 0, 0, img.width/2, img.height/2);

  
  if (x > windowWidth*0.35) {
    x = x;
    if(tint > 255){
  	
  	}else{
  		tint(255, tint); 
  		tint = tint+10;
  		
  	}
  }else{
  	x = x + 5;
  }	
   
  
}