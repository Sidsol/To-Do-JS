var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");


addButton.addEventListener("click", addTask);

function addTask(){

    var task = taskInput.value;
    
    if(task.trim()){
        //add new task item
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        
        //add remove button
        var removeButton = document.createElement ("button");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove"
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);

        //clear text input
        taskInput.value = "";
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty")
    }
}

clearButton.addEventListener("click", clearTask);

function clearTask(){
    taskList.innerHTML = "";
}

function removeTask(e){
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem); 
  }