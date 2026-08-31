const addBtn = document.getElementById("addBtn")
const allTodo = document.getElementById("all-todo")
const activeTodo = document.getElementById("active-todo")
const doneBtn = document.getElementById("done")
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
   lists.forEach(x => {
    if(x.isCheck === true) {
        x.item.style.display = "none"
    } else {
        x.item.style.display = "block"
    }
   })
})

allTodo.addEventListener("click", () =>{
     lists.forEach(x => x.item.style.display = "block")
})

doneBtn.addEventListener("click", () => {
    lists.forEach(x => {
        if(x.isCheck === false) {
         x.item.style.display =  "none"
        }
        else {
            x.item.style.display = "block"
        }
})
})


function deleteTodo(id) {
    let target = lists.find(x => x.id === id)
    target.item.remove()
    lists = lists.filter(x => x.id !== id)
}