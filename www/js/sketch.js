// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Rite of Spring - Changing of the Seasons Interactive Story
//
// Hugo Baeta  [hugobaeta.com]
// Tonson Pine

// Variable Color
var treeColor;
var skyColor;
var leafColor;
var groundColor;
var mountainColor;
var highlight;

// Variable Status
var speed = 0.3;
var season = 1;
var current_framerate = 24;
var current_count = 1;
var percentage_click_enable = true;
var frame_for_change_color = current_framerate * 4;
var checkpoint = false;

var image_credit_path = "images/credits-illustration.png";
var credit_image;

// Variable Object
var tree1, tree2, tree3;
var mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7, mountain8, mountain9;

function setup()
{
	//1280 : 658
	createCanvas(1280, 658);

	frameRate();

	treeColor = {
		season1: color(171, 173, 166),
		season2: color(153, 150, 129),
		season3: color(135, 126, 92),
		season4: color(117, 103, 55)
	};

	leafColor = [ color(179, 195, 80), color(147, 172, 68), color(185, 203, 128), color(172, 191, 121) ];

	mountainColor = {
		season1: [ color(222, 228, 226), color(209, 218, 219), color(197, 220, 223), color(164, 201, 213), color(194, 205, 218), color(166, 186, 195)],
		season2: [ color(222, 228, 226), color(209, 218, 219), color(197, 220, 223), color(164, 201, 213), color(194, 205, 218), color(166, 186, 195)],
		season3: [ color(208, 206, 179), color(174, 172, 151), color(177, 163, 128), color(147, 129, 101), color(208, 206, 179) ],
		season4: [ color(206, 221, 187), color(174, 201, 166), color(141, 184, 155), color(122, 167, 127), color(95, 126, 98) ]
	};

	groundColor = {
		season1: color(255, 255, 255),
		season2: color(255, 255, 255),
		season3: mountainColor.season3[4],
		season4: mountainColor.season4[0]
	};

	skyColor = {
		season1: color(210, 220, 220),
		season2: mountainColor.season1[5],
		season3: mountainColor.season1[2],
		season4: mountainColor.season1[3]
	};

	highlight = color(255, 255, 255, 40);

	tree1 = getTree();
	tree2 = getTree();
	tree3 = getTree();

	tree1.setup( width * 0.15, height * 0.3, 0.25);
	tree2.setup( width * 0.55, height * 0.5, 0.45);
	tree3.setup( width * 0.8, height * 0.2, 0.55);

	mountain1 = getMountain();
	mountain2 = getMountain();
	mountain3 = getMountain();
	mountain4 = getMountain();
	mountain5 = getMountain();
	mountain6 = getMountain();
	mountain7 = getMountain();
	mountain8 = getMountain();
	mountain9 = getMountain();

	mountain1.setup(100, 57, 150, 150, false);
	mountain1.setColor( mountainColor.season1[0], mountainColor.season2[0], mountainColor.season3[1], mountainColor.season4[4] );

	mountain2.setup(50, 62, 140, 140, false);
	mountain2.setColor( mountainColor.season1[4], mountainColor.season2[4], mountainColor.season3[0], mountainColor.season4[2] );

	mountain3.setup(130, 52, 230, 160, true);
	mountain3.setColor( mountainColor.season1[4], mountainColor.season2[4], mountainColor.season3[2], mountainColor.season4[2] );

	mountain4.setup(80, 37, 150, 190, true);
	mountain4.setColor( mountainColor.season1[2], mountainColor.season2[2], mountainColor.season3[4], mountainColor.season4[2] );

	mountain5.setup(200, 32, 100, 200, false);
	mountain5.setColor( mountainColor.season1[5], mountainColor.season2[5], mountainColor.season3[4], mountainColor.season4[2] );

	mountain6.setup(140, 82, 140, 100, true);
	mountain6.setColor( mountainColor.season1[3], mountainColor.season2[3], mountainColor.season4[0], mountainColor.season4[2] );

	mountain7.setup(240, 97, 60, 70, false);
	mountain7.setColor( mountainColor.season1[3], mountainColor.season2[3], mountainColor.season3[2], mountainColor.season4[0] );

	mountain8.setup(400, 72, 80, 120, false);
	mountain8.setColor( mountainColor.season1[5], mountainColor.season2[5], mountainColor.season3[1], mountainColor.season4[2] );

	mountain9.setup(385, 107, 60, 50, false);
	mountain9.setColor( mountainColor.season1[4], mountainColor.season2[4], mountainColor.season4[0], mountainColor.season4[0] );

	credit_image = loadImage(image_credit_path);
}

function draw()
{
	if ( percentage_click_enable )
	{
		if ( checkpoint && season < 4 )
		{
			if ( current_count <= frame_for_change_color )
			{
				current_count++;
			}
			else
			{
				current_count = 1;
				season++;
			}
		}

		drawBackground();
		drawMountain();
		drawTree();
	}
	else
	{
		drawCredit();
	}
}

function windowResized()
{
	// resizeCanvas(windowWidth, windowHeight);
}

function drawBackground()
{
	// sky color
	background( skyColor["season" + season] );

	noStroke();

	// ground color
	fill( groundColor["season" + season] );
	rect(0, height * 0.4, width, height * 0.6);
}

function drawMountain()
{
	if ( !checkpoint )
	{
		mountain1.animate( mountain1.position.x+(speed * 0.08) );

		mountain2.animate( mountain2.position.x+(speed * 0.15) );
		mountain3.animate( mountain3.position.x+(speed * 0.15) );
		
		mountain4.animate( mountain4.position.x+(speed * 0.25) );
		mountain5.animate( mountain5.position.x+(speed * 0.25) );

		mountain6.animate( mountain6.position.x+(speed * 0.3) );

		mountain7.animate( mountain7.position.x+(speed * 0.45) );

		mountain8.animate( mountain8.position.x-(speed * 0.25) );

		mountain9.animate( mountain9.position.x-(speed * 0.45) );
	}
	else
	{
		mountain1.animate();
		mountain2.animate();
		mountain3.animate();
		mountain4.animate();
		mountain5.animate();
		mountain6.animate();
		mountain7.animate();
		mountain8.animate();
		mountain9.animate();
	}
}

function drawTree()
{
	if ( tree2.getOrigin().x > width / 2 ) // center of canvas
	{
		tree1.animate( tree1.position.x-(speed * 1.5), tree1.position.y-(speed * 0.7), tree1.scale_val+(speed * 0.001) );
		tree3.animate( tree3.position.x-(speed * 2), tree3.position.y-(speed * 1.2), tree3.scale_val+(speed * 0.0035) );
		tree2.animate( tree2.position.x-(speed * 3), tree2.position.y-(speed * 1.5), tree2.scale_val+(speed * 0.005) );
	}
	else
	{
		checkpoint = true;
		tree1.animate();
		tree3.animate();
		tree2.animate();
	}
}

function drawCredit()
{
	noStroke();

	fill( skyColor["season4"] );
	rect(0, 0, width, height);

	fill( 255, 255, 255 );
	
	textFont("Arimo");
	textSize(100);
	text("RITE", 290, 130);
	text("SPRING", 630, 130);
	
	textSize(50);
	text("of", 550, 130);

	textSize(30);
	text(".................................................................................................", 250, 150);
	text(".................................................................................................", 250, 400);

	textSize(20);
	text("an interactive story", 550, 450);
	text("about the change of seasons from Winter to Spring", 400, 480);
	text("by", 400, 550);

	textSize(35);
	text("Hugo Beata & Tonson Pine", 430, 550);

	image(credit_image, 330, 150);
}

function getTree()
{
	return {
		width: 305,
		height: 550,
		scale_val: 1,
		origin: createVector( 0, 0),
		position: createVector( 0, 0),
		percentage_click: 0,
		leaf_color: [],
		setup: function(current_x, current_y, current_scale)
		{
			this.setX( current_x );
			this.setY( current_y );
			this.setScale( current_scale );

			for ( var i = 0; i < 10; i++)
			{
				var tmp_color = new Array();

				tmp_color.push( Math.round(random() * leafColor.length) );
				tmp_color.push( Math.round(random() * leafColor.length) );
				tmp_color.push( Math.round(random() * leafColor.length) );
				tmp_color.push( Math.round(random() * leafColor.length) );
				tmp_color.push( Math.round(random() * leafColor.length) );
				
				this.leaf_color.push( tmp_color );
			}
		},
		getOrigin: function()
		{
			this.origin.x = this.position.x + ((this.width * this.scale_val) / 2);
			this.origin.y = this.position.y + ((this.height * this.scale_val) / 2);

			return this.origin;
		},
		setX: function(current_x)
		{
			this.position.x = ((current_x == undefined) ? this.position.x : current_x);
		},
		setY: function(current_y)
		{
			this.position.y = ((current_y == undefined) ? this.position.y : current_y);
		},
		setScale: function(current_scale)
		{
			this.scale_val = (current_scale == undefined) ? this.scale_val : current_scale;
		},
		getWidth: function()
		{
			return this.width * this.scale_val;
		},
		getHeight: function()
		{
			return this.height * this.scale_val;
		},
		animate: function(current_x, current_y, current_scale)
		{
			this.setX( current_x );
			this.setY( current_y );
			this.setScale( current_scale );

			this.draw();
		},
		draw: function()
		{
			push();
			translate( this.position.x, this.position.y);
			scale( this.scale_val );

			noStroke();
			fill( treeColor["season" + season] );

			beginShape();
				vertex( 140, 0 );
				
				vertex( 140, 90 );
				vertex( 99, 49 );
				vertex( 80, 68 );
				vertex( 140, 128 );
				vertex( 140, 305 );
				vertex( 18, 185 );
				vertex( 0, 203 );
				vertex( 140, 340 );

				vertex( 140, 550 );
				
				vertex( 165, 550 );

				vertex( 165, 340 );
				vertex( 305, 203 );
				vertex( 287, 185 );
				vertex( 165, 305 );
				vertex( 165, 230 );
				vertex( 268, 128 );
				vertex( 248, 108 );
				vertex( 165, 195 );
				
				vertex( 165, 0 );
			endShape( CLOSE );
			pop();

			var tmp_x;
			var tmp_y;
			var size;

			if ( this.percentage_click >= 100 )
			{
				size = 0.8 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2);
				tmp_y = this.getOrigin().y-(this.getHeight()/3);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5);
				tmp_y = this.getOrigin().y-(this.getHeight()/6);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/8);
				tmp_y = this.getOrigin().y-(this.getHeight()/4);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/7);
				tmp_y = this.getOrigin().y-(this.getHeight()/5);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/9);
				tmp_y = this.getOrigin().y-(this.getHeight()/3);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 90 )
			{
				size = 0.75 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/3.456);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.56454);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/8.23423);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.4355);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/7.65345);
				tmp_y = this.getOrigin().y-(this.getHeight()/5.35234);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/9.234);
				tmp_y = this.getOrigin().y-(this.getHeight()/10.234);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/4.2345);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.3456);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 80 )
			{
				size = 0.7 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/6.456);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.56454);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5.23423);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.4355);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3.8);
				tmp_y = this.getOrigin().y-(this.getHeight()/6.34534);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/5.3456);
				tmp_y = this.getOrigin().y-(this.getHeight()/2);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5.234);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.3456);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 70 )
			{
				size = 0.65 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5.545);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.545);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/7.32);
				tmp_y = this.getOrigin().y-(this.getHeight()/9.45);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3.8);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.34);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/5.324);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.324);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/9.43);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.234);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 60 )
			{
				size = 0.55 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.545);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.545);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5.32);
				tmp_y = this.getOrigin().y-(this.getHeight()/6.45);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2.8);
				tmp_y = this.getOrigin().y-(this.getHeight()/7.34);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/5.324);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.324);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/4.43);
				tmp_y = this.getOrigin().y-(this.getHeight()/8.234);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 50 )
			{
				size = 0.4 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.1);
				tmp_y = this.getOrigin().y-(this.getHeight()/4);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/3.32);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.45);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2.8);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.34);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2.324);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.324);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/5.43);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.234);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 40 )
			{
				size = 0.25 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/3.1);
				tmp_y = this.getOrigin().y-(this.getHeight()/5);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.5);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.9);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3.4);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.3);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3.1);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.5);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2);
				tmp_y = this.getOrigin().y-(this.getHeight()/5);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 30 )
			{
				size = 0.2 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.2);
				tmp_y = this.getOrigin().y-(this.getHeight()/3);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/4.5);
				tmp_y = this.getOrigin().y-(this.getHeight()/2);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2.1);
				tmp_y = this.getOrigin().y-(this.getHeight()/6.9);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3.6);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.5);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.9);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.2);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 20 )
			{
				size = 0.15 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2);
				tmp_y = this.getOrigin().y-(this.getHeight()/3);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.9);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.3);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2);
				tmp_y = this.getOrigin().y-(this.getHeight()/3.8);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/2.9);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.8);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.2);
				tmp_y = this.getOrigin().y-(this.getHeight()/8);
				ellipse(  tmp_x, tmp_y, size, size);
			}

			if ( this.percentage_click >= 10 )
			{
				size = 0.1 * this.getWidth();
				
				fill( leafColor[this.leaf_color[0][0]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.3);
				tmp_y = this.getOrigin().y-(this.getHeight()/2);
				ellipse(  tmp_x, tmp_y, size, size);
				
				fill( leafColor[this.leaf_color[0][1]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3);
				tmp_y = this.getOrigin().y-(this.getHeight()/2.3);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][2]] );
				tmp_x = this.getOrigin().x+(this.getWidth()/3);
				tmp_y = this.getOrigin().y;
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][3]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/3.5);
				tmp_y = this.getOrigin().y-(this.getHeight()/4.5);
				ellipse(  tmp_x, tmp_y, size, size);

				fill( leafColor[this.leaf_color[0][4]] );
				tmp_x = this.getOrigin().x-(this.getWidth()/2.3);
				tmp_y = this.getOrigin().y-(this.getHeight()/3);
				ellipse(  tmp_x, tmp_y, size, size);
			}
		}
	};
}

function getMountain()
{
	return {
		position: createVector( 0, 0),
		_width: 100,
		_height: 100,
		_snow: false,
		_color1: 0,
		_color2: 0,
		_color3: 0,
		_color4: 0,
		_color5: 0,
		origin: createVector( 0, 0),
		setup: function (x, y, w, h, snow)
		{
			this.setX( x );
			this.setY( y );
			this.setWidth( w );
			this.setHeight( h );
			this.setSnow( snow );
		},
		setX: function( x )
		{
			this.position.x = (x == undefined) ? this.position.x : x;
		},
		setY: function( y )
		{
			this.position.y = (y == undefined) ? this.position.y : y;
		},
		setWidth: function( w )
		{
			this._width = (w == undefined) ? this._width : w;
		},
		setHeight: function( h )
		{
			this._height = (h == undefined) ? this._height : h;
		},
		setColor: function( c1, c2, c3, c4 )
		{
			this._color1 = c1;
			this._color2 = c2;
			this._color3 = c3;
			this._color4 = c4;
			this._color5 = c1;
		},
		setSnow: function( snow )
		{
			this._snow = (snow == undefined) ? this._snow : snow;
		},
		animate: function(x, y)
		{
			this.setX(x);
			this.setY(y);

			this.draw();
		},
		draw: function()
		{
			push();
			translate( this.position.x, this.position.y );
			noStroke();

			var left = this.position.x;
			var center = this.position.x + (this._width / 2);
			var right = this.position.x + this._width;

			var top = this.position.y;
			var bottom = this.position.y + this._height;

			fill( this["_color" + season] );
			triangle( left , bottom, right, bottom, center, top);
			
			fill( highlight );
			triangle( center, bottom, right, bottom, center, top );

			if ( this._snow && season != 4 )
			{
				var center_change = (center - left) * 0.3;
				var top_change = (bottom - top) * 0.3;

				var left_30_percentage = center - center_change;
				var right_30_percentage = center + center_change;

				var top_30_percentage = top + top_change;

				fill( 255, 255, 255, 200 );
				triangle( left_30_percentage, top_30_percentage, right_30_percentage, top_30_percentage, center, top );
			}

			pop();
		}
	}
}

function mousePressed()
{
	if ( checkpoint  && percentage_click_enable )
	{
		if ( mouseX > tree1.position.x && mouseX < tree1.position.x + tree1.getWidth() && mouseY > tree1.position.y && mouseY < tree1.position.y + tree1.getHeight() )
		{
			tree1.percentage_click += 10;
		}
		else if ( mouseX > tree2.position.x && mouseX < tree2.position.x + tree2.getWidth() && mouseY > tree2.position.y && mouseY < tree2.position.y + tree2.getHeight() )
		{
			tree2.percentage_click += 10;
		}
		else if ( mouseX > tree3.position.x && mouseX < tree3.position.x + tree3.getWidth() && mouseY > tree3.position.y && mouseY < tree3.position.y + tree3.getHeight() )
		{
			tree3.percentage_click += 10;
		}

		if ( tree1.percentage_click >= 100 && tree2.percentage_click >= 100 && tree3.percentage_click >= 100 )
		{
			percentage_click_enable = false;
		}
	}
}