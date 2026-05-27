document.getElementById("addBtn")
.addEventListener("click", function(){
    let input =
    document.getElementById("taskInput");
    let taskText = input.value;
    if(taskText === "") return;
    // Create List Item
    let li = document.createElement("li");
    li.innerText = taskText;
    // Toggle Completed
    li.addEventListener("click", function(){
        li.style.textDecoration =
        li.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
    });

    // Delete Button
    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    // Delete Task
    delBtn.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(delBtn);
    document.getElementById("taskList")
    .appendChild(li);
    // Clear Input
    input.value = "";
});