// Define functions for the calculator
function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}
