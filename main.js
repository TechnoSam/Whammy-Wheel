
$(document).ready(main)

// Global Variables
// Bad practice, but oh well

var wheel;

function main() {
	
	buildDOM();
	
}

function buildDOM() {
	
	wheel = new Winwheel({
		'drawMode': 'image',
		'numSegments': 12,
		'drawText': true,
		'textOrientation': 'curved',
		'textAlignment': 'outer',
		'textFontFamily': 'Courier',
		'textFontSize': 24,
		'imageOverlay': true,
		'lineWidth': 4,
		'strokeStyle': 'white',
		'segments':
		[
		   {'text': 'WHAMMY'},
		   {'text': '500'},
		   {'text': '50'},
		   {'text': '100'},
		   {'text': '150'},
		   {'text': '200'},
		   {'text': 'WHAMMY'},
		   {'text': '200'},
		   {'text': '150'},
		   {'text': '100'},
		   {'text': '50'},
		   {'text': '250'}
		],
		'animation' :           // Specify the animation to use.
		{
			'type'     : 'spinToStop',
			'duration' : 15,     // Duration in seconds.
			'spins'    : 3,     // Number of complete spins.
			//'easing': 'easeOutQuad',
			'callbackFinished' : 'doneSpinning()'
		}
    });
	
	wheel.segments[1].textFillStyle = '#FFFF00';
	wheel.segments[2].textFillStyle = '#FFFF00';
	wheel.segments[3].textFillStyle = '#FFFF00';
	wheel.segments[4].textFillStyle = '#FFFF00';
	wheel.segments[5].textFillStyle = '#FFFF00';
	wheel.segments[6].textFillStyle = '#FFFF00';
	wheel.segments[7].textFillStyle = '#FFFF00';
	wheel.segments[8].textFillStyle = '#FFFF00';
	wheel.segments[9].textFillStyle = '#FFFF00';
	wheel.segments[10].textFillStyle = '#FFFF00';
	wheel.segments[11].textFillStyle = '#FFFF00';
	wheel.segments[12].textFillStyle = '#FFFF00';
			
	var wheelImg = new Image();
	wheelImg.onload = function() {
		wheel.wheelImage = wheelImg;
		wheel.draw();
		console.log("Loaded image");
	}
	wheelImg.src = "globe2.png";
			
	var spinButton = document.createElement("button");
	spinButton.innerHTML = "Spin!"
	spinButton.onclick = spin
	document.body.appendChild(spinButton);
	
}

function spin() {
	
	console.log("Spinning");
	
	console.log("Resetting Wheel");
	wheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    wheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    wheel.draw();
	
	console.log("Starting animation");
	wheel.startAnimation();
	
}

function doneSpinning() {
	
	console.log("Done!");
	var winningSegment = wheel.getIndicatedSegment();
                
    alert("You have won " + winningSegment.text);
	
}
