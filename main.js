
var canvas = new fabric.canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
		blockImageObject = Img;

		blockImageObject.scaleTOWidth(blockImageWidth);
	    blockImageObject.scaleTOWidth(blockImageHeight);
		blockImageObject.set({
	    top:blockY,
		left:blockX
		});
		canvas.add(blockImageObject);
	});
	
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{    
		newImage('rr1.png');
		console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png');
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png');
		console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png');
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('prvack.jpg');
		console.log("i");
	}
	
}

