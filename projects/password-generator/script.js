



function generatePassword() {
      
      let input = document.getElementById("inputNum").value
      let numberRad = document.getElementById("numRad");
      let upperCaseRad =  document.getElementById("upperCaseRad")
      let lowerCaseRad = document.getElementById("lowerCaseRad")
      let result =  document.getElementById("result")
    
     const upperCase = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
     const lowerCase = upperCase.toLowerCase();
     const number = "1234567890"
      
     let allowedChars = "";
     let password = ""; 

     let includeLowerCase = lowerCaseRad.checked;
     let includeUpperCase = upperCaseRad.checked;
     let includeNumber = numberRad.checked;

     input = Number(input)
      

     if(includeLowerCase && includeUpperCase && includeNumber && input >= 8) {
       
        allowedChars += upperCase + lowerCase +  number;
        let length = input
        
        for(let i = 0; i < length; i++) {
            if(i === 0) {
                const randIndex = Math.floor(Math.random() * upperCase.length)
                password += upperCase[randIndex]
            }
            if(i === 1) {
                const randIndex = Math.floor(Math.random() * lowerCase.length)
                password += lowerCase[randIndex]
            }
            if(i === 2) {
                const randIndex = Math.floor(Math.random() * number.length)
                password += number[randIndex]
            }
            if(i > 2) {
             const randIndex = Math.floor(Math.random() * allowedChars.length)
             password += allowedChars[randIndex]
            }
     }
      result.textContent = password
     }
     else if(includeLowerCase && includeUpperCase && input >= 8 ) {
        allowedChars += upperCase + lowerCase;
        let length = input

         for(let i = 0; i < length; i++) {
            if(i === 0) {
                const randIndex = Math.floor(Math.random() * upperCase.length)
                password += upperCase[randIndex]
            }
            if(i === 1) {
                const randIndex = Math.floor(Math.random() * lowerCase.length)
                password += lowerCase[randIndex]
            }
           
            if(i > 1) {
             const randIndex = Math.floor(Math.random() * allowedChars.length)
             password += allowedChars[randIndex]
            }
         }
         result.textContent = password;
     }
     else if(includeLowerCase && includeNumber && input >= 8) {
        allowedChars += lowerCase + number;
        let length = input

         for(let i = 0; i < length; i++) {
            if(i === 0) {
                const randIndex = Math.floor(Math.random() * number.length);
                password += number[randIndex]
            }

            if(i === 1) {
                const randIndex = Math.floor(Math.random() * lowerCase.length)
                password += lowerCase[randIndex]
            }
           
            if(i > 1) {
             const randIndex = Math.floor(Math.random() * allowedChars.length)
             password += allowedChars[randIndex]
            }
         }
         result.textContent = password
     }
     else if(includeUpperCase && includeNumber && input >= 8) {
        allowedChars += upperCase + number;
        let length = input
        
          for(let i = 0; i < length; i++) {
            if(i === 0) {
                const randIndex = Math.floor(Math.random() * upperCase.length)
                password += upperCase[randIndex]
            }
           
            if(i === 1) {
                const randIndex = Math.floor(Math.random() * number.length)
                password += number[randIndex]
            }
            if(i > 1) {
             const randIndex = Math.floor(Math.random() * allowedChars.length)
             password += allowedChars[randIndex]
            }
         }
         result.textContent = password       
        }
    else {
        result.textContent = "Pick 2 for strong Password and length should be 8 or higher "
    }

}