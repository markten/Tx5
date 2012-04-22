MapInitialize();
//initialization functions to prep for game
function MapInitialize(){
	Order = 1;
	Won = false;
	playern = 2;
	boardn = 4;
	timen = 0;
	help = 1;
	for(i = 0; i<5; i++){
		playertime[i] = 1000;
		playerOrder[i] = 0;
		Board5[i] = new Array(5);
		for(s = 0; s<5; s++){
			Board5[i][s] = new Array(5);
			for(p = 0; p<5; p++){
				Board5[i][s][p] = 0;
			}
		}
	}
	for(i = 0; i<4; i++){
		Board4[i] = new Array(4);
		for(s = 0; s<4; s++){
			Board4[i][s] = new Array(4);
			for(p = 0; p<4; p++){
				Board4[i][s][p] = 0;
			}
		}
	}
}
//starts the game
function Gamestart(){
	document.getElementById('gameoptions').style.left = "500px";
	document.getElementById('Game').style.left = "0px";
	BoardSetup();
	Orderdecision();
	if( playertime[1] < 950){
		Timing();
	}
	display = "Player" + playerOrder[Order]+"'s Turn";
	document.getElementById('playerturn').innerHTML = display;
}

//determines the final order of the players
function Orderdecision(){
	for( i= 1; i<=playern; i++){
		if( playerOrder[i] == 0){
			var determined = false;
			while(determined == false){
				var random = Math.floor(Math.random()*playern) + 1;
				for( s = 1; s <=playern; s++){
					if( playerOrder[s] == random){
						break;
					}
					if( s == playern){
						playerOrder[i] = random;
						determined = true;
					}
				}
			}
		}
	}
}

//sets up the board (x,y,z)
function BoardSetup(){
	total = "";
	document.getElementById("gameboard").innerHTML = "";
	if(boardn == 4){
	document.getElementById("gameboard").style.background = "url('images/board.png')";
	document.getElementById("gameboard").style.height = "320px";
	document.getElementById("gameboard").style.width = "320px";
	document.getElementById("gameboard").style.margin = "20px"
		for(i = 0; i<4; i++){
			for(s = 0; s<4; s++){
				for(p = 0; p<4; p++){
					left = (i*80 + 8);
					if( p==1 || p==3){
						left = left + 36;
					}
					topaz = (s*80 + 8);
					if( p==2 || p==3){
						topaz = topaz + 36;
					}					
					html = "<img id= 'a"+i+"b"+s+"c"+p+"' class='blanks' src='images/blank.png' onclick='Move("+i+","+s+","+p+")' style='top:"+topaz+"px;left:"+left+"px;'></img>";
					total = total + html;
				}
			}
		}
	}
	if(boardn == 5){
	document.getElementById("gameboard").style.background = "url('images/board5.png')";
	document.getElementById("gameboard").style.height = "360px";
	document.getElementById("gameboard").style.width = "360px";
	document.getElementById("gameboard").style.margin = "0px";
		for(i = 0; i<5; i++){
			for(s = 0; s<5; s++){
				for(p = 0; p<5; p++){
					left = (i*72 + 7);
					if( p==1 || p==4){
						left = left + 38;
					}
					topaz = (s*72 + 7);
					if( p==2){
						left = left+ 19;
						topaz = topaz + 19;
					}
					if( p==3 || p==4){
						topaz = topaz + 38;
					}
					zindex = 20 - p;
					html = "<img id= 'a"+i+"b"+s+"c"+p+"' class='blanks' src='images/blank.png' onclick='Move("+i+","+s+","+p+")' style='top:"+topaz+"px;left:"+left+"px;z-index:"+zindex+";height:20px;width:20px;'></img>";
					total = total + html;
				}
			}
		}	
	
	}
	document.getElementById("gameboard").innerHTML = total;
}

//executes a move for current player
function Move(a,b,c){
	if( boardn == 4){
		var move = Board4;
	}
	else{
		var move = Board5;
	}
	if(move[a][b][c] == 0){
		victoryCheck(a,b,c);
		move[a][b][c] = playerOrder[Order];
		element = "a"+a+"b"+b+"c"+c
		document.getElementById(element).src = playericon[playerOrder[Order]];
		moveChanged();
	}
}

//makes changes when a move is made
function moveChanged(){
	if( Order == playern){
		Order = 1;
	}
	else{ Order++; }
	display = "Player" + playerOrder[Order]+"'s Turn";
	document.getElementById('playerturn').innerHTML = display;
	if( playertime[playerOrder[Order]] < 950 && playertime[playerOrder[Order]] != 0){
		Timing();
	}
	if( playertime[playerOrder[Order]] == 0){
		moveChanged();
	}
}

//controls timing 
function Timing(){
	going = true;
	if( playertime[playerOrder[Order]] == 0){
		moveChanged();
		TVictorycheck();
		going = false;
	}
	if( playertime[playerOrder[Order]] == 1000){
		document.getElementById('playertime').innerHTML = "Infinite Time";
	}
	if( going == true && playertime[playerOrder[Order]] < 950 ){
		var min = Math.floor(playertime[playerOrder[Order]]/60);
		var sec = playertime[playerOrder[Order]] % 60;
		if( sec < 10){
			sec = "0" + sec;
		}
		display = min + " : " + sec;
		document.getElementById('playertime').innerHTML = display;
		clearTimeout(Timer);
		Timer=self.setTimeout("Timing()",1000);
		playertime[playerOrder[Order]]--;
	}

}

//TVictory Check


//checks to determine if the victory condition is met
function victoryCheck(a,b,c){
	if( boardn == 4){
		var move = Board4;
		var type = 4
	}
	else{
		var move = Board5;
		var type = 5
	}
	//victory conditions
		for ( i = 1; i<type ; ++i){
			change = a + i;
			if (change >= type){
				change = change - type;
			}
			if ( move[change][b][c] != playerOrder[Order]){
				break;
			}
			if ( i == (type-1)){
				victory();
			}
		}
		for ( i = 1; i<type ; ++i){
			change = b + i;
			if (change >= type){
				change = change - type;
			}
			if ( move[a][change][c] != playerOrder[Order]){
				break;
			}
			if ( i == (type-1)){
				victory();
			}
		}
		for ( i = 1; i<type ; ++i){
			change = c + i;
			if (change >= type){
				change = change - type;
			}
			if ( move[a][b][change] != playerOrder[Order]){
				break;
			}
			if ( i == (type-1)){
				victory();
			}
		}
		if ( a+c == (type-1)){
			for ( i = 1; i< type ; ++i){
				changeA = a + i;
				changeC = c - i;
				if( changeA >= type ){
					changeA = changeA - type;
				}
				if( changeC < 0){
					changeC = changeC + type;
				}
				if (move[changeA][b][changeC] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( a == c){
			for ( i = 1; i< type ; ++i){
				change = a + i;
				if( change >= type){
					change = change - type;
				}
				if (move[change][b][change] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( b+c == (type-1)){
			for ( i = 1; i< type ; ++i){
				changeB = b + i;
				changeC = b - i;
				if( changeB >= type){
					changeB = changeB - type;
				}
				if( changeC < 0){
					changeC = changeC + type;
				}
				if (move[a][changeB][changeC] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( b == c){
			for ( i = 1; i< type ; ++i){
				change = b + i;
				if( change >= type){
					change = change - type;
				}
				if (move[a][change][change] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( a+b == (type-1)){
			for ( i = 1; i< type ; ++i){
				changeA = b + i;
				changeB = b - i;
				if( changeA >= type){
					changeA = changeA - type;
				}
				if( changeB < 0){
					changeB = changeB + type;
				}
				if (move[changeA][changeB][c] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if (a == b){
			for (i = 1; i< type ; ++i){
				change = a + i;
				if( change >= type){
					change = change - type;
				}
				if (move[change][change][c] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( a == b && a == c){
			for ( i = 1; i< type ; ++i){
				change = a + i;
				if( change >= type){
					change = change - type;
				}
				if (move[change][change][change] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( a==b && b + c == (type-1)){
			for ( i = 1; i< type ; ++i){
				change = a + i;
				changeC = c - i;
				if( change >= type ){
					change = change - type;
				}
				if( changeC < 0){
					changeC = changeC + type;
				}
				if (move[change][change][changeC] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( a==c && a + b == (type-1)){
			for ( i = 1; i< type ; ++i){
				change = a + i;
				changeB = b - i;
				if( change >= type ){
					change = change - type;
				}
				if( changeB < 0){
					changeB = changeB + type;
				}
				if (move[change][changeB][change] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}
		if ( b==c && a + b == (type-1)){
			for ( i = 1; i< type ; ++i){
				change = b + i;
				changeA = a - i;
				if( change >= type ){
					change = change - type;
				}
				if( changeA < 0){
					changeA = changeA + type;
				}
				if (move[changeA][change][change] != playerOrder[Order]){
					break;
				}
				if ( i == (type-1)){
					victory();
				}
			}
		}			
}

function victory(){
	alert("Victory for Player"+playerOrder[Order]);
}