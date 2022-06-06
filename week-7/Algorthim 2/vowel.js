let vowelsArray = ['a','e','i','o','u'];

const countVowels = function(str){
  let count = 0;

  for(let i = 0; i < vowelsArray.length;i++ ){
    for(let j = 0; j < str.length ; j++){
      if(vowelsArray[i] === str[j]){
        count++;
      }
    }
  }

  return count;
}


console.log(countVowels('aabcde'));