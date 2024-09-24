const myTodos = [
    'make dinner',
    'wash dishes',
    'watch youtube',
];

function renderTodoList() {
        let todoListHTML = '';

    for(let i = 0; i < myTodos.length; i++) {
        const todo = myTodos[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
    }

    renderTodoList()

function addTodoKeydown(event) {
    if(event.key === 'Enter') {
        addTodo();
    } }
    
function addTodo() {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;
    
    if(name === '') {
    alert("Todo box is empty, insert some task.")
} else {
    myTodos.push(name);
    inputElement.value = '';
    renderTodoList()
}

}
