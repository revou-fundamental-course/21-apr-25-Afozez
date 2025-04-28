// Ambil elemen section dan tombol mengunakan id
const sectionCelsiusToFahrenheit = document.getElementById('conversion-celsius')
const sectionFahrenehitToCelsius = document.getElementById('conversion-fahrenheit')
const btnCelsius = document.getElementById('btn-celsius')
const btnFahrenheit = document.getElementById('btn-fahrenheit')

// Set default tombol aktif
btnCelsius.classList.add('button-nav-active')

// =========================================
//                  SIDEBAR
// =========================================

// Tampilkan form Celsius ke Fahrenheit
const CelsiusToFahrenheit = () => {
    sectionCelsiusToFahrenheit.style.display = "block"
    sectionFahrenehitToCelsius.style.display = "none"
    
    document.title = "Konsuhu - Fahrenheit Ke Celsius"

    btnCelsius.classList.add('button-nav-active')
    btnFahrenheit.classList.remove('button-nav-active')
}

// Tampilkan form Fahrenheit ke Celsius
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

// Ambil input Celsius
const inputCelcius = document.getElementById('input-celcius')

// Handle form konversi Celsius ke Fahrenheit
const handleFormCelsiusToFahrenheit = () => {
    const celsius = inputCelcius.value 

    // Validasi input kosong
    if(!celsius) {
        document.getElementById('error-message-celsius').textContent = "Minimal input 1 karakter"
        return
    }
    
    // Validasi maksimal 5 karakter
    if(celsius.length > 5) {
        document.getElementById('error-message-celsius').textContent = "Maksimal input 5 karakter"
        return
    }

    // Konversi Celsius ke Fahrenheit
    const resultFarenheit = celsius * (9/5) + 32

    // Tampilkan solusi dan hasil
    document.getElementById('solution-celsius')
    .innerHTML = `${celsius}<sub>(°C)</sub> * (9/5) + 32  = ${resultFarenheit}<sub>(°F)</sub>`

    document.getElementById('result-fahrenheit').innerHTML = `${resultFarenheit}<sub>(°F)</sub>`
}

// Event submit form Celsius ke Fahrenheit
document.getElementById('handle-form-celsius').addEventListener('submit', (e) => {
    e.preventDefault()
    handleFormCelsiusToFahrenheit()
    inputCelcius.value = ""
})

// Hapus pesan error saat input berubah
inputCelcius.addEventListener('change', () => {
    document.getElementById('error-message-fahrenheit').textContent = ""
})

// =========================================
//          FAHRENHEIT KE CELSIUS
// =========================================

// Ambil input Fahrenheit
const inputFahrenheit = document.getElementById('input-fahrenheit')

// Handle form konversi Fahrenheit ke Celsius
const handleFormFahrenheitToCelsius = () => {
    const fahrenheit = inputFahrenheit.value 
    
    // Validasi input kosong
    if(!fahrenheit) {
        document.getElementById('error-message-fahrenheit').textContent = "Minimal input 1 karakter"
        return
    }
    
    // Validasi maksimal 5 karakter
    if(fahrenheit.length > 5) {
        document.getElementById('error-message-fahrenheit').textContent = "Maksimal input 5 karakter"
        return
    }
    
    // Konversi Fahrenheit ke Celsius
    const resultCelsius = (fahrenheit - 32) * 5/9
    
    // Tampilkan solusi dan hasil
    document.getElementById('solution-fahrenheit')
    .innerHTML = `${fahrenheit}<sub>(°C)</sub> * (9/5) + 32  = ${resultCelsius}<sub>(°F)</sub>`
    
    document.getElementById('result-celsius').innerHTML = `${resultCelsius}<sub>(°F)</sub>`
}

// Event submit form Fahrenheit ke Celsius
document.getElementById('handle-form-fahrenheit').addEventListener('submit', (e) => {
    e.preventDefault()
    handleFormFahrenheitToCelsius()
    inputFahrenheit.value = ""
})

// Hapus pesan error saat input berubah
inputFahrenheit.addEventListener('change', () => {
    document.getElementById('error-message-celsius').textContent = ""
})
