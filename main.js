
$(document).ready(main)

// Global Variables
// Bad practice, but oh well

var wheel;

function main() {
	
	buildDOM();
	
}

function buildDOM() {
	
	wheel = new Winwheel({
                'numSegments'  : 8,     // Specify number of segments.
                'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
                'textFontSize' : 28,    // Set font size as desired.
                'segments'     :        // Define segments including colour and text.
                [
                   {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
                   {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
                   {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
                   {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
                ],
                'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,     // Duration in seconds.
                    'spins'    : 8,     // Number of complete spins.
                    'callbackFinished' : 'doneSpinning()'
                }
            });
			
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
