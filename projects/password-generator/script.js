
function generatePassword() {
      
      let input =  Number(document.getElementById("inputNum").value)
      let includeNumber = document.getElementById("numRad").checked;
      let includeUpperCase =  document.getElementById("upperCaseRad").checked
      let includeLowerCase = document.getElementById("lowerCaseRad").checked
      let result =  document.getElementById("result")
    
     const upperCase = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
     const lowerCase = upperCase.toLowerCase();
     const number = "1234567890"
      
       let includedTypes = [];

       if(includeNumber) {includedTypes.push(number)}
       if(includeUpperCase) {includedTypes.push(upperCase)}
       if(includeLowerCase) {includedTypes.push(lowerCase)}

       

     if(input < 8 || includedTypes.length < 2 ) {
        result.textContent = "Pick 2 types and length should be 8 or higher"
        return
     }

     let passwordChars =  []
     let allowedChars = includedTypes.join("")
     
        
     includedTypes.forEach(includedType => {
        const randIndex = Math.floor(Math.random() * includedType.length);
        passwordChars.push(includedType[randIndex])
     })

     for(let i = passwordChars.length; i < input; i++) {
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        passwordChars.push(allowedChars[randIndex])
     } 

     for(let i = passwordChars.length -1;  i  >  0; i-- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordChars[i], passwordChars[j] = passwordChars[j], passwordChars[i]]
     } 
     
      let password = passwordChars.join("")

     result.textContent = password
     
    }