const joinBtn = document.getElementById("join-btn");
const navModal = document.getElementById("nav-modal");
const joinBackBtn = document.getElementById("join-back-btn");
const classesBtn = document.getElementById("classes-btn");
const archivedBtn = document.getElementById("archived-btn");

const main = document.getElementById("main");
const joinClassBtn = document.getElementById("join-class-btn");
const logoutBtn = document.getElementById("logout-btn");
const logoutModal = document.getElementById("logout-modal");
const joinModal = document.getElementById("join-modal");
const logoutBackBtn = document.getElementById("logout-back-btn");
const classBox = document.getElementById("class-box")
const classPage = document.getElementById("class-page");
const archivedPage = document.getElementById("archived-page")


const scanBtn = document.getElementById("scan-btn")
const scanContainer = document.getElementById("scan-container")
const scanBackBtn = document.getElementById("scan-back-btn");

let html5QrCode;

joinBtn.addEventListener("click", event => {
    navModal.style.display = "flex";
    logoutModal.style.display = "none";
    joinModal.style.display = "flex"
})

joinBackBtn.addEventListener("click", event => {
    navModal.style.display = "none";
})

joinClassBtn.addEventListener("click", event => {
    let classBox = document.createElement("div");
    classBox.id = "class-box";
    let openBtn =document.createElement("div");
    openBtn.id = "class-open-btn"
    openBtn.innerHTML = `<span id="open-btn">Open Class<span>`
    main.style.justifyContent = "flex-start";
    main.style.alignItems = "flex-start"
    classPage.style.display = "none"

    classBox.appendChild(openBtn)
    main.append(classBox)

    joinMessage.style.display
})

logoutBtn.addEventListener("click", event => {
    navModal.style.display = "flex";
    joinModal.style.display = "none"
    logoutModal.style.display = "flex"
})

logoutBackBtn.addEventListener("click", event => {
    navModal.style.display = "none";
})

archivedBtn.addEventListener("click", event => {
    classPage.style.display = "none";
    archivedPage.style.display ="flex"
})

classesBtn.addEventListener("click", event => {
    classPage.style.display = "flex";
    archivedPage.style.display ="none"
})

scanBtn.addEventListener("click", () => {
    scanContainer.style.display = "flex";

    html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        {facingMode : "environment"},
        {fps: 10, qrbox: {width: 200, height: 200} },
        (decodedText) => {
            console.log("see", decodedtext)
        }
    )
})

scanBackBtn.addEventListener("click", () => {
    scanContainer.style.display = "none";
    if(html5QrCode) {
        html5QrCode.stop()
    }
})