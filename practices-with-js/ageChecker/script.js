document.getElementById("mybtn").onclick = function () {
let input = document.getElementById("myinput").value;

input = Number(input)


if(isNaN(input)) {
    document.getElementById("myinput").value = "invalid input"
}
else if(input < 18) {
    document.getElementById("myinput").value =  "under age"
}
else {
    document.getElementById("myinput").value = "valid age"
}

}

// mybtn.onclick = function () {
// let input = document.getElementById("myinput").value;
// let mybtn = document.getElementById("mybtn")
// input = Number(input)


// if(input > 18) {
//     document.getElementById("myinput").value = "valid age"
// }

// }



