

//EX1
const checkeven = function(num)
{
    if(num%2 === 0)
    {
        return true
    }else
    {
        return false
    }
}

console.log(checkeven(28))
console.log(checkeven(27))

//EX2

const printOddnum = function(arr)
{
    for(let i = 0; i < arr.length;i++)
    {
        if(!checkeven(arr[i]))
        {
            console.log(arr[i])
        }
    }
}

//EX3
var arr = [1,2,3,4,45,45,32,33,31]
printOddnum(arr)

const checkExists = function(arr,num)
{
    for(let i = 0; i < arr.length;i++)
    {
        if(arr[i] === num)
        {
            return true
        }
    }
    return false
}


console.log(checkExists([1, 2, 3], 5))
console.log(checkExists([1, 2, 3], 2))

//EX4
const calculator = {
    add : function(num1,num2)
    {
        return num1 + num2
    },
    subtract : function(num1,num2) {

        if(num1 > num2)
        {
            return num1 - num2
        }
        else
        {
            return num2 - num1
        }

    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


//EX5


const makeRegal = function(name) {
    return "His Royal Highness, " + name 
}

const increaseByNameLength = function(money,name){
 return money * name.length
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"