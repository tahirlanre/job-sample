/* 
TO DO:
======

1. When the user clicks on the button that says "Move to start", move that <article> element to the beginning of the row
2. When the user clicks on the button that says "Delete", remove that <article> from the page entirely

See https://res.cloudinary.com/bitkoin/video/upload/v1535438914/Untitled.mp4
*/

var section;
var startButton;

window.onload = init

//Initial function when the page loads
function init(){
  section = document.querySelector("section");
  section.addEventListener('click', getAction);
  //removeStartButtonInFirstItem();
  resetButtons();
}

//Get action to perform when any button is clicked
function getAction(e){
  var target = e.target;
  var parentItem = target.parentElement;
  var action = target.dataset.action;
  
  if(action == 'start'){
    moveToStart(parentItem);
  }
  if(action == 'delete'){
    del(parentItem);
  }
}

//Remove item from the page
function del(item){
  section.removeChild(item);
  if(section.getElementsByTagName("article").length >= 1){
    //removeStartButtonInFirstItem();
    resetButtons();
  }
}
 
//Move item to beginning of the row
function moveToStart(item){
  var firstItem = section.getElementsByTagName("article")[0]
  var itemToMove = section.removeChild(item);
  section.insertBefore(itemToMove,firstItem);
  if(section.getElementsByTagName("article").length >= 1){
    //removeStartButtonInFirstItem();
    resetButtons();
  }
}

function removeStartButtonInFirstItem(){
  var firstItem = section.getElementsByTagName("article")[0];
  var buttons = firstItem.getElementsByTagName("button")
  for(var i = 0; i < buttons.length; i++){
    var button = buttons[i];
    if(button.dataset.action == 'start'){
      firstItem.removeChild(button);
    }
  }
}

//Reset button placements on item 
function resetButtons(){
  var items = section.getElementsByTagName("article");
  for(var i=0; i < items.length; i++){
    item = items[i];
    buttons = item.getElementsByTagName("button");
    if (i==0){
      removeStartButton(items[i]);
      continue;
    }
    if(buttons.length < 2){
      addStartButton(items[i]);
    }
  }
}

//Remove "Move to start" button from parent element
function removeStartButton(item){
  var buttons = item.getElementsByTagName("button");
  for(var i = 0; i < buttons.length; i++){
    var button = buttons[i];
    if(button.dataset.action == 'start'){
      item.removeChild(button);
    }
  }
}

//Add "Move to start" button to parent element
function addStartButton(item){
  var buttons = item.getElementsByTagName("button");
  var startButton = document.createElement("button");
  startButton.dataset.action = "start";
  var t = document.createTextNode("Move to start");
  startButton.appendChild(t);
  item.insertBefore(startButton,buttons[0]);
}


