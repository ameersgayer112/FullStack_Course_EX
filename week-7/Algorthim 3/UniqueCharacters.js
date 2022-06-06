const uniqueCharacters = function (word) {

    const mySet = new Set(word);

    return mySet.size === word.length ? true : false;

}

let word1 = "hello";
console.log(uniqueCharacters(word1))

let word2 = "cat";
console.log(uniqueCharacters(word2))

