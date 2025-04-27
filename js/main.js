const sectionCelsiusToFahrenheit = document.getElementById('conversion-celsius')
const sectionFahrenehitToCelsius = document.getElementById('conversion-fahrenheit')
const btnCelsius = document.getElementById('btn-celsius')
const btnFahrenheit = document.getElementById('btn-fahrenheit')

// Menambahkan class "button-nav-active" pada btnCelsius
btnCelsius.classList.add('button-nav-active')

// =========================================
//                  SIDEBAR
// =========================================

const CelsiusToFahrenheit = () => {
    sectionCelsiusToFahrenheit.style.display = "block"
    sectionFahrenehitToCelsius.style.display = "none"
    
    document.title = "Konsuhu - Fahrenheit Ke Celsius"

    btnCelsius.classList.add('button-nav-active')
    btnFahrenheit.classList.remove('button-nav-active')

}

const FahrenehitToCelsius = () => {
    sectionCelsiusToFahrenheit.style.display = "none"
    sectionFahrenehitToCelsius.style.display = "block"
    
    document.title = "Konsuhu - Celcius ke Fahrenheit"

    btnFahrenheit.classList.add('button-nav-active')
    btnCelsius.classList.remove('button-nav-active')
    
}



// =========================================
//          CELSIUS KE FAHRENHEIT
// =========================================

const inputCelcius = document.getElementById('input-celcius')
const handleFormCelsiusToFahrenheit = () => {
    const celsius = inputCelcius.value 

    if(!celsius) {
        document.getElementById('error-message-celsius').textContent = "Minimal input 1 karakter"
        return
    }
    
    if(celsius.length > 5) {
        document.getElementById('error-message-celsius').textContent = "Maksimal input 5 karakter"
        return
    }

    const resultFarenheit = celsius * (9/5) + 32

    document.getElementById('solution-celsius')
    .innerHTML = `${celsius}<sub>(°C)</sub> * (9/5) + 32  = ${resultFarenheit}<sub>(°F)</sub>`

    document.getElementById('result-fahrenheit').innerHTML = `${resultFarenheit}<sub>(°F)</sub>`
    
}

document.getElementById('handle-form-celsius').addEventListener('submit', (e) => {
    e.preventDefault()
    handleFormCelsiusToFahrenheit()
    inputCelcius.value = ""
})

inputCelcius.addEventListener('change', () => {
    document.getElementById('error-message-fahrenheit').textContent = ""
})



// =========================================
//          FAHRENHEIT KE CELSIUS
// =========================================
const inputFahrenheit = document.getElementById('input-fahrenheit')
const handleFormFahrenheitToCelsius = () => {
    const fahrenheit = inputFahrenheit.value 
    
    if(!fahrenheit) {
        document.getElementById('error-message-fahrenheit').textContent = "Minimal input 1 karakter"
        return
    }
    
    if(fahrenheit.length > 5) {
        document.getElementById('error-message-fahrenheit').textContent = "Maksimal input 5 karakter"
        return
    }
    
    const resultCelsius = (fahrenheit - 32) * 5/9
    
    document.getElementById('solution-fahrenheit')
    .innerHTML = `${fahrenheit}<sub>(°C)</sub> * (9/5) + 32  = ${resultCelsius}<sub>(°F)</sub>`
    
    document.getElementById('result-celsius').innerHTML = `${resultCelsius}<sub>(°F)</sub>`
    
}

document.getElementById('handle-form-fahrenheit').addEventListener('submit', (e) => {
    e.preventDefault()
    handleFormFahrenheitToCelsius()

    inputFahrenheit.value = ""
})

inputFahrenheit.addEventListener('change', () => {
    document.getElementById('error-message-celsius').textContent = ""
})