// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Rite of Spring - Changing of the Seasons Interactive Story
//
// Hugo Baeta  [hugobaeta.com]
// Tonson Pine



function setup(){
  createCanvas( windowWidth, windowHeight );
}

function draw(){
  var ctx = document.getElementById('myCanvas').getContext('2d')
  ctx.fillStyle="rgb(193,224,235)";
  ctx.beginPath();
  ctx.moveTo(110,280);
  ctx.lineTo(-213,280);
  ctx.lineTo(-50,65);
  ctx.lineTo(110,280);
  ctx.fill();

  ctx.fillStyle="rgba(158,214,209,127)";
  ctx.beginPath();
  ctx.moveTo(-50,280);
  ctx.lineTo(-213,280);
  ctx.lineTo(-50,65);
  ctx.lineTo(-50,280);
  ctx.fill();

  ctx.fillStyle="rgba(255,255,255,191)";
  ctx.beginPath();
  ctx.moveTo(-50,65);
  ctx.lineTo(-87,114);
  ctx.lineTo(-14,114);
  ctx.lineTo(-50,65);
  ctx.fill();

  ctx.fillStyle="rgb(193,224,235)";
  ctx.beginPath();
  ctx.moveTo(-212,280);
  ctx.lineTo(-381,280);
  ctx.lineTo(-297,91);
  ctx.lineTo(-212,280);
  ctx.fill();

  ctx.fillStyle="rgb(158,214,209)";
  ctx.beginPath();
  ctx.moveTo(-297,280);
  ctx.lineTo(-297,91);
  ctx.lineTo(-381,280);
  ctx.lineTo(-297,280);
  ctx.fill();

  ctx.fillStyle="rgb(191,248,228)";
  ctx.beginPath();
  ctx.moveTo(-124,280);
  ctx.lineTo(-318,280);
  ctx.lineTo(-221,29);
  ctx.lineTo(-124,280);
  ctx.fill();

  ctx.fillStyle="rgba(191,248,228,127)";
  ctx.beginPath();
  ctx.moveTo(-221,280);
  ctx.lineTo(-318,280);
  ctx.lineTo(-221,29);
  ctx.lineTo(-221,280);
  ctx.fill();

  ctx.fillStyle="rgb(191,248,228)";
  ctx.beginPath();
  ctx.moveTo(7,280);
  ctx.lineTo(-175,280);
  ctx.lineTo(-83,146);
  ctx.lineTo(7,280);
  ctx.fill();

  ctx.fillStyle="rgb(151,240,221)";
  ctx.beginPath();
  ctx.moveTo(-83,280);
  ctx.lineTo(-175,280);
  ctx.lineTo(-83,146);
  ctx.lineTo(-83,280);
  ctx.fill();

  ctx.fillStyle="rgba(255,255,255,191)";
  ctx.beginPath();
  ctx.moveTo(-83,146);
  ctx.lineTo(-112,188);
  ctx.lineTo(-55,188);
  ctx.lineTo(-83,146);
  ctx.fill();

  ctx.fillStyle="rgb(191,248,228)";
  ctx.beginPath();
  ctx.moveTo(165,280);
  ctx.lineTo(90,280);
  ctx.lineTo(128,199);
  ctx.lineTo(165,280);
  ctx.fill();

  ctx.fillStyle="rgb(151,240,221)";
  ctx.beginPath();
  ctx.moveTo(128,280);
  ctx.lineTo(90,280);
  ctx.lineTo(128,199);
  ctx.lineTo(128,280);
  ctx.fill();

  ctx.fillStyle="rgba(255,255,255,191)";
  ctx.beginPath();
  ctx.moveTo(-221,29);
  ctx.lineTo(-261,134);
  ctx.lineTo(-180,134);
  ctx.lineTo(-221,29);
  ctx.fill();

}
