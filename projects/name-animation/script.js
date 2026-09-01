const element = document.getElementById("text")

const text =  "carlo"
let index =0


function typeEffect () {
    if(index < text.length) {
        element.textContent += text[index]
        index++
        setTimeout(typeEffect, 150)
    }
}

typeEffect()