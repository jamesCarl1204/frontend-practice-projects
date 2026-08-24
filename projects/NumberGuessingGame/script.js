let myBtn = document.getElementById("guessBtn");
let attemps = 10;

let randNum = Math.floor(Math.random() * 99);

myBtn.onclick = function () {
    attemps--;

    let num = document.getElementById("inputNum").value;
    
    num = Number(num);
    
    if(attemps > 0) {
        
    if(randNum === num) {
        document.getElementById("myLabel").textContent = `you guess it the answer is ${randNum}`;
    }
    else if (randNum > num){  
        document.getElementById("myLabel").textContent = `higher, you only have ${attemps} attemps left`;
    }
    else if(randNum < num) {
        document.getElementById("myLabel").textContent = `lower, you only have ${attemps} attemps left`;
    }
    else{
        document.getElementById("myLabel").textContent = "invalid input";
    }

    }
    else{
       document.getElementById("myLabel").textContent = `dont have enough attemps the Number is ${randNum}`;
        attemps = 10;
   }

}

