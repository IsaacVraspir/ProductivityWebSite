var currId;

function initLightBox(id){
	var background = document.getElementById("lightBoxBackground");
	var lightBox = document.getElementById("lightBox");
	background.style.display = "block";
	lightBox.style.display = "block";
	
	var lightPic = document.getElementById("lightPic");
	var prevOpacity = document.getElementById("prev");
	prevOpacity.style.opacity = 1;
	var nextOpacity = document.getElementById("next");
	nextOpacity.style.opacity = 1;
	lightPic.src = document.getElementById(id).getAttribute("src");
	currId = id;
}

function exitPic(){
	var background = document.getElementById("lightBoxBackground");
	var lightBox = document.getElementById("lightBox");
	background.style.display = "none";
	lightBox.style.display = "none";
	
	var prevOpacity = document.getElementById("prev");
	prevOpacity.style.opacity = 0;
	var nextOpacity = document.getElementById("next");
	nextOpacity.style.opacity = 0;
}

function initLightBoxNext(){
	if(currId == 20){
		currId = 1;
	}
	else{
		currId++;
	}
	initLightBox(currId);
}

function initLightBoxPrev(){
	if(currId == 1){
		currId = 20;
	}
	else{
		currId--;
	}
	initLightBox(currId);
}

	