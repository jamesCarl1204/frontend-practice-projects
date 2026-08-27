function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");

    const values = [];
    const images = [];
    
    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
           values.push(value)
           images.push(`<img style="border:1px solid blue" src="dice${value}.png">`)
     }
    
     diceResult.innerHTML = values;
     diceImg.innerHTML = images
}