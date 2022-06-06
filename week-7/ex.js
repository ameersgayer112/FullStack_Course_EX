


const foo = function () {

    let arrayNum = []

    return function(num)
    {
        if (arrayNum.length === 0) {
            arrayNum.push(num);
            return num;
        }
    
        arrayNum.push(num);
        return num + arrayNum[arrayNum.length - 2];
    }


}

let myfoo = foo()





console.log(myfoo(3)); // 3
console.log(myfoo(1)); // 4
console.log(myfoo(2)); // 3
console.log(myfoo(2)); // 4
console.log(myfoo(6)); // 8
