const Stack = require("./Stack")

class MinStack extends Stack {
    constructor() {
        super()
        this.minStack = new Stack()

    }

    push(x) {

        if (this.isEmpty()) {
            this.minStack.push(x)
        } else if (x < this.minStack.peek()) {
            this.minStack.push(x)
        }
        super.push(x)
    }

    pop() {
        if (this.isEmpty()) {
            return null
        } else if (this.peek() === this.minStack.peek()) {
            this.minStack.pop()
        }


        return super.pop()
    }


    getMin() {
        this.minStack.peek()
    }
}








let ms = new MinStack()
ms.push(3)
ms.push(4)
ms.push(3)
ms.pop(3)
console.log(ms)
/*
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19
*/



/* Do not remove the exports below */
module.exports = MinStack