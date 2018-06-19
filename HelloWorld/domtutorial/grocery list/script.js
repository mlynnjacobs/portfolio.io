var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');
var list = document.getElementById("list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var delbtn = document.createElement("button");
	delbtn.appendChild(document.createTextNode("\u00D7"));
	li.appendChild(delbtn);
	deleteListItem();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(item) {
    item.target.classList.toggle('done');
}

function deleteListItem() {
	var button = document.querySelectorAll('li button');
	for (i=0; i<button.length; i++){
		button[i].addEventListener('click', clearElement);
	}
}

function clearElement(){
	for(var i=0; i<li.length; i++){
		this.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
list.addEventListener("click", markDone);