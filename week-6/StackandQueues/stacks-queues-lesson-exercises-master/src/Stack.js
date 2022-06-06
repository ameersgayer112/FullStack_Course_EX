/* Write your class below */

class Stack{
    constructor(){
        this.stack = []
        this.length = 0
    }

    print()
    {
        console.log(this.stack)
    }

    push(item){
        this.stack[this.length] = item
        this.length++
    }

    pop(){

        if(this.isEmpty()){
            return null
        }
        this.length--
        return delete this.stack[this.length]

    }

    isEmpty(){
        return this.length === 0
    }

    peek(){
        return this.isEmpty() ? null :this.stack[this.length - 1]
    }




}

let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true














/* Do not remove the exports below */
module.exports = Stack