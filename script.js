let newTask = document.getElementById("newTask");

let addButton = document.getElementById("add-button");

let toDo = document.getElementById("todo");

function addTask() {
    let listItem = document.createElement("li");

    if (newTask.value === "") {
            return;
        }

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    listItem.appendChild(checkbox);

    let label = document.createElement("label");
    label.htmlFor = "check";
    listItem.appendChild(label);

    toDo.appendChild(listItem);

    label.innerHTML = newTask.value;

    newTask.value = "";
}

addButton.addEventListener("click", addTask);