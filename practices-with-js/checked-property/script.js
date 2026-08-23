const myCheckBox = document.getElementById("mychk");
const visaBtn  = document.getElementById("visaBtn");
const gcash  = document.getElementById("gcashBtn");
const paypal  = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult  = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = "You are subscribed"
    }
    else {
        subResult.textContent = "You are not subscribe"
    }

    if(visaBtn.checked) {
        paymentResult.textContent = "You are paying with Visa"
    }
    else if(gcash.checked) {
        paymentResult.textContent = "You are paying with gcash"
    }
    else {
        paymentResult.textContent = "You are paying with Paypal"
    }


}