const display = document.getElementById("display");

function toDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function