const mybutton = document.getElementById("mybtn");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 8;
let randNum;


mybutton.onclick = function () {
    randNum = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randNum
}