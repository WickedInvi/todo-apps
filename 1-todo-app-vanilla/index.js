const addTask = document.querySelector('#btn-addTask');
const inputTask = document.querySelector('#text-todoTask');
const todoList = document.querySelector('#todo-list');

// console.log(inputTask.textContent);

let todoArr = [{ task: 'Make coffee' }, { task: 'Drink coffee' }];

addTask.addEventListener('click', (event) => {
  event.preventDefault();
  // console.log(inputTask.value);

  if (inputTask.value === '') {
    alert('Task is empty, please add a task');
  } else {
    todoArr.push({ task: inputTask.value });
  }
  // Clear the input
  inputTask.value = '';

  createTodo(todoArr);
});

inputTask.addEventListener('keyup', () => {});

const createTodo = (arr) => {
  todoList.innerHTML = '';
  arr.forEach((todo, id) => {
    // Create elements required
    let newLi = document.createElement('li');
    let task = document.createElement('span');
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let editInput = document.createElement('input');
    let checkBox = document.createElement('input');

    checkBox.type = 'checkbox';

    // Assign the values and style
    task.innerHTML = todo.task;
    task.id = `task-${id}`;
    editInput.id = `input-${id}`;
    deleteBtn.innerText = 'X';
    deleteBtn.style.color = 'red';
    editBtn.innerText = 'Edit';

    editInput.classList.add('hidden');
    // Add ID to the button
    deleteBtn.addEventListener('click', () => {
      deleteTodo(id);
    });

    checkBox.addEventListener('change', () => {
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
    newLi.appendChild(checkBox);
    newLi.appendChild(editInput);
    newLi.appendChild(task);
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
    console.log(inputField.value);
    todoArr.splice(id, 1, { task: inputField.value });
    console.log(todoArr);
    createTodo(todoArr);
    task.classList.remove('hidden');
    inputField.classList.add('hidden');
  }
};

const doneTask = (id) => {
  console.log('done');
  let task = document.getElementById(`task-${id}`);
  console.log(task);
  task.classList.contains('strike')
    ? task.classList.remove('strike')
    : task.classList.add('strike');
};

const deleteTodo = (id) => {
  todoArr.splice(id, 1);
  createTodo(todoArr);
};

window.addEventListener('load', createTodo(todoArr));
