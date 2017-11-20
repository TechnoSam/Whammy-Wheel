
// -------------------------------------------------------------------------------------------
// Customizations:

// WHAMMY substitute name
var WHAMMY_TEXT = "ZONK"

// Point values
// Each of these represents a sector on the wheel
var POINTS_1 = WHAMMY_TEXT;
var POINTS_2 = "500";
var POINTS_3 = "50";
var POINTS_4 = "100";
var POINTS_5 = "150";
var POINTS_6 = "200";
var POINTS_7 = WHAMMY_TEXT;
var POINTS_8 = "200";
var POINTS_9 = "150";
var POINTS_10 = "100";
var POINTS_11 = "50";
var POINTS_12 = "250";

// Colors
// Each of these represents a sector on the wheel
var COLOR_1 = "red";
var COLOR_2 = "orange";
var COLOR_3 = "yellow";
var COLOR_4 = "blue";
var COLOR_5 = "green";
var COLOR_6 = "purple";
var COLOR_7 = "red";
var COLOR_8 = "orange";
var COLOR_9 = "yellow";
var COLOR_10 = "blue";
var COLOR_11 = "green";
var COLOR_12 = "purple";

// Spin Parameters
// Adjusting these numbers affect how the wheel behaves while spinning
// The time the wheel will spin in seconds
var SPIN_TIME_SEC = 5;
// The minimum number of complete spins
var NUM_SPINS = 2;

// -----------------------------------------------------------------------------------------

$(document).ready(main)

// Global Variables
// Bad practice, but oh well

var wheel;

function main() {
	
	buildDOM();
	
}

function drawTriangle()
{
	// Get the canvas context the wheel uses.
	var ctx = wheel.ctx;

	ctx.strokeStyle = 'black';     // Set line colour.
	ctx.fillStyle   = 'yellow';     // Set fill colour.
	ctx.lineWidth   = 2;
	ctx.beginPath();              // Begin path.
	ctx.moveTo(290, -10);           // Move to initial position.
	ctx.lineTo(350, -10);           // Draw lines to make the shape.
	ctx.lineTo(320, 15);
	ctx.lineTo(291, -10);
	ctx.stroke();                 // Complete the path by stroking (draw lines).
	ctx.fill();                   // Then fill.
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
	girlsScoreList.id = "girlsScoreList";
	girlsScoreList.height = "640";
	girlsScoreList.align = "center";
	girlsScoreList.className = "scroll-list"
	girlsDiv.appendChild(girlsScoreList);
	girlsDiv.appendChild(document.createElement("hr"));
	girlsScoreDiv = document.createElement("div");
	girlsScoreDiv.id = "girlsScoreDiv"
	girlsDiv.appendChild(girlsScoreDiv);
	var girlsMinusBtn = document.createElement("button");
	girlsMinusBtn.id = "girlsMinusBtn";
	girlsMinusBtn.className = "inline";
	girlsMinusBtn.valign = "center";
	girlsMinusBtn.innerHTML = "-";
	girlsMinusBtn.title = "Remove the last score";
	girlsMinusBtn.onclick = function() { editMinus("girls"); };
	girlsScoreDiv.appendChild(girlsMinusBtn);
	var girlsScore = document.createElement("p");
	girlsScore.id = "#girlsScore";
	girlsScore.className = "inline";
	girlsScore.style = "font-size: 48px; margin: 0px; padding: 5px;";
	girlsScore.innerHTML = "0";
	girlsScoreDiv.appendChild(girlsScore);
	var girlsPlusBtn = document.createElement("button");
	girlsPlusBtn.id = "girlsPlusBtn";
	girlsPlusBtn.className = "inline";
	girlsPlusBtn.innerHTML = "+";
	girlsPlusBtn.title = "Add a score";
	girlsPlusBtn.onclick = function() { var p = prompt("Enter a point value or " + WHAMMY_TEXT); if (p) { addPts("girls", p); } };
	girlsScoreDiv.appendChild(girlsPlusBtn);
	var girlsSpinBtn = document.createElement("button");
	girlsSpinBtn.style = "padding: 5px";
	girlsSpinBtn.innerHTML = "Spin For Girls"
	girlsSpinBtn.onclick = function () { spin("girls"); };
	girlsDiv.appendChild(girlsSpinBtn);
	
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
	boysScoreList.id = "boysScoreList";
	boysScoreList.height = "640";
	boysScoreList.align = "center";
	boysScoreList.className = "scroll-list"
	boysDiv.appendChild(boysScoreList);
	boysDiv.appendChild(document.createElement("hr"));
	boysScoreDiv = document.createElement("div");
	boysScoreDiv.id = "boysScoreDiv"
	boysDiv.appendChild(boysScoreDiv);
	var boysMinusBtn = document.createElement("button");
	boysMinusBtn.id = "boysMinusBtn";
	boysMinusBtn.className = "inline";
	boysMinusBtn.valign = "center";
	boysMinusBtn.innerHTML = "-";
	boysMinusBtn.title = "Remove the last score";
	boysMinusBtn.onclick = function() { editMinus("boys"); };
	boysScoreDiv.appendChild(boysMinusBtn);
	var boysScore = document.createElement("p");
	boysScore.id = "#boysScore";
	boysScore.className = "inline";
	boysScore.style = "font-size: 48px; margin: 0px; padding: 5px;";
	boysScore.innerHTML = "0";
	boysScoreDiv.appendChild(boysScore);
	var boysPlusBtn = document.createElement("button");
	boysPlusBtn.id = "boysPlusBtn";
	boysPlusBtn.className = "inline";
	boysPlusBtn.innerHTML = "+";
	boysPlusBtn.title = "Add a score";
	boysPlusBtn.onclick = function() { var p = prompt("Enter a point value or " + WHAMMY_TEXT); if (p) { addPts("boys", p); } };
	boysScoreDiv.appendChild(boysPlusBtn);
	var boysSpinBtn = document.createElement("button");
	boysSpinBtn.style = "padding: 5px";
	boysSpinBtn.innerHTML = "Spin For Boys"
	boysSpinBtn.onclick = function () { spin("boys"); };
	boysDiv.appendChild(boysSpinBtn);
	
	mainDiv.appendChild(girlsDiv);
	mainDiv.appendChild(wheelCanvas);
	mainDiv.appendChild(boysDiv);
	
	wheel = new Winwheel({
		'canvasId': '#wheelCanvas',
		'numSegments': 12,
		'drawText': true,
		'textOrientation': 'curved',
		'textAlignment': 'outer',
		'textFontFamily': 'Courier',
		'textFontSize': 24,
		'imageOverlay': true,
		'lineWidth': 4,
		'strokeStyle': 'black',
		'segments':
		[
		   {'text': POINTS_1, 'fillStyle': COLOR_1},
		   {'text': POINTS_2, 'fillStyle': COLOR_2},
		   {'text': POINTS_3, 'fillStyle': COLOR_3},
		   {'text': POINTS_4, 'fillStyle': COLOR_4},
		   {'text': POINTS_5, 'fillStyle': COLOR_5},
		   {'text': POINTS_6, 'fillStyle': COLOR_6},
		   {'text': POINTS_7, 'fillStyle': COLOR_7},
		   {'text': POINTS_8, 'fillStyle': COLOR_8},
		   {'text': POINTS_9, 'fillStyle': COLOR_9},
		   {'text': POINTS_10, 'fillStyle': COLOR_10},
		   {'text': POINTS_11, 'fillStyle': COLOR_11},
		   {'text': POINTS_12, 'fillStyle': COLOR_12}
		],
		'animation' :           // Specify the animation to use.
		{
			'type'     : 'spinToStop',
			'duration' : SPIN_TIME_SEC,     // Duration in seconds.
			'spins'    : NUM_SPINS,     // Number of complete spins.
			//'easing': 'easeOutQuad',
			'callbackFinished' : 'doneSpinning()',
			'callbackAfter': 'drawTriangle()'
		}
    });
	
	wheel.segments[1].textFillStyle = 'white';
	wheel.segments[1].textStrokeStyle = 'black';
	wheel.segments[1].textLineWidth = '5';
	
	wheel.segments[2].textFillStyle = 'white';
	wheel.segments[2].textStrokeStyle = 'black';
	wheel.segments[2].textLineWidth = '5';
	
	wheel.segments[3].textFillStyle = 'white';
	wheel.segments[3].textStrokeStyle = 'black';
	wheel.segments[3].textLineWidth = '5';
	
	wheel.segments[4].textFillStyle = 'white';
	wheel.segments[4].textStrokeStyle = 'black';
	wheel.segments[4].textLineWidth = '5';
	
	wheel.segments[5].textFillStyle = 'white';
	wheel.segments[5].textStrokeStyle = 'black';
	wheel.segments[5].textLineWidth = '5';
	
	wheel.segments[6].textFillStyle = 'white';
	wheel.segments[6].textStrokeStyle = 'black';
	wheel.segments[6].textLineWidth = '5';
	
	wheel.segments[7].textFillStyle = 'white';
	wheel.segments[7].textStrokeStyle = 'black';
	wheel.segments[7].textLineWidth = '5';
	
	wheel.segments[8].textFillStyle = 'white';
	wheel.segments[8].textStrokeStyle = 'black';
	wheel.segments[8].textLineWidth = '5';
	
	wheel.segments[9].textFillStyle = 'white';
	wheel.segments[9].textStrokeStyle = 'black';
	wheel.segments[9].textLineWidth = '5';
	
	wheel.segments[10].textFillStyle = 'white';
	wheel.segments[10].textStrokeStyle = 'black';
	wheel.segments[10].textLineWidth = '5';
	
	wheel.segments[11].textFillStyle = 'white';
	wheel.segments[11].textStrokeStyle = 'black';
	wheel.segments[11].textLineWidth = '5';
	
	wheel.segments[12].textFillStyle = 'white';
	wheel.segments[12].textStrokeStyle = 'black';
	wheel.segments[12].textLineWidth = '5';
	
	wheel.draw();
	
}

function editMinus(team) {
	
	if (team !== "boys" && team !== "girls") {
		console.log("Unrecognized team: " + team);
		return;
	}
	
	$("#" + team + "ScoreList li:last").remove();
	updateScores();
	
}

function addPts(team, pts) {
	
	if (team !== "boys" && team !== "girls") {
		console.log("Unrecognized team: " + team);
		return;
	}
	
	var listId = team + "ScoreList"
	var scoreList = document.getElementById(listId);
	var points = document.createElement("li");
	points.innerHTML = pts;
	scoreList.append(points);
	$("#" + listId).animate({scrollTop: $("#" + listId).prop("scrollHeight")}, 500);
	updateScores();
	
}

function updateScores() {
	
	var teams = ["girls", "boys"];
	teams.forEach(function(team) {
		
		var score = 0;
		var pts = document.getElementById(team + "ScoreList").getElementsByTagName("li");
		for (var i = 0, len = pts.length; i < len; i++ ) {
			value = pts[i].innerHTML;
			if (value === WHAMMY_TEXT) {
				score = 0;
			}
			else {
				score += parseInt(value);
			}
		}
		
		var scoreElem = document.getElementById("#" + team + "Score");
		scoreElem.innerHTML = score;
		
	});
	
	console.log("Scores updated");
	
}

var currTeam;

function spin(team) {
	
	if (team !== "boys" && team !== "girls") {
		console.log("Unrecognized team: " + team);
		return;
	}
	
	currTeam = team;
	
	console.log("Spinning for " + team);
	
	console.log("Resetting Wheel");
	wheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    wheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    wheel.draw();
	
	console.log("Starting animation");
	wheel.startAnimation();
	
}

function doneSpinning() {
	
	console.log("Done spinning for " + currTeam);
	var winningSegment = wheel.getIndicatedSegment();
    
	addPts(currTeam, winningSegment.text);
	
}
