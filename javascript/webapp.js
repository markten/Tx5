var button = "null";
var Order;
var Won;
var Timer;
var help;

var playern; //player variable
var boardn; //board number variable
var timen; //time variable

//time for each player
var playertime = new Array(5);
//PLayerOrder is an array that if you plug in the player it displays the order that they are in
var playerOrder= new Array(5);
//array of moves for board 4x4x4
var Board4 = new Array(4);
//array of moves for board 5x5x5
var Board5 = new Array(5);

//player icons for each player
var playericon = new Array(5);
	playericon[1] = "images/X.png";
	playericon[2] = "images/O.png";
	playericon[3] = "images/mark.png";
	playericon[4] = "images/Markicon.png";

//button presses down
function beveldown(id){
	document.getElementById(id).style.borderLeftColor = "#7c0f0a";
	document.getElementById(id).style.borderRightColor = "#952823";
	document.getElementById(id).style.borderTopColor = "#700300";
	document.getElementById(id).style.borderBottomColor = "#a23530";
	document.getElementById(id).style.backgroundColor = "700300";
	button = id;
}

//button goes back up on opposing mouse press
function bevelup(){
	if( button != "null"){
	document.getElementById(button).style.borderLeftColor = "#952823";
	document.getElementById(button).style.borderRightColor = "#7c0f0a";
	document.getElementById(button).style.borderTopColor = "#a23530";
	document.getElementById(button).style.borderBottomColor = "#700300";
	document.getElementById(button).style.backgroundColor = "#891c17";
	button = "null";
	}
}

//shows gamestart option
function gameostart(){
	document.getElementById('menu').style.visibility = "hidden";
	document.getElementById('gameoptions').style.left = "0px";
	document.getElementById('playernmove').style.top = "0px";
	document.getElementById('timenmove').style.top = "0px";
	document.getElementById('boardnmove').style.top = "0px";
	Pchange();
}

//returns to the mainpage
function mainpage(){
	document.getElementById('menu').style.visibility = "visible";
	document.getElementById('gameoptions').style.left = "500px";
	document.getElementById('Game').style.left = "500px";
	document.getElementById('Help').style.left = "500px";
	document.getElementById('helpbar').style.marginLeft = "0px";
	MapInitialize();
}

function helpstart(){
	document.getElementById('menu').style.visibility = "hidden";
	document.getElementById('Help').style.left = "0px";
}

function NextHelp(){
	move = -help*400 + "px"
	document.getElementById('helpbar').style.marginLeft = move;
	help++;
}