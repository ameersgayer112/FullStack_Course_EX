const MedianChar = function(word){
    let wordTemp = word.split('').sort().join('');
  
    let index = 0;
  
    if(wordTemp.length % 2 === 0){
      index = wordTemp.length/2 - 1;
    }else {
      index = (wordTemp.length + 1)/2 - 1;
    }
  
  
  
    return wordTemp[index];
  }
  
  console.log(MedianChar('question'))
  console.log(MedianChar('abcde'))