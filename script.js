//funcao adicionar tarefa
function addTask() {
  //titulo tarefa
  const taskTitle = document.querySelector("#task-title").value;

  if (taskTitle) {
    //clonar template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);

    //adicionar titulo
    newTask.querySelector(".task-title").textContent = taskTitle;

    //remover classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //adicionar tarefas na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    //evento remover
    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
      });

    //evento completar tarefa
    const doneBtn = newTask
      .querySelector(".done-btn")
      .addEventListener("click", function () {
        completeTask(this);
      });

    //limpar texto
    document.querySelector("#task-title").value = "";
  }
}

//funcao completar tarefa
function completeTask(task) {
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle("done");
}

//funcao remover tarefa
function removeTask(task) {
  task.parentNode.remove(true);
}

//evento adicionar tarefa
var addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
