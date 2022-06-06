const camelCase = function (arrayStrings) {
    let resultArrayWords = "";

    let splitedwords = arrayStrings.split(' ');

    let index = 0;
    splitedwords.map((word) => {
        if (index === 0) {
            resultArrayWords += word[0].toLowerCase() + word.slice(1);
        } else {
            resultArrayWords += word[0].toUpperCase() + word.slice(1);
        }
        index++;

    })

    return resultArrayWords;
}


let words = "Hello case";
console.log(camelCase(words));