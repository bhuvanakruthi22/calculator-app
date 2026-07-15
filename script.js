const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");

// Number Buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// Operator Buttons
operatorButtons.forEach(button => {

    if (button.id === "clear" || button.id === "backspace") {
        return;
    }

    button.addEventListener("click", () => {

        const lastChar = display.value.slice(-1);

        if ("+-*/%".includes(lastChar)) {
            display.value =
                display.value.slice(0, -1) + button.textContent;
        } else {
            display.value += button.textContent;
        }

    });

});

// Decimal
decimalButton.addEventListener("click", () => {
    display.value += ".";
});

// Clear
clearButton.addEventListener("click", () => {
    display.value = "";
});

// Backspace
backspaceButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

// Equals
equalsButton.addEventListener("click", () => {

    try {

        if (display.value === "") return;

        display.value = eval(display.value);

    } catch {

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1000);

    }

});