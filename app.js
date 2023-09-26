//My HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");

//My JS variables
let completedCount = 0;

button.addEventListener("click", function () {
  //fetch value from input
  const text = input.value;

  //Check that input is not empty
  if(text.length == 0) {
    info.innerText = "Input must not be empty";
    return;
  }
  else {
    info.innerText = "";
  }

  //create li-element in ul
  const item = document.createElement("li");
  list.appendChild(item);  //Appends(BIFOGAR) item to LIST

  const itemLabel = document.createElement("span"); //empty span
  itemLabel.innerText = text;   //adds text to span
  item.appendChild(itemLabel); //Appends(BIFOGAR) itemLabel to ITEM


  
  //add a listnener to the span. AFTER itemLabel ()= span) is created. //Change completedCount
  itemLabel.addEventListener("click", function() {

    //toggle completed/uncompleted
    if (item.getAttribute("class", "completed")) {
      
      item.setAttribute("class", "");
      completedCount--
    }
    else {
      item.setAttribute("class", "completed");
      completedCount++
    }

    completedInfo.innerText = `${completedCount} completed`;

  })

    //Empty input field
    input.value = "";

});
