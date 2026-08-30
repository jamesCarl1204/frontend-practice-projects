const teacherLogin = document.getElementById("teacher-login");
const teacherLoginDisplay = document.getElementById("teacher-login-display")
const wrap = document.getElementById("wrap");
const teacherBack = document.getElementById("teacher-back")
const studentLogin = document.getElementById("student-login");
const studentLoginDisplay = document.getElementById("student-login-display")
const studentBack = document.getElementById("student-back")

teacherLogin.addEventListener("click", event => {
    wrap.style.display = "none";
    teacherLoginDisplay.style.display = "block"
})

teacherBack.addEventListener("click",  event => {
    wrap.style.display = "flex";
    teacherLoginDisplay.style.display = "none"
})


studentLogin.addEventListener("click", event => {
    wrap.style.display = "none";
    studentLoginDisplay.style.display = "block"
})

studentBack.addEventListener("click",  event => {
    wrap.style.display = "flex";
    studentLoginDisplay.style.display = "none"
})
