//My HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");





//My JS variables
let completedCount = 0;
const todoArray = [];
const simpleTodoArray = [];


// Function to handle change status on object in array
// takes parameter completed (bool)
function changeStatus(todoText,completed) {

  // Find index, look in objects and value on "name"
  let correctIndex = todoArray.map(t => t.name).indexOf(todoText);
  
  // Change status on the object at the correct index
  todoArray[correctIndex].status = completed;

}




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

  //Add todo to todoArray
  const todoObject = {name: text, status: false};
  todoArray.push(todoObject);

  //add todo to our simplearray
  simpleTodoArray.push(text);

  //create li-element in ul
  const item = document.createElement("li");
  list.appendChild(item);  //Appends(BIFOGAR) item to LIST(ul)

  const itemLabel = document.createElement("span"); //empty span
  itemLabel.innerText = text;   //adds text to span
  item.appendChild(itemLabel); //Appends(BIFOGAR) itemLabel to ITEM

  // create span-element that has a trashcan
  const trashcan = document.createElement("span");
  trashcan.setAttribute("class","trashcan");
  trashcan.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  item.appendChild(trashcan);

/*   const clearAll = document.createElement("a");
  clearAll.innerHTML = "Clear All";
  clearAll.setAttribute("class", "clearAll");
  item.appendChild(clearAll);

 */
  

  //add a listnener to the span. AFTER itemLabel (= span) is created. //Change completedCount
  itemLabel.addEventListener("click", function() {

    //toggle completed/uncompleted
    if (item.getAttribute("class") == "completed") {

      item.setAttribute("class", "");

      //Change status on object in array to false
      let clickedText = item.firstChild.firstChild.textContent;
      changeStatus(clickedText, false);
      completedCount--
      }

      else {
  
        item.setAttribute("class", "completed");

        //Change status on object in array to true
        let clickedText = item.firstChild.firstChild.textContent;
        changeStatus(clickedText, true);
        completedCount++

      }

      completedInfo.innerText = `${completedCount} completed`;

  })  
      
  //add listener to trashcan
  trashcan.addEventListener("click", function(){

    if (item.getAttribute("class") == "completed"){
      completedCount--
    }

    completedInfo.innerText = `${completedCount} completed`;
    
    //Set todo-array correct
    let removeText = item.firstChild.firstChild.textContent;
    let indexToRemove = simpleTodoArray.indexOf(removeText);
    simpleTodoArray.splice(indexToRemove, 1);
    
    /* remove list-element */
    item.remove();
  })

  // Clear All-button to clear List 

  clearAll.addEventListener("click", function(){

    

    if (item.getAttribute("class") == "completed"){
      completedCount = 0;
    }
    completedInfo.innerText = `${completedCount} completed`;
    
    document.querySelector("clearAll");
    list.innerHTML = "";

    simpleTodoArray.length = 0;

  })

  //Empty input field
      input.value = "";

});

