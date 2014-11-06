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
var img2, img3, img4, img6;
var y = 0;
var z = 0;
var zz = 0;
var xx = 700;

function setup() {
	noCanvas();
  createCanvas( windowWidth, windowHeight );
  //createCanvas(720, 400);
  img5 = loadImage("images/mountains-illustration.png");
  img2 = loadImage("images/mountains-02-illustration.png");
  img3 = loadImage("images/mountains-03-illustration.png");
  img4 = loadImage("images/mountains-04-illustration.png");

   // Load the image 

  img6 = loadImage("images/trees-illustration2.png")
}

function draw() {
	background(229,233,231);

  image(img6, xx, 20, 1300, windowWidth/2);

  if (xx < windowWidth*0.15) {
    xx = xx;
  }else{
    //speed of trees
    xx = xx - 0.6;
  }
  
  image(img5, x, -20, 550, 300);
  
  if (x > windowWidth*0.35) {
    x = x;
    //
    if ( y > 50){
      background(229,233,231);
      image(img6, xx, 20, 1300, windowWidth/2);
      image(img2, x, -20, 550, 300);
      if ( z > 50){
        background(229,233,231);
        image(img6, xx, 20, 1300, windowWidth/2);
      image(img3, x, -20, 550, 300);
      if ( zz > 50){
        background(229,233,231);
        image(img6, xx, 20, 1300, windowWidth/2);
      image(img4, x, -20, 550, 300);
    }else{
      //appearing speed of mountain2
      zz = zz + 0.5;
    }
    }else{
      //appearing speed of mountain3
      z = z + 0.5;
    }
    }else{
      //appearing speed of mountain4
      y = y + 0.5;
    }
    
  }else{
    //speed of mountain1
  	x = x + 0.3;
  }	
  
}