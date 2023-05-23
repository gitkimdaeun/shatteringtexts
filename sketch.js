
var texts = "Hope is only the love of life.";
var chars = [];
var up, down; 

function setup()
{
  createCanvas(windowWidth, windowHeight);
  chars = texts.split('');

}

function draw()
{
  background(255, 255, 255); 
  for (var i = 0; i < chars.length; i++)
    {
      text(chars[i], mouseX+i*10, random(mouseY - 5, mouseY + 5));
    }
    
}

function windowResized() 
{ 
  resizeCanvas(windowWidth, windowHeight);
}