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



	// ====================================================
	// ILLUSTRATION
	// ====================================================


	// Horizon Ground

	horizonGround = {
		color: color(230,235,235),
		show: function(){
			fill(this.color);
			rect(0, width*0.22, width, height);
		}
	}; //end horizonGround



	// Mountains
	// Back

	mountainBack1 = {
		position: createVector( width*0.11, width*0.08 ),
		size: createVector( width*0.12, width*0.15 ),
		show: function(){
			push();
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
		position: createVector(width,0), // Controls tween start position
		show: function(){
			push();
			translate( this.position.x, this.position.y );
				mountainBack1.show();
				mountainBack2.show();
				mountainBack3.show();
			pop();
		}
	}; //end mountainsBack


	// Mountains
	// Middle

	mountainMiddle1 = {
		position: createVector( width*0.02, width*0.1 ),
		size: createVector( width*0.12, width*0.13 ),
		show: function(){
			push();
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
		position: createVector(width*1.15,0), // Controls tween start position
		show: function(){
			push();
			translate( this.position.x, this.position.y );
			mountainMiddle1.show();
			mountainMiddle2.show();
			mountainMiddle3.show();
			pop();
		}
	}; //end mountainsMiddle


	// Mountains
	// Front

	mountainFront1 = {
		position: createVector( width*0.07, width*0.06 ),
		size: createVector( width*0.14, width*0.18 ),
		show: function(){
			push();
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
			translate( this.position.x, this.position.y );
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
		position: createVector(width*1.3,0), // Controls tween start position
		show: function(){
			push();
			translate( this.position.x, this.position.y );
			mountainFront1.show();
			mountainFront2.show();
			mountainFront3.show();
			mountainFront4.show();
			pop();
		}
	}; //end mountainsFront



	// Tree

	// Tree Branches
	treeBranches = {
		color: color(170,175,165),
		show: function(){
			noStroke();
			fill( this.color );
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
		}
	}; //end treeBranches

	// Tree Leaves
	treeLeaves1 = {
		size: createVector(0,0),
		color: color(190,210,175,180),
		show: function(){
			noStroke();
			fill( this.color );
			ellipse(width*0.0422, width*0.1932, this.size.x, this.size.y);
			ellipse(width*0.0718, width*0.0318, this.size.x, this.size.y);
			ellipse(width*0.1339, width*0.0005, this.size.x, this.size.y);
			ellipse(width*0.2208, width*0.0964, this.size.x, this.size.y);
			ellipse(width*0.2068, width*0.2000, this.size.x, this.size.y);
		}
	}; //end treeLeaves1

	treeLeaves2 = {
		size: createVector(0,0),
		color: color(180,195,90,150),
		show: function(){
			noStroke();
			fill( this.color );
			ellipse(width*0.0781, width*0.2328, this.size.x, this.size.y);
			ellipse(width*0.1208, width*0.2141, this.size.x, this.size.y);
			ellipse(width*0.1354, width*0.1031, this.size.x, this.size.y);
			ellipse(width*0.1615, width*0.1724, this.size.x, this.size.y);
			ellipse(width*0.1990, width*0.2297, this.size.x, this.size.y);
		}
	}; //end treeLeaves2

	treeLeaves3 = {
		size: createVector(0,0),
		color: color(180,195,90,150),
		show: function(){
			noStroke();
			fill( this.color );
			ellipse(width*0.0682, width*0.1802, this.size.x, this.size.y);
			ellipse(width*0.0714, width*0.0495, this.size.x, this.size.y);
			ellipse(width*0.1349, width*0.0281, this.size.x, this.size.y);
			ellipse(width*0.2000, width*0.0964, this.size.x, this.size.y);
			ellipse(width*0.2099, width*0.1724, this.size.x, this.size.y);
		}
	}; //end treeLeaves3

	// TREE GROUP
	treeFront = {
		position: createVector(width*2.5,0), // Controls tween start position
		show: function(){
			noStroke();
			push();
			translate( this.position.x, this.position.y );
				treeBranches.show();
				treeLeaves1.show();
				treeLeaves2.show();
				treeLeaves3.show();
			pop();
		}
	}; //end treeFront


	// ====================================================
	// ANIMATION
	// ====================================================
	var tweenPanSpeed = 10000;
	var tweenLeavesSpeed = 1500;

	// Mountains Back
	var tweenMountainsBack = new TWEEN.Tween( mountainsBack.position )
			.to( { x: 0 }, tweenPanSpeed )
			.easing( TWEEN.Easing.Quadratic.Out )
			.start();

	// Mountains Middle
	var tweenMountainsMiddle = new TWEEN.Tween( mountainsMiddle.position )
			.to( { x: 0 }, tweenPanSpeed )
			.easing( TWEEN.Easing.Quadratic.Out )
			.start();

	// Mountains Front
	var tweenMountainsFront = new TWEEN.Tween( mountainsFront.position )
			.to( { x: 0 }, tweenPanSpeed )
			.easing( TWEEN.Easing.Quadratic.Out )
			.start();

	// Tree
	var tweenTreeMove = new TWEEN.Tween( treeFront.position )
			.to( { x: 0 }, tweenPanSpeed )
			.easing( TWEEN.Easing.Quadratic.Out )
			.start()
			.onComplete(function(){
				tweenLeaves1.start();
			});

	// Tree Leaves
	var tweenLeaves1 = new TWEEN.Tween( treeLeaves1.size )
			.to( { x: width*0.3, y:width*0.3 }, tweenLeavesSpeed )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete(function(){
				tweenLeaves2.start();
				treeLeaves1.color = color(180,195,90,200);
				treeBranches.color = color(153,150,130);

				//horizonGround.color = color(241,242,230);
			});

	var tweenLeaves2 = new TWEEN.Tween( treeLeaves2.size )
			.to( { x: width*0.15, y:width*0.15 }, tweenLeavesSpeed )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete(function(){
				tweenLeaves3.start();
				treeLeaves1.color = color(150,180,80,200);
				treeBranches.color = color(135,125,90);

				//horizonGround.color = color(205,215,160);
			});

	var tweenLeaves3 = new TWEEN.Tween( treeLeaves3.size )
			.to( { x: width*0.13, y:width*0.12 }, tweenLeavesSpeed )
			.easing( TWEEN.Easing.Quintic.Out )
			.onComplete(function(){
				treeLeaves2.color = color(150,180,80,200);
				treeBranches.color = color(115,100,55);
			});



	// ====================================================
	// INTERACTION
	// ====================================================



} // end Setup


// Draw
function draw() {
	background(240, 245, 245);
	noStroke();

	// Ground / Horizon Line
	horizonGround.show();

	// Mountains
	mountainsBack.show();
	mountainsMiddle.show();
	mountainsFront.show();

	//Trees
	push();
		// Main Tree
		translate( width*0.45, height - width*0.4313 );
		if( height > width) {
			scale(1.8);
			translate( 0, - width*0.15 );
		}
		treeFront.show();
	pop();

	// push();
	// 	// Secondary Tree
	// 	translate( width*0.20, height - width*0.3 );
	// 	scale(0.3);
	// 	// if( height > width) {
	// 	// 	scale(1.8);
	// 	// 	translate( 0, - width*0.15 );
	// 	// }
	// 	fill( myColor.winterTreeBranches, 180 );
	// 	treeFront.show();
	// pop();

	TWEEN.update();
}


// Canvas Resize method from p5.js documentation
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
