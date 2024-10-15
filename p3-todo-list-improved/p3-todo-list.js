const myTodos = [];

const renderTodoList = () => {
        let todoListHTML = '';

myTodos.forEach ( (todoObject, index) => {
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="js-rmv-btn" data-index="${index}">Delete
            </button>`;
        todoListHTML += html;
        });

    //Código substituído pelo método forEach acima.

    // for(let i = 0; i < myTodos.length; i++) {
    //     const todoObject = myTodos[i];
    //     const {name, dueDate} = todoObject;
    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="js-rmv-btn" data-index="${i}">Delete
    //         </button>`;
    //     todoListHTML += html;
    // }
document.querySelector('.js-todo-list').innerHTML = todoListHTML;


const deleteButtons = document.querySelectorAll('.js-rmv-btn');
deleteButtons.forEach(button => {
    button.addEventListener('click', rmvTodo);
    });
}

    

const addTodo = () => {
    const inputElement = document.querySelector('.js-todo-input');
    const name = inputElement.value;
    const inputDate = document.querySelector('.js-todo-date')
    const dueDate = inputDate.value
    
    if(name === '') {
    alert("Todo box is empty, insert some task.")
} else {
    myTodos.push({
        name: name,
        //SHORTCUT para a a linha acima, se a propriedade do objeto que está sendo alterado e a variávle com o valor desejado tem o mesmo nome, pode se escrever apenas uma vez, como no exemplo abaixo, os códigos acima e abaixo fazem exatamente a mesma coisa no método .push
        dueDate
    });
    inputElement.value = '';
    renderTodoList()
}

}
const addTodoKeydown = event => {
    if(event.key === 'Enter') {
        addTodo();
    } }

const rmvTodo = event => {
    const index = event.target.getAttribute('data-index');
    myTodos.splice(index, 1);
    renderTodoList();
}

const addQueue = document.querySelector('.js-add-btn')
addQueue.addEventListener("click", addTodo)

const todoInput = document.querySelector('.js-todo-input')
todoInput.addEventListener("keydown", addTodoKeydown)

const rmvQueue = document.querySelector('.js-rmv-btn')
rmvQueue.addEventListener("click", rmvTodo)

renderTodoList()
