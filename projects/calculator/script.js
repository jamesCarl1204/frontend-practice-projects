

let n = []

function num(number) {
     
     document.getElementById("input").value += number

     let lastItem = n[n.length - 1];

     if(n.length > 0 && !isNaN(lastItem)) {

          n[n.length - 1] = lastItem + number
     } else{
          n.push(number)
     }
}

function operator(op){
     document.getElementById("input").value += op
     n.push(op)
}

function equal(){
     let total = Number(n[0])

     for(let i = 1; i < n.length; i += 2) {
          let op = n[i];
          let nextNum = Number(n[i+1])
          
          if(op === "+") {
               total = total + nextNum;
          }
           else  if(op === "-") {
               total = total - nextNum;
          } 
          else if(op === "/") {
               total = total / nextNum;
          }
           else if(op === "x") {
               total = total * nextNum;
          }
     }
     
     document.getElementById("input").value = total;

     n = [total]

}


