function  greetingsName(name) {
    return `Hello ${name}`;
}

console.log(greetingsName("Aroken"))

// =====================================================

const numbers = [10, 2, 3, 41, 54, 63, 7, 8, 9]
function arrayNumber(array) {
    for (let i = 0; i < array.length; i++) {
        const number = array[i]
        if (number > 10) {
            console.log(number)
        }
    }
}
arrayNumber(numbers)

// ==========================================================

function calculator(num1, num2, operator) {
    if (operator === "plus") {
        return num1 + num2;
    } else if (operator === "minus") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator === "divide") {
        return num1 / num2;
    }
}

let result = calculator(2, 3, 'plus');
console.log(result);

result = calculator(8, 7, 'minus');
console.log(result);

result = calculator(8, 5, 'multiply');
console.log(result); 

result = calculator(10, 5, 'divide');
console.log(result); 