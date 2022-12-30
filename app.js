const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const todosList = document.querySelector('#todos');

form.addEventListener('submit', addTodo);

function addTodo(e) {
  e.preventDefault();

  if (input.value === '') {
    alert('Please enter a to-do.');
  } else {
    const li = document.createElement('li');
    li.textContent = input.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', removeTodo);

    li.appendChild(removeButton);
    todosList.appendChild(li);
    input.value = '';
  }
}

function removeTodo(e) {
  const button = e.target;
  const li = button.parentNode;
  todosList.removeChild(li);
}
