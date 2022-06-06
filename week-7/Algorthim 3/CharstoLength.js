const CharstoLength = function (word) {

    let resultWord = "";
    let countCharacter = 1;

    for (let i = 0; i < word.length; i++) {

        if(word[i] !== word[i+1]){
            resultWord += word[i] + countCharacter;
            countCharacter = 0;
        }
            
        countCharacter++;

    }
    return resultWord;

}


let word = "aaabbcb";
console.log(CharstoLength(word));