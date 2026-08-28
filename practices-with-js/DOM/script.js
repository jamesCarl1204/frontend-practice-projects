const myBox = document.getElementById("box1")

const myBtn = document.getElementById("btn")

const myEmoji = document.getElementById("myEmoji")


function changeColor(event) {
    myBox.style.backgroundColor = "blue"
    myBox.textContent = "haha it tickles me😂"
}

myBtn.addEventListener("click", changeColor)


myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "green";
    myBox.textContent = "stop hahaha🤣"
})

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "aqua";
    myBox.textContent = "click me😊"
})

document.addEventListener("keydown", event => {
    myEmoji.style.backgroundColor = "pink";
    myEmoji.textContent = "😘"
})

document.addEventListener("keyup", event => {
    myEmoji.style.backgroundColor = "aqua";
    myEmoji.textContent = "😊"
})


