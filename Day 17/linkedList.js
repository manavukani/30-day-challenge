// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes

// ---- more function to add ----
// 1. getLength()
// 2. deleteNode(data) - with given data
// 3. addPosition(x) - at certain posn
// 4. removePosition(x) - at certain posn

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insterStart(value) {
    const newNode = new Node(value);
    // empty
    if (this.head === null) {
      this.head = newNode; // make newNode head
      return;
    } else {
      // make head next of newNode
      newNode.next = this.head;
      // insert newNode as head
      this.head = newNode;
    }
  }

  insertEnd(value) {
    const newNode = new Node(value);
    // empty
    if (this.head === null) {
      this.head = newNode; // make newNode head
      return;
    } else {
      let currentNode = this.head; // make currentNode head
      // traverse to last node
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      // insert newNode to next of current (last node)
      currentNode.next = newNode;
    }
  }

  removeFirst() {
    if (this.head === null) {
      console.log("Empty list");
      return;
    } else {
      // change head to 2nd node
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (this.head === null) {
      console.log("Empty list");
      return;
    }
    // only 1 node -> remove
    if (this.head.next === null) {
      this.head = null;
    } else {
      let currentNode = this.head;
      // traverse to 2nd last node
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      // remove the last
      currentNode.next = null;
    }
  }

  display() {
    if (this.head == null) {
      console.log("Empty list");
      return;
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value, "->");
        currentNode = currentNode.next;
      }
    }
    console.log("----------");
  }
}

const list = new LinkedList();
list.insertEnd(1);
list.insertEnd(2);
list.insertEnd(3);
list.insterStart(5);
list.display(); // 5 1 2 3
list.removeFirst();
list.display(); // 1 2 3
list.removeLast();
list.display(); // 1 2
list.removeLast();
list.display(); // 1
list.removeLast();
list.display(); // empty
list.removeLast();