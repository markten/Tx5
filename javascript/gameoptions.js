//Player Selector
function Ppick(id){
	if( document.getElementById('playern').style.overflow == "visible"){
		mod = (2 - id)*30 + "";
		document.getElementById('playernmove').style.top = mod;
		document.getElementById('playern').style.overflow = "hidden";
		playern = id;
		Pchange();
	}
	else{
		document.getElementById('playern').style.overflow = "visible";
		document.getElementById('playernmove').style.top = "0";
	}
}

//changes the number and layout of Player boxes in player number switches
function Pchange(){
	Pnumberorder();
	if(playern == 2){
		for( i = 1; i<5; i++){
			document.getElementById("playerbranch").style.width = "750px";
			playerbox = "player" + i + "box";
			document.getElementById(playerbox).className = document.getElementById(playerbox).className.replace( /(?:^|\s)pbox2(?!\S)/ , 'pbox' );
			picon = "picon" + i;
			document.getElementById(picon).className = document.getElementById(picon).className.replace( /(?:^|\s)icon2(?!\S)/ , 'icon' );
			ptitle = "ptitle" + i;
			document.getElementById(ptitle).className = document.getElementById(ptitle).className.replace( /(?:^|\s)playertitle(?!\S)/ , 'text' );
			if(timen == 4){
				timetext = "timetext" + i;
				document.getElementById(timetext).style.visibility = "visible";
				timeo = "timeo" + i;
				document.getElementById(timeo).style.visibility = "visible";
				document.getElementById(timeo).style.top = "0px";
			}
			checkbar = "checkbar" + i;
			document.getElementById(checkbar).style.top = "26px";
			pc3 = "p" + i + "check3";
			document.getElementById(pc3).style.visibility = "hidden";
			pc4 = "p" + i + "check4";
			document.getElementById(pc4).style.visibility = "hidden";
			document.getElementById("player4box").style.visibility = "visible";
		}
	}
	if(playern == 3){
		for( i = 1; i<5; i++){
			document.getElementById("playerbranch").style.width = "450px";
			playerbox = "player" + i + "box";
			document.getElementById(playerbox).className = document.getElementById(playerbox).className.replace( /(?:^|\s)pbox(?!\S)/ , 'pbox2' );
			picon = "picon" + i;
			document.getElementById(picon).className = document.getElementById(picon).className.replace( /(?:^|\s)icon(?!\S)/ , 'icon2' );
			ptitle = "ptitle" + i;
			document.getElementById(ptitle).className = document.getElementById(ptitle).className.replace( /(?:^|\s)text(?!\S)/ , 'playertitle' );
			timetext = "timetext" + i;
			document.getElementById(timetext).style.visibility = "hidden";
			if(timen == 4){
				timeo = "timeo" + i;
				document.getElementById(timeo).style.visibility = "visible";
				document.getElementById(timeo).style.top = "-36px";
			}
			checkbar = "checkbar" + i;
			document.getElementById(checkbar).style.top = "-32px";
			pc3 = "p" + i + "check3";
			document.getElementById(pc3).style.visibility = "visible";
			pc4 = "p" + i + "check4";
			document.getElementById(pc4).style.visibility = "hidden";
			document.getElementById("p4check3").style.visibility = "hidden";
			document.getElementById("player4box").style.visibility = "hidden";
			document.getElementById("timeo4").style.visibility = "hidden";
		}
	}
	if(playern == 4){
		for( i = 1; i<5; i++){
			document.getElementById("playerbranch").style.width = "450px";
			playerbox = "player" + i + "box";
			document.getElementById(playerbox).className = document.getElementById(playerbox).className.replace( /(?:^|\s)pbox(?!\S)/ , 'pbox2' );
			picon = "picon" + i;
			document.getElementById(picon).className = document.getElementById(picon).className.replace( /(?:^|\s)icon(?!\S)/ , 'icon2' );
			ptitle = "ptitle" + i;
			document.getElementById(ptitle).className = document.getElementById(ptitle).className.replace( /(?:^|\s)text(?!\S)/ , 'playertitle' );
			timetext = "timetext" + i;
			document.getElementById(timetext).style.visibility = "hidden";
			if(timen == 4){
				timeo = "timeo" + i;
				document.getElementById(timeo).style.visibility = "visible";
				document.getElementById(timeo).style.top = "-36px";
			}
			checkbar = "checkbar" + i;
			document.getElementById(checkbar).style.top = "-32px";
			pc3 = "p" + i + "check3";
			document.getElementById(pc3).style.visibility = "visible";
			pc4 = "p" + i + "check4";
			document.getElementById(pc4).style.visibility = "visible";
			document.getElementById("player4box").style.visibility = "visible";
		}
	}
}

//makes sure that the players can be ordered properly
function Pnumberorder(){
	for( i = 1; i<5; i++){
		playerOrder[i] = 0;
		for( s = 1; s<5; s++){
			checked = "p" + i + "check" + s;
			document.getElementById(checked).style.borderLeftColor = "#952823";
			document.getElementById(checked).style.borderRightColor = "#7c0f0a";
			document.getElementById(checked).style.borderTopColor = "#a23530";
			document.getElementById(checked).style.borderBottomColor = "#700300";		
		}
		checking = "p" + i + "check0";
		document.getElementById(checking).style.borderColor = "#891c17";
	}
}

//Board Selector
function Bpick(id){
	if( document.getElementById('boardn').style.overflow == "visible"){
		mod = (4 - id)*30 + "";
		document.getElementById('boardnmove').style.top = mod;
		document.getElementById('boardn').style.overflow = "hidden";
		boardn = id;
	}
	else{
		document.getElementById('boardn').style.overflow = "visible";
		document.getElementById('boardnmove').style.top = "0";
	}
}

//Time Selector in game options
function Tpick(id){
	if( document.getElementById('timen').style.overflow == "visible"){
		mod = (0 - id)*30 + "";
		document.getElementById('timenmove').style.top = mod;
		document.getElementById('timen').style.overflow = "hidden";
		timen = id;
		for(i=1; i<=playern; i++){//sets the players time based on their id
			if( id == 0){
				playertime[i] = 1000;
			}
			if( id == 1){
				playertime[i] = 60;
			}
			if( id == 2){
				playertime[i] = 120;
			}
			if( id == 3){
				playertime[i] = 300;
			}
		}
	}
	else{
		document.getElementById('timen').style.overflow = "visible";
		document.getElementById('timenmove').style.top = "0";
	}
	for ( i = 1 ; i <= 4; i++){//sets the time text visible depending on players
		if( id == 4){
			timeo = "timeo" + i;
			document.getElementById(timeo).style.visibility = "visible";
			if( playern != 2){
				timetext = "timetext" + i;
				document.getElementById(timetext).style.visibility = "visible";
			}
		}
		else{
			timeo = "timeo" + i;
			document.getElementById(timeo).style.visibility = "hidden";
			timetext = "timetext" + i;
			document.getElementById(timetext).style.visibility = "hidden";
		}
	}
	Pchange();
}


function customTime(){
	for ( i = 1 ; i <= 4; i++){
		timeo = "timeo" + i;
		document.getElementById("timeo").style.visibility = "visible"
	
	}
}

//Player Order
function order(p,n){
	if(playerOrder[n] == 0 || n == 0){
		mark = 0;
		for( i = 1; i<=playern; i++){
			if(playerOrder[i] == p){
				mark = i;
				playerOrder[i] = 0;
			}
		}
		checked = "p"  + p + "check" + mark;
		document.getElementById(checked).style.borderLeftColor = "#952823";
		document.getElementById(checked).style.borderRightColor = "#7c0f0a";
		document.getElementById(checked).style.borderTopColor = "#a23530";
		document.getElementById(checked).style.borderBottomColor = "#700300";
		checking = "p" + p + "check" + n;
		document.getElementById(checking).style.borderColor = "#891c17";
		playerOrder[n] = p;
	}
}