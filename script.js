// SELECTORS

const todoInput = document.querySelector('.todo-input');
const homeButton = document.querySelector('.home-button');
const workButton = document.querySelector('.work-button');
const todoListHome = document.querySelector('.home-list');
const todoListWork = document.querySelector('.work-list');
const homeChill = document.querySelector('.home-chill');
const workChill = document.querySelector('.work-chill');


// EVENT LISTENERS

workButton.addEventListener('click', addTodo);
homeButton.addEventListener('click', addTodo);
todoListHome.addEventListener('click', removeTodo);
todoListWork.addEventListener('click', removeTodo);

//FUNCTIONS

function addTodo (event) {
    event.preventDefault();

    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //BUTTONS
    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-button');
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    //APPEND TO LIST
    clickedButton = event.target;

    if (clickedButton.classList[0] === 'home-button') {
        todoListHome.appendChild(todoDiv);
        //REMOVE CHILL ICON
        homeChill.classList.add('no-chill');
    } else {
        todoListWork.appendChild(todoDiv);
        workChill.classList.add('no-chill');
    }

    //REMOVE INPUT
    todoInput.value = '';
    
}

function removeTodo(e) {
    const clicked = e.target;
    if(clicked.classList[0] === 'delete-button') {
        const todo = clicked.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
            if(todoListHome.childElementCount === 0) {
                homeChill.classList.remove('no-chill');
            };
            if(todoListWork.childElementCount === 0) {
                workChill.classList.remove('no-chill');
            };
        })
    }

    if(clicked.classList[0] === 'completed-button') {
        const todo = clicked.parentElement;
        todo.classList.toggle('completed');
    }
}