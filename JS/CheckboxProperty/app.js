
const checkBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaCardBtn");
const masterButton = document.getElementById("masterCardBtn");
const payPalButton = document.getElementById("paypalBtn");


document.getElementById("myButton").onclick = function() {
    if (checkBox.checked)  {
    console.log("You are Subscribed");
    } else {
        console.log("You are Not Subscribed ");
    }

    if (visaButton.checked) {
        console.log("You are paying via visa card");
    }
    else if(masterButton.checked){
        console.log("You are paying via master card");
    }
    else {
        console.log("You are paying via paypal card");
    }
}