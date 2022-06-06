class Queue{
    constructor(){
        this.queue = []
        this.length = 0
    }

    isEmpty()
    {
        return this.length === 0
    }

    print(){
        console.log(this.queue)
    }

    enqueue(x){
        this.queue.push(x)
        this.length++
    }

    peek(){
        return this.isEmpty() ? null :this.queue[0]
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        this.length--
        let returnItem = this.queue[0]
        this.queue.splice(0,1)
        return returnItem
    }
}









let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true



module.exports = Queue