// Constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks"); // Define taskSection

// Listener for the Enter key. Used to add a new task.
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

// The onclick event for the 'Add' button
document.querySelector("#push").onclick = function () {
  createTask();
};

/**
 * Create a new task and add it to the task list.
 */
function createTask() {
  if (taskInput.value.length === 0) {
    alert("The task field is blank. Enter a task name and try again.");
  } else {
    // Create HTML for the new task and append it to taskSection
    taskSection.innerHTML += `<div class="task">
        <label id="taskname">
        <input type="checkbox" class="check-task">
        <p>${document.querySelector("#newtask input").value}</p>
        </label>
        <div class="delete">
        <i class="uil uil-trash"></i></div></div>`;
    updateDeleteButtons(); // Update delete button listeners
    updateScrollbar(); // Update scrollbar
    taskInput.value = ""; // Clear the input box
  }
}

/**
 * Update delete button listeners for all tasks.
 */
function updateDeleteButtons() {
  const current_tasks = document.querySelectorAll(".delete");
  current_tasks.forEach((deleteBtn) => {
    deleteBtn.onclick = function () {
      this.parentNode.remove(); // Remove the task when delete button is clicked
      updateScrollbar(); // Update scrollbar after deletion
    };
  });
}

/**
 * Update scrollbar based on task list height.
 */
function updateScrollbar() {
  taskSection.classList.toggle("overflow", taskSection.offsetHeight >= 300);
}

// Apply a strikethrough style to tasks that users check to mark complete and remove it for tasks that users do not check.
taskSection.addEventListener("click", function (e) {
  if (e.target && e.target.matches('input[type="checkbox"].check-task')) {
    const taskItem = e.target.closest(".task").querySelector("p");
    taskItem.classList.toggle("checked", e.target.checked);
  }
});
