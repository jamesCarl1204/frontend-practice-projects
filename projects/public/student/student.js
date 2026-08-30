const joinBtn = document.getElementById("join-btn")
const navModal = document.getElementById("nav-modal");
const joinBackBtn = document.getElementById("join-back-btn")
const classesBtn = document.getElementById("classes-btn")
const archivedBtn = document.getElementById("archived-btn")

const main = document.getElementById("main")
const joinClassBtn = document.getElementById("join-class-btn")
const logoutBtn = document.getElementById("logout-btn")
const logoutModal = document.getElementById("logout-modal");
const joinModal = document.getElementById("join-modal");
const logoutBackBtn = document.getElementById("logout-back-btn");
const classBox = document.getElementById("class-box")
const archived = 

joinBtn.addEventListener("click", event => {
    navModal.style.display = "flex";
    logoutModal.style.display = "none"
})

joinBackBtn.addEventListener("click", event => {
    navModal.style.display = "none"
})

joinClassBtn.addEventListener("click", event => {
    let classBox = document.createElement("div");
    classBox.id = "class-box";
    let openBtn =document.createElement("div");
    openBtn.id = "class-open-btn"
    openBtn.innerHTML = `<span id="open-btn">Open Class<span>`

    classBox.appendChild(openBtn)
    main.append(classBox)

    joinMessage.style.displa
})

logoutBtn.addEventListener("click", event => {
    navModal.style.display = "flex";
    joinModal.style.display = "none"
})

logoutBackBtn.addEventListener("click", event => {
    navModal.style.display = "none"
})

archivedBtn.addEventListener("click", event => {
    classBox.style.display = "none";

})
