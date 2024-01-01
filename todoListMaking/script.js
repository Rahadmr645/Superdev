const todoList = [];


function rendertodoList() {
    const todoListHTML = '';
    for (i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const HTML = `<p>${ todo }
    <button onClick= " 
    ">Delete</button>
    </p>`;
        todoListHTML += HTML;
    }
    document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo() {
    const inputeEelemnt = document.querySelector('.js-input');
    const name = inputeEelemnt.value;
    todoList.push(name);
    inputeEelemnt.value = '';

    rendertodoList();

}