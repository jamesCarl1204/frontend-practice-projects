let result = document.getElementById("result")


document.getElementById("subBtn").onclick = function () {
    let celciusRad = document.getElementById("celciusRad");
    let fahrenheitRad = document.getElementById("fahrenheitRad")
    let input = document.getElementById("input"). value;
    
    input = Number(input);

    if(isNaN(input)) {
        result.textContent = "Invalid Input"
    }
    else if(celciusRad.checked) {
         let fahrenheit =  input * 9 / 5 + 32;
         fahrenheit.toFixed(1);
          result.textContent = fahrenheit;
    }
    else if(fahrenheitRad.checked) {
        let celcius = (input - 32) * 5 / 9;
        celcius = celcius.toFixed(1);
        result.textContent = celcius;
    }
    else {
        result.textContent = "select a unit";
    }



}