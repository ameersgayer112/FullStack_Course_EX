/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num) {

  if (num === 0) {
    return 1;
  }
  return num * findFactorial(num - 1)

}

//Exercise 2
const reverseString = function (str) {

  if(str.length <= 1)
  {
    return str
  }

  return str.charAt(str.length - 1) + reverseString(str.substring(0,str.length - 1))
}

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = [2,2]

const swap = function (arr1,arr2) {

  if(arr1.length === 0)
  return
  arr2[arr2.length ] = arr1.splice(0, 1 )[0]
  return swap(arr1, arr2)

 

}

console.log(findFactorial(5))
let str = "Ameer Sgayer"
console.log(reverseString(str,str.length))

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }