function calculateBmi() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('output').innerText = "Please enter valid weight and height.";
        return;
    }

    var result = weight / (height * height);
    document.getElementById('output').innerHTML = interpretation(result);
}

function interpretation(result) {
    if (result < 18.5) {
        return `Body Mass Index Result: ${result.toFixed(2)} UNDERWEIGHT`;
    } else if (result >= 18.5 && result < 25) {
        return `Body Mass Index Result: ${result.toFixed(2)} NORMAL WEIGHT`;
    } else if (result >= 25 && result < 30) {
        return `Body Mass Index Result: ${result.toFixed(2)} OVERWEIGHT`;
    } else {
        return `Body Mass Index Result: ${result.toFixed(2)} OBESE`;
    }
}

function clearResult() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('output').innerHTML = 'See your BMI here!';
}
