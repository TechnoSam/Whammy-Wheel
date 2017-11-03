
$(document).ready(main)

// Global Variables
// Bad practice, but oh well

var wheel;

function main() {
	
	buildDOM();
	
}

function buildDOM() {
	
	var mainDiv = document.createElement("div");
	mainDiv.id = "#mainDiv";
	mainDiv.width = "1920";
	mainDiv.height = "1920";
	mainDiv.align = "center";
	mainDiv.valign = "center";
	document.body.appendChild(mainDiv);
	
	var wheelCanvas = document.createElement("canvas");
	wheelCanvas.id = "#wheelCanvas";
	wheelCanvas.width = "640";
	wheelCanvas.height = "640";
	wheelCanvas.className = "inline"
	var wheelCanvasErrorP = document.createElement("p");
	wheelCanvasErrorP.style = "{color: white}";
	wheelCanvasErrorP.align = "center"
	wheelCanvasErrorP.innerHTML = "Sorry, your browser doesn't support canvas. Please try another.";
	wheelCanvas.appendChild(wheelCanvasErrorP);
	
	var girlsDiv = document.createElement("div");
	girlsDiv.id = "#girlsDiv";
	girlsDiv.width = "480";
	girlsDiv.height = "640";
	girlsDiv.className = "inline girls"
	var girlsTitle = document.createElement("p");
	girlsTitle.id = "#girlsTitle";
	girlsTitle.style = "font-size: 24px; margin: 0px; padding: 5px;";
	girlsTitle.innerHTML = "Girls";
	girlsDiv.appendChild(girlsTitle);
	var girlsScoreList = document.createElement("ul");
	girlsScoreList.id = "#girlsScoreList";
	girlsScoreList.height = "640";
	girlsScoreList.align = "center";
	girlsScoreList.className = "scroll-list"
	girlsDiv.appendChild(girlsScoreList);
	girlsDiv.appendChild(document.createElement("hr"));
	var girlsScore = document.createElement("p");
	girlsScore.id = "#girlsScore";
	girlsScore.style = "font-size: 48px; margin: 0px; padding: 5px;";
	girlsScore.innerHTML = "0";
	girlsDiv.appendChild(girlsScore);
	var girlsSpinBtn = document.createElement("button");
	girlsSpinBtn.style = "padding: 5px";
	girlsSpinBtn.innerHTML = "Spin For Girls"
	girlsDiv.appendChild(girlsSpinBtn);
	
	for (i = 0; i < 30; i++) {
		var testItem = document.createElement("li");
		testItem.innerHTML = "Test " + i;
		girlsScoreList.appendChild(testItem);
	}
	
	var boysDiv = document.createElement("div");
	boysDiv.id = "#boysDiv";
	boysDiv.width = "480";
	boysDiv.height = "640";
	boysDiv.className = "inline boys"
	var boysTitle = document.createElement("p");
	boysTitle.id = "#boysTitle";
	boysTitle.style = "font-size: 24px; margin: 0px; padding: 5px;";
	boysTitle.innerHTML = "Boys";
	boysDiv.appendChild(boysTitle);
	var boysScoreList = document.createElement("ul");
	boysScoreList.id = "#boysScoreList";
	boysScoreList.height = "640";
	boysScoreList.align = "center";
	boysScoreList.className = "scroll-list"
	boysDiv.appendChild(boysScoreList);
	boysDiv.appendChild(document.createElement("hr"));
	var boysScore = document.createElement("p");
	boysScore.id = "#boysScore";
	boysScore.style = "font-size: 48px; margin: 0px; padding: 5px;";
	boysScore.innerHTML = "0";
	boysDiv.appendChild(boysScore);
	var boysSpinBtn = document.createElement("button");
	boysSpinBtn.style = "padding: 5px";
	boysSpinBtn.innerHTML = "Spin For Boys"
	boysDiv.appendChild(boysSpinBtn);
	
	mainDiv.appendChild(girlsDiv);
	mainDiv.appendChild(wheelCanvas);
	mainDiv.appendChild(boysDiv);
	
	wheel = new Winwheel({
		'canvasId': '#wheelCanvas',
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
