const biggiestWordScore = function(ArrayStrings){

    let scoreOfWord = -2454635434;
    let maxWordScore = -2454635434;
    let splitedwords = ArrayStrings.split(' ');
    let highestWord = null;

    splitedwords.map((word) => {
        if(word){

            scoreOfWord = 0;
            maxWordScore = 0;
        }
        for(let i = 0 ; i < word.length;i++){
            scoreOfWord += word[i].charCodeAt() - 97;
        }

        if(scoreOfWord > maxWordScore){
            maxWordScore = scoreOfWord;
            highestWord = word;
        }


    })

    return highestWord;
    



}


let ArrayStrings = "if you are a winner"

console.log(biggiestWordScore(ArrayStrings));