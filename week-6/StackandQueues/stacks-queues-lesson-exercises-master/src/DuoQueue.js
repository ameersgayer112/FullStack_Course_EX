const Queue = require("./Queue")

class DuoQueue {
    constructor() {
        this.queues = []
        this.queues.push(new Queue())
        this.queues.push(new Queue())

    }

    enqueue(person, qNum) {
        this.queues[qNum - 1].enqueue(person)
    }

    dequeue(qNum) {
        this.queues[qNum - 1].dequeue()
    }

    getLongestQueue() {

        if (this.queues[0].length > this.queues[1].length) {
            return this.queues[0]
        }
        return this.queues[1]

    }


    getShortestQueue() {
        if (this.queues[0].length > this.queues[1].length) {
            return this.queues[1]
        }
        return this.queues[0]


    }

    balanceQueues() {

        const longestQueue = this.getLongestQueue()
        const shortestQueue = this.getShortestQueue()

        while (longestQueue.length - shortestQueue.length > 1) {
            shortestQueue.enqueue(longestQueue.dequeue())
        }

    }
}








let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }




/* Do not remove the exports below */
module.exports = DuoQueue