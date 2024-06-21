const display = document.getElementById("display");

function toDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}


function calculate () {
    let input = display.value.trim();
    let operators = ['+', '-', 'x', '÷'];
    let numbers = [];
    let currentOperator = [];

    let operatorsFound = false
    // Split the input if it contains any operators


    for (let i=0; i<operators.length; i++)
        {
            if (input.includes(operators[i]))
                {
                    operatorsFound = true;
                    numbers = input.split(operators[i]);
                    currentOperator = operators[i];
                    break;
                }
        }
    // For Debugging    
    // console.log(numbers);
    // console.log(currentOperator);

    let result;
    
    if (!operatorsFound){
        display.value = "Error";
    }

    else if (currentOperator == "+")
        {
            result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        }
    else if (currentOperator == "-")
        {
            result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        }
    else if (currentOperator == "x")
        {
            result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        }
    else if (currentOperator == "÷")
        {
            result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        }
    display.value = result;
}