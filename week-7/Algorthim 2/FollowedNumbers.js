const followedNumbers = function(arrayNumbers){

    let helpSet = new Set(arrayNumbers);
    let arraySet = new Set();


    for(let number of arrayNumbers){
        if(helpSet.has(number + 1) || helpSet.has(number - 1)){
            arraySet.add(number);
        }
    }



    return Array.from(arraySet);
}

let arrayNumbers = [4,1,3]
console.log(followedNumbers(arrayNumbers))