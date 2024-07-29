// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

// task 5

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.shift(); // popleft() in python
  }

  front() {
    if (this.items.length == 0) {
      return "No items in queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + ", ";
    return str;
  }
}

console.log("--- QUEUE ---");
const queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.dequeue()); // underflow
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue()); // 10 20 30
console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.printQueue()); // 20 30
console.log(queue.front()); // 20

// task 6
console.log("--- PRINTER QUEUE ---");
const printerQueue = new Queue();
printerQueue.enqueue("Doc 1");
printerQueue.enqueue("Doc 2");
printerQueue.enqueue("Doc 3");
console.log(printerQueue.front()); // 1
console.log(printerQueue.dequeue()); // 1
console.log(printerQueue.front()); // 2
printerQueue.enqueue("Doc 4");
console.log(printerQueue.printQueue()); // 2 3 4
console.log(printerQueue.front()); // 2
console.log(printerQueue.dequeue()); // 2
console.log(printerQueue.dequeue()); // 3
console.log(printerQueue.dequeue()); // 4
