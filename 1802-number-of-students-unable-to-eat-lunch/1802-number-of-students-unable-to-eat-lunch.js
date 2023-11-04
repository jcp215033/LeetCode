/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

class Node {
    constructor(val, next) {
        this.val = val !== undefined ? val : undefined
        this.next = next !== undefined ? next : null
    }
}

class NewQueue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }
    enqueue(val) {
        if (!this.head) this.head = this.tail = new Node(val)
        else {
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
        this.length++
    }

    dequeue() {
        if (!this.head) return null
        const val = this.head.val
        this.head = this.head.next
        this.length--
        if (!this.head) this.tail = null
        return val
    }

    peek() {
        return this.head ? this.head.val : null
    }

    isEmpty() {
        return this.length === 0
    }
}


var countStudents = function(students, sandwiches) {
    let queue = new NewQueue();
    for (let student of students) queue.enqueue(student);
    sandwiches = sandwiches.reverse()

    let count = 0;
    while (sandwiches.length) {
        if (queue.peek() === sandwiches[sandwiches.length - 1]) {
            queue.dequeue();
            sandwiches.pop();
            count = 0;
        } else {
            queue.enqueue(queue.dequeue())
            count++
        }

        if (count === queue.length) return count
    }
    return 0
};