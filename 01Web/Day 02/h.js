function calculator (operator, value1, value2) {
    switch (operator) {
        case '+':
        return value1 + value2;

        case '-':
        return value1 - value2;

        case '*':
        return value1 * value2;

        case '/':
        return value1 / value2;

    }
}

console.log(calculator('+', 5, 9) )// 14
console.log(calculator('-', 7, 3) )// 4
console.log(calculator('*', 5, 5) )// 25
console.log(calculator('/', 9, 3) )// 3