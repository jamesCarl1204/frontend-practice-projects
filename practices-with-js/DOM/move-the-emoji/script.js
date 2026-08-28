const emoji = document.getElementById("emoji")

let moveAmount = 10;
let y = 0;
let x = 0;


document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")) {

        switch(event.key) {
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y += moveAmount;
                break
            case "ArrowLeft" :
                x -= moveAmount;
                break
            case "ArrowRight":
                x += moveAmount;
                break
        }

        emoji.style.top = `${y}px`;
        emoji.style.left = `${x}px`;

    }
})