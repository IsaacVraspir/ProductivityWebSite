function initLightBox(id){
	var background = document.getElementById("lightBoxBackground");
	var lightBox = document.getElementById("lightBox");
	background.style.display = "block";
	lightBox.style.display = "block";
	
	var lightPic = document.getElementById("lightPic");
	console.log(lightPic.src);
	lightPic.src = document.getElementById(id).getAttribute("src");
	console.log(lightPic.src);
}

function exitPic(){
	var background = document.getElementById("lightBoxBackground");
	var lightBox = document.getElementById("lightBox");
	background.style.display = "none";
	lightBox.style.display = "none";
}
	