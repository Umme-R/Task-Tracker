let newTask = document.getElementById("newTask");

let addButton = document.getElementById("add-button");

let toDo = document.getElementById("todo");

function Task() {
    let listItem = document.createElement("li");

    if (newTask.value === "") {
            return;
        }

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "check";
    listItem.appendChild(checkbox);

    let label = document.createElement("label");
    label.contentEditable = true;
    listItem.appendChild(label);

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            completed.appendChild(listItem); 
            listItem.classList.toggle("completed");
            listItem.classList.remove("notCompleted");
        } else {
            toDo.appendChild(listItem);
            listItem.classList.remove("completed");
            listItem.classList.toggle("notCompleted");
        }
    });

    toDo.appendChild(listItem);
    label.innerHTML = newTask.value;

    newTask.value = "";
}

addButton.addEventListener("click", Task);