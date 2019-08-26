var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// if input has value return 1 
function inputLength() {
	return input.value.length;
}
function createListElement() {
// new button and li create 
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
// add class to button
	delBtn.classList.add("delete");
// add new list end of the unordered list
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("text");	
// when click on list item execute this function
	li.addEventListener("click", overClick);
// clear input value
	input.value = "";
//write value on new button , add it end of li tag 
	delBtn.innerHTML = "Delete";
	li.appendChild(delBtn);
// when click delete button remove this line
	delBtn.addEventListener("click" , removeItem);
}
// remove list function
function removeItem (){
	this.parentNode.remove();
}
// click on List item happens
function overClick(){
	this.classList.toggle("done");

}
// click after enter button function
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// when user press enter key on keyboard 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);