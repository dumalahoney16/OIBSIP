document.getElementById("convertBtn").addEventListener("click", function() {
    const tempInput = document.getElementById("tempInput").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultSpan = document.getElementById("result");

    if (tempInput === "" || isNaN(tempInput)) {
        resultSpan.textContent = "Please enter a valid number!";
        return;
    }

    let temp = parseFloat(tempInput);
    let converted;
    let symbol = "";

    if (fromUnit === toUnit) {
        converted = temp;
        symbol = fromUnit === "Celsius" ? "°C" : fromUnit === "Fahrenheit" ? "°F" : "K";
    } else if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") { converted = temp * 9/5 + 32; symbol = "°F"; }
        if (toUnit === "Kelvin") { converted = temp + 273.15; symbol = "K"; }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") { converted = (temp - 32) * 5/9; symbol = "°C"; }
        if (toUnit === "Kelvin") { converted = (temp - 32) * 5/9 + 273.15; symbol = "K"; }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") { converted = temp - 273.15; symbol = "°C"; }
        if (toUnit === "Fahrenheit") { converted = (temp - 273.15) * 9/5 + 32; symbol = "°F"; }
    }

    resultSpan.textContent = `${converted.toFixed(2)} ${symbol}`;
});
