const ReverseOnlyNumbers = function (array) {

    let arrayNumbers = [];
    let reverseArrayNumbers = [];
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] <= 9) {
            arrayNumbers.push(array[i]);
        }
    }

    for (let i = 0; i < arrayNumbers.length; i++) {

        reverseArrayNumbers.push(arrayNumbers[arrayNumbers.length - 1 - i]);
    }

    let j = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 && array[i] <= 9) {

            result.push(reverseArrayNumbers[j])
            j++;
        }else{
            result.push(array[i])
        }
    }

 
    return result;
}

let array = [1, 'w', 'e', 2, 'r', 7, 8];

console.log(ReverseOnlyNumbers(array))