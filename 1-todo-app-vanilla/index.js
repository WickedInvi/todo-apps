const addTask = document.querySelector('#btn-addTask');
const inputTask = document.querySelector('#text-todoTask');
const todoList = document.querySelector('#todo-list');

let todoArr = [{ task: 'Make coffee' }, { task: 'Drink coffee' }];

addTask.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputTask.value === '') {
    alert('Task is empty, please add a task');
  } else {
    todoArr.push({ task: inputTask.value });
  }
  // Clear the input
  inputTask.value = '';

  createTodo(todoArr);
});

const createTodo = (arr) => {
  todoList.innerHTML = '';
  arr.forEach((todo, id) => {
    // Create elements required
    let newLi = document.createElement('li');
    let task = document.createElement('span');
    let taskDiv = document.createElement('div');
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let editInput = document.createElement('input');
    let checkBox = document.createElement('input');
    let newDiv = document.createElement('div');
    let yesBtn = document.createElement('button');
    let noBtn = document.createElement('button');

    // Assign the values and style

    // Div
    newDiv.classList.add('hidden');
    newDiv.id = `div-${id}`;

    // Yes Button
    yesBtn.innerText = 'Yes';

    // No Button
    noBtn.innerText = 'No';

    // Check Box
    checkBox.type = 'checkbox';

    // Task
    task.innerHTML = todo.task;
    taskDiv.id = `task-${id}`;

    // Input
    editInput.id = `input-${id}`;

    // Delete Button
    deleteBtn.innerText = 'X';
    deleteBtn.style.color = 'red';

    // Edit Button
    editBtn.innerText = 'Edit';

    // Edit Input
    editInput.classList.add('hidden');

    deleteBtn.addEventListener('click', () => {
      let task = document.getElementById(`task-${id}`);
      let yesNoDiv = document.getElementById(`div-${id}`);

      task.classList.add('hidden');
      yesNoDiv.classList.remove('hidden');
    });

    yesBtn.addEventListener('click', () => {
      deleteTodo(id);
    });

    noBtn.addEventListener('click', () => {
      let task = document.getElementById(`task-${id}`);
      let yesNoDiv = document.getElementById(`div-${id}`);

      task.classList.remove('hidden');
      yesNoDiv.classList.add('hidden');
    });

    checkBox.addEventListener('change', (event) => {
      console.log(id);
      doneTask(id);
    });

    editBtn.addEventListener('click', () => {
      editBtn.textContent =
        editBtn.textContent === 'Edit' ? 'Save' : 'Edit';

      editTodo(id);
    });

    editInput.addEventListener('focus', () => {
      editInput.value = editInput.placeholder;
    });

    // Add the elements to the DOM
    newDiv.appendChild(yesBtn);
    newDiv.appendChild(noBtn);

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(task);

    newLi.appendChild(taskDiv);
    newLi.appendChild(newDiv);
    newLi.appendChild(editInput);
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);
    todoList.appendChild(newLi);
  });
};

const editTodo = (id) => {
  let inputField = document.getElementById(`input-${id}`);
  let task = document.getElementById(`task-${id}`);

  if (inputField.classList.contains('hidden')) {
    inputField.classList.remove('hidden');
    task.classList.add('hidden');
    inputField.placeholder = task.innerText;
  } else {
    if (inputField.value === '') {
      todoArr.splice(id, 1, { task: inputField.placeholder });
    } else {
      todoArr.splice(id, 1, { task: inputField.value });
    }
    createTodo(todoArr);
    task.classList.remove('hidden');
    inputField.classList.add('hidden');
  }
};

const doneTask = (id) => {
  let task = document.getElementById(`task-${id}`);
  task.classList.contains('strike')
    ? task.classList.remove('strike')
    : task.classList.add('strike');
};

const deleteTodo = (id) => {
  todoArr.splice(id, 1);
  createTodo(todoArr);
};

window.addEventListener('load', createTodo(todoArr));
