/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




const inputNumber = document.getElementById("span-el")
const convertBtn = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("kilogram-el")
const messageEl = document.getElementById("message-el")

const toggleBtn = document.getElementById("toggle-el")
const theme = window.localStorage.getItem("theme") 


// toggleBtn.innerHTML = ""

// if(theme === "dark") {
//     document.body.classList.add("dark")
//     toggleBtn.innerHTML = "Dark"
// } else {
//     toggleBtn.innerHTML = "White"
// }


toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    if(theme === "dark") {
        window.localStorage.setItem("theme", "light")
    } else {
        window.localStorage.setItem("theme", "dark")
    }
})

// refresh.addEventListener("click", ()=> {
//     window.location.reload()
// }
// )

convertBtn.addEventListener( "click", function() {
    messageEl.innerHTML = ""
    try {
        if(inputNumber.value.trim == " ") throw "is empty."
        if(isNaN(inputNumber.value)) throw "is not a number."
        inputNumber.value = Number(inputNumber.value)
        if(inputNumber.value > 0) {
            let transformedFeet = inputNumber.value * 3.281
            let transformedMeter = inputNumber.value / 3.281
            lengthEl.textContent = `${inputNumber.value} meters = ${Number(transformedFeet.toFixed(2))} feet 
                                | ${inputNumber.value} feet = ${Number(transformedMeter.toFixed(2))} meters`
        
            let transformedGallon = inputNumber.value * 0.264
            let transformedLiter = inputNumber.value / 0.264
            volumeEl.textContent = `${inputNumber.value} liters = ${Number(transformedGallon.toFixed(2))} gallons 
                                | ${inputNumber.value} gallons = ${Number(transformedLiter.toFixed(2))} liters`
        
            let transformedKilo = inputNumber.value * 2.204
            let transformedPound = inputNumber.value / 2.204
            massEl.textContent = `${inputNumber.value} kilos = ${Number(transformedKilo.toFixed(2))} ponds 
                                | ${inputNumber.value} ponds = ${Number(transformedPound.toFixed(2))} kilos`
        } 
        if (inputNumber.value < 0)  throw " is too low."
    }   
    catch(err) {
        messageEl.innerHTML = "Input " + err;
        }
    finally {
        document.getElementById("message-el").value= ""
    }
        // 
                        }
)
 