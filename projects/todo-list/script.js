const addBtn = document.getElementById("addBtn")
const allTodo = document.getElementById("all-todo")
const activeTodo = document.getElementById("active-todo")
let todoListDiv = document.getElementById("todo-list")


let lists = []
let all = []
let idCounter = 0

function check(idClicked, checkedboxElement) {
    const todoText = checkedboxElement.nextElementSibling

    if (checkedboxElement.checked) {
        todoText.style.textDecoration = "line-through"
    } else {
        todoText.style.textDecoration = "none"  
    }

    let active = lists.find(x => x.id === idClicked)
    active.isCheck = checkedboxElement.checked
}

addBtn.addEventListener("click", () => {
    const input = document.getElementById("input").value;

    const todoListContainer = document.createElement("div")
    todoListContainer.id = "todo-container"

    let currentId = idCounter++
    todoListContainer.innerHTML = `<input type="checkbox" onclick="check(${currentId}, this)"> <label>${input}</label> <button onclick="deleteTodo(${currentId})">delete</button>`

    const list = {
        id: currentId,
        item: todoListContainer,
        isCheck: false,
    }

    lists.push(list)
    todoListDiv.append(todoListContainer)
})

activeTodo.addEventListener("click", () => {
    let checkedItem = lists.filter(x => x.isCheck === true)
    checkedItem.forEach(x => x.item.style.display = "none")
})

allTodo.addEventListener("click", () =>{
     lists.forEach(x => x.item.style.display = "block")
})


function deleteTodo(id) {
    let target = lists.find(x => x.id === id)
    target.item.remove()
    lists = lists.filter(x => x.id !== id)
}