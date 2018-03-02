// Create a new list item when clicking on the "Add" button
var arr = [];

function newElement() {
	var obj = {
		input: null,
		dateDead: null,
		dateAdded: null,
		colorV: null,
		catV: null,
	}
	
	var li = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var value = document.createElement("value");
	
	var inputValue = document.getElementById("inputOne").value;
	var dateValue = document.getElementById("inputDate").value;
	var colorValue = document.getElementById("inputColor").value;
	var catValue = document.getElementById("CategoryPick").value;
	
	obj.input = inputValue;
	obj.colorV = colorValue;
	obj.catV = catValue;
	

	var deleteButton = document.createElement("button");
	checkBox.type = "checkbox";
	checkBox.onchange = taskCompleted;
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	deleteButton.onclick = deleteTask; //hook it up to deleteTask function
	
	var currDate = new Date();
	var todayMonth = currDate.getMonth() +1;
	var todayDay = currDate.getDate();
	var todayYear = currDate.getFullYear();
	var todayDateText = todayDay + "/" + todayMonth + "/" + todayYear;
	
	var inputToDate = Date.parse(dateValue);
	var todayToDate = Date.parse(todayDateText);
	
	//Haven't messed around with object stuff yet.
	obj.dateDead = dateValue;
	obj.dateAdded = currDate;
	
	//DATE COMPARISON
	if (inputToDate > todayToDate){
		//alert("the input is later than today");
	} else if (inputToDate < todayToDate) {
		//alert("the input is earlier than today");
	} else {
		//alert("the input is same as today");
	}
	currDate = new Date().toLocaleDateString();
	label.innerText = inputValue + " - Complete Task By: " + dateValue + " ...Date Added: " + currDate;
	
	
	li.style.backgroundColor = colorValue;
	li.appendChild(checkBox);
	li.appendChild(label);
	li.appendChild(deleteButton);
	
	if (inputValue === '') {
		alert("Need to enter something!");
	} else {
		document.getElementById(catValue).appendChild(li);
	}
	document.getElementById("inputOne").value = "";
	
	arr.push(obj);
	//console.log(obj);
	//console.log(arr);
}

function sortFun(){
	var currCat = document.getElementById("Categories").value;
	var currList = document.getElementById(currCat);
	//console.log(document.getElementById("Sorter").value);
	removeAllActual();
		
	if(document.getElementById("Sorter").value == "deadline"){
		compare(arr);
	}

	if(document.getElementById("Sorter").value == "added"){
		compareAdd(arr);
	}
	
	for(var z = 0; z < arr.length; z++){
		var li = document.createElement("li");
		var checkBox = document.createElement("input");
		var label = document.createElement("label");
		var value = document.createElement("value");
		var inputValue = arr[z].input;
		var dateValue = arr[z].dateDead;
		var colorValue = arr[z].colorV;
		var catValue = arr[z].catV;
		var dateAd = arr[z].dateAdded;
		var deleteButton = document.createElement("button");
		
		checkBox.type = "checkbox";
		checkBox.onchange = taskCompleted;
		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";
		deleteButton.onclick = deleteTask;
		
		label.innerText = inputValue + " - Complete Task By: " + dateValue + " ...Date Added: " + dateAd.toLocaleDateString();
	
		li.style.backgroundColor = colorValue;
		li.appendChild(checkBox);
		li.appendChild(label);
		li.appendChild(deleteButton);
	
		if (inputValue === '') {
			alert("Need to enter something!");
		} else {
			document.getElementById(catValue).appendChild(li);
		}
		document.getElementById("inputOne").value = "";
	}

}

function compare(a){
	var swapped;
	do {
		swapped = false;
		for(var i = 0; i < a.length-1; i++){
			if( Date.parse(a[i].dateDead) > Date.parse(a[i+1].dateDead)){
				var temp = a[i];
				a[i] = a[i+1];
				a[i+1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

function compareAdd(a){
	var swapped;
	do {
		swapped = false;
		for(var i = 0; i < a.length-1; i++){
			if( Date.parse(a[i].dateAdded) > Date.parse(a[i+1].dateAdded)){
				var temp = a[i];
				a[i] = a[i+1];
				a[i+1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}
	
//Attempted making new categories but something went wrong on the html side.
/*
function newCat(){
	var selectA = document.getElementById("CategoryPick");
	var Cat = document.createElement("option");
	var newCatInput = document.getElementById("newCatInput").value;
	console.log(newCatInput);
	
	var selectB = document.getElementById("Categories");
}
*/

//Delete a task
var deleteTask = function(){
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

//Move to completed
var taskCompleted = function(){
	var listItem = this.parentNode;
	document.getElementById("doneList").appendChild(listItem);
}

//Removes everything from all categories
function removeAllActual (){
	var z = document.getElementById("Categories");
	for(var t = 0; t < z.length; t++){
		document.getElementById(z[t].value).innerHTML = '';
	}
}

//Removes only from current category
function removeAll (){
	var z = document.getElementById("Categories").value;
	document.getElementById(z).innerHTML = '';
}

function catFun(){ //switches visibility on the categories
	var x = document.getElementById("Categories").value;
	var cat = document.getElementById("Categories");
	for(var i = 0; i < cat.length; i++){
		document.getElementById(cat.options[i].value).classList.remove('vis');
		document.getElementById(cat.options[i].value).classList.add('inv');
	}
	document.getElementById(x).classList.remove('inv');
	document.getElementById(x).classList.add('vis');
}

/* Attempted remove default todos... Problem with passing id because then the checkbox is tied to the next todo once the other is transfered.
function taskC (num){
	console.log(num);
	var ulComp = document.getElementById("myUL");
	var ulDone = document.getElementById("doneList");
	console.log(ulComp.childNodes);
	
	ulDone.appendChild(ulComp.childNodes[num]);
	//ulComp.removeChild(ulComp.childNodes[num]);
}
*/