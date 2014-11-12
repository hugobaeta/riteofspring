// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Rite of Spring - Changing of the Seasons Interactive Story
//
// Hugo Baeta  [hugobaeta.com]
// Tonson Pine


//Variables
var myColor;


// Setup
function setup() {
	createCanvas(windowWidth, windowHeight);

//set frame rate = 24
	frameRate(24);

	myColor = {
		highlight: color(255,255,255,40),
		snow: color(255,255,255,100),
		// Winter Mountains
		winterMountainsBack: color(210,220,220),
		winterMountainsMiddle: color(170,200,220),
		winterMountainsFront: color(165,210,225),
		// Winter Tree
		winterTreeBranches: color(170,175,165),
		winterTreeGrassBack: color(222,228,226),
		winterTreeGrassFront: color(187,220,223)
	}


	// Mountains
	// Back

	mountainBack1 = {
		position: createVector( width*0.11, width*0.08 ),
		size: createVector( width*0.12, width*0.15 ),
		show: function(){
			push();

	//animate position.x by each frame
			translate( this.position.x+=0.1, this.position.y );
			noStroke();
			fill( myColor.winterMountainsBack );

			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			pop();
		}
	}; //end mountainBack1

	mountainBack2 = {
		position: createVector( width*0.28, width*0.03 ),
		size: createVector( width*0.09, width*0.19 ),
		show: function(){
			push();
			translate( this.position.x+=0.1, this.position.y );
			noStroke();
			fill( myColor.winterMountainsBack );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			pop();
		}
	}; //end mountainBack2

	mountainBack3 = {
		position: createVector( width*0.87, width*0.1 ),
		size: createVector( width*0.07, width*0.12 ),
		show: function(){
			push();
			translate( this.position.x+=0.1, this.position.y );
			noStroke();
			fill( myColor.winterMountainsBack );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			fill( myColor.snow );
			triangle(this.size.x/2, 0, this.size.x*0.7, this.size.y*0.4, this.size.x*0.3, this.size.y*0.4);
			pop();
		}
	}; //end mountainBack3

	// GROUP
	mountainsBack = {
		show: function(){
			mountainBack1.show();
			mountainBack2.show();
			mountainBack3.show();
		}
	}; //end mountainsBack


	// Mountains
	// Middle

	mountainMiddle1 = {
		position: createVector( width*0.02, width*0.1 ),
		size: createVector( width*0.12, width*0.13 ),
		show: function(){
			push();
			translate( this.position.x+=0.2, this.position.y );
			noStroke();
			fill( myColor.winterMountainsMiddle );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			pop();
		}
	}; //end mountainMiddle1

	mountainMiddle2 = {
		position: createVector( width*0.14, width*0.08 ),
		size: createVector( width*0.23, width*0.15 ),
		show: function(){
			push();
			translate( this.position.x+=0.2, this.position.y );
			noStroke();
			fill( myColor.winterMountainsMiddle );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			fill( myColor.snow );
			triangle(this.size.x/2, 0, this.size.x*0.7, this.size.y*0.4, this.size.x*0.3, this.size.y*0.4);
			pop();
		}
	}; //end mountainFront2

	mountainMiddle3 = {
		position: createVector( width*0.85, width*0.19),
		size: createVector( width*0.05, width*0.04 ),
		show: function(){
			push();
			translate( this.position.x+=0.2, this.position.y );
			noStroke();
			fill( myColor.winterMountainsMiddle );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			pop();
		}
	}; //end mountainFront3

	// GROUP
	mountainsMiddle = {
		show: function(){
			mountainMiddle1.show();
			mountainMiddle2.show();
			mountainMiddle3.show();
		}
	}; //end mountainsMiddle


	// Mountains
	// Front

	mountainFront1 = {
		position: createVector( width*0.07, width*0.06 ),
		size: createVector( width*0.14, width*0.18 ),
		show: function(){
			push();
			translate( this.position.x+=0.3, this.position.y );
			noStroke();
			fill( myColor.winterMountainsFront );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			fill( myColor.snow );
			triangle(this.size.x/2, 0, this.size.x*0.7, this.size.y*0.4, this.size.x*0.3, this.size.y*0.4);
			pop();
		}
	}; //end mountainFront1

	mountainFront2 = {
		position: createVector( width*0.17, width*0.15 ),
		size: createVector( width*0.13, width*0.09 ),
		show: function(){
			push();
			translate( this.position.x+=0.3, this.position.y );
			noStroke();
			fill( myColor.winterMountainsFront );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			fill( myColor.snow );
			triangle(this.size.x/2, 0, this.size.x*0.7, this.size.y*0.4, this.size.x*0.3, this.size.y*0.4);
			pop();
		}
	}; //end mountainFront2

	mountainFront3 = {
		position: createVector( width*0.35, width*0.18 ),
		size: createVector( width*0.05, width*0.06 ),
		show: function(){
			push();
			translate( this.position.x+=0.3, this.position.y );
			noStroke();
			fill( myColor.winterMountainsFront );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			pop();
		}
	}; //end mountainFront3

	mountainFront4 = {
		position: createVector( width*0.91, width*0.19 ),
		size: createVector( width*0.08, width*0.05 ),
		show: function(){
			push();
			translate( this.position.x+=0.3, this.position.y );
			noStroke();
			fill( myColor.winterMountainsFront );
			triangle( this.size.x/2 , 0, this.size.x, this.size.y, 0, this.size.y);
			fill( myColor.highlight );
			triangle(this.size.x/2, 0, this.size.x, this.size.y, this.size.x/2, this.size.y);
			fill( myColor.snow );
			triangle(this.size.x/2, 0, this.size.x*0.7, this.size.y*0.4, this.size.x*0.3, this.size.y*0.4);
			pop();
		}
	}; //end mountainFront4

	// GROUP
	mountainsFront = {
		show: function(){
			mountainFront1.show();
			mountainFront2.show();
			mountainFront3.show();
			mountainFront4.show();
		}
	}; //end mountainsFront



	// Tree
	// Front

	treeFront = {
		show: function(){
			noStroke();
			fill( myColor.winterTreeBranches );
			beginShape();
				vertex(width*0.1073, width*0.4313);
				vertex(width*0.1073, width*0.2672);
				vertex(width*0.0, width*0.1594);
				vertex(width*0.0146, width*0.1448);
				vertex(width*0.1073, width*0.2375);
				vertex(width*0.1073, width*0.0979);
				vertex(width*0.0625, width*0.0536);
				vertex(width*0.0776, width*0.0385);
				vertex(width*0.1073, width*0.0688);
				vertex(width*0.1073, width*0.0);
				vertex(width*0.1281, width*0.0);
				vertex(width*0.1281, width*0.1516);
				vertex(width*0.1938, width*0.0859);
				vertex(width*0.2083, width*0.1005);
				vertex(width*0.1281, width*0.1807);
				vertex(width*0.1281, width*0.2385);
				vertex(width*0.2219, width*0.1448);
				vertex(width*0.2365, width*0.1594);
				vertex(width*0.1281, width*0.2677);
				vertex(width*0.1281, width*0.4313);
			endShape(CLOSE);

			// These aren't working for some reason... I might just be tired...
			// fill( myColor.winterTreeGrassBack );
			// ellipse(width*0.0797, width*0.3984, width*0.04, width*0.4);
			// ellipse(width*0.1104, width*0.3870, width*0.05, width*0.5);
			// fill( myColor.winterTreeGrassFront );
			// ellipse(width*0.1061, width*0.1039, width*0.04, width*0.4);
		}
	}; //end treeFront


} // end Setup


// Draw
function draw() {
	background(240, 245, 245);
	noStroke();

	// Ground / Horizon Line
	fill(230,235,235);
	rect(0, width*0.22, width, height);

	// Mountains
	mountainsBack.show();
	mountainsMiddle.show();
	mountainsFront.show();

	//Trees
	push();
	translate( width*0.45, height - width*0.4313 );
	if( height > width) {
		scale(1.8);
		translate( 0, - width*0.15 );
	}
	treeFront.show();



	pop();
}



// Canvas Resize method from p5.js documentation
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
