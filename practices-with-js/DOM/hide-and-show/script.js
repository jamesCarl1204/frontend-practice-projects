const mybtn = document.getElementById("btn")
const mydiv = document.getElementById("div1")

mybtn.addEventListener("click", event => {

    if(mydiv.style.visibility === "hidden") {
        mydiv.style.visibility = "visible"
        mybtn.textContent = "hide"
    } 
    else{
         mydiv.style.visibility = "hidden";
         mybtn.textContent = "show"
    }
   

})