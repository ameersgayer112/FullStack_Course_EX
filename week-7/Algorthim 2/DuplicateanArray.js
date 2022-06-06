const DuplicateanArray =  function(array){

    let duplicateArray = array.slice(0);
    for(let i = array.length ; i < array.length *2 ; ++i){

        duplicateArray[i] = array[i - array.length];

    }
    return duplicateArray;
}

let array = [1,2,3];
console.log(DuplicateanArray(array));