let loginbtn = document.getElementById("loginbtn");

let pword =document.getElementById("pword");

loginbtn.onclick = function () {
    let email = document.getElementById("email").value;
    
    let gmail = email.slice(email.indexOf("@"))

    if(gmail === "@gmail.com") {
        document.getElementById("validation").textContent = "vaild email"
    }
    else {
        document.getElementById("validation").textContent = "invalid email"
    }
    
}