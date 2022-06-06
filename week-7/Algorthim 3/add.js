const add = function (number1, number2) {
    if (number2 === undefined) {
        return (number) => number1 + number;
    }
    return number1 + number2;
}




console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7