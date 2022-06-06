const secondBiggest = function(arrayNumbers){
    let maxNumber = -2454635434;
    let secondMaxNumber = -2454635434;

    if(arrayNumbers.length <= 1)
    {
        return null;
    }
  
    for(let i = 0 ;i < arrayNumbers.length; i ++){
      if(arrayNumbers[i] > maxNumber){
        maxNumber = arrayNumbers[i];
      }
    }
  
    for(let i = 0 ; i < arrayNumbers.length; i ++ ){
      if(arrayNumbers[i] > secondMaxNumber && arrayNumbers[i] < maxNumber){
        secondMaxNumber = arrayNumbers[i];
      }
    }
  
    if(secondMaxNumber === -2454635434){
      return null;
    }
    return secondMaxNumber;
  }
  
  let arrayNumbers =  [12,3,4,7,23];
  console.log(secondBiggest(arrayNumbers));