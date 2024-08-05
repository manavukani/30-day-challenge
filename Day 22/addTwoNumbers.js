/*

Activity 1: Add Two Numbers

Task 1: Solve the "Add Two Numbers" problem on LeetCode.
Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
Create a few test cases with linked lists and log the sum as a linked list.


Input: Pointer to the head of the two linked lists

num1  = 243, num2 = 564

l1 = [2,4,3]
l2 = [5,6,4]

Result: sum = 807; L = [7,0,8]

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const addTwoLinkedList = (list1, list2) => {
  let dummy = new Node(-1);
  let temp = dummy;
  let carry = 0;

  while (list1 != null || list2 != null || carry) {
    let sum = 0;
    if (list1 != null) {
      sum += list1.data;
      list1 = list1.next;
    }
    if (list2 != null) {
      sum += list2.data;
      list2 = list2.next;
    }

    sum += carry;
    carry = Math.floor(sum / 10);
    newNode = new Node(sum % 10);
    temp.next = newNode;
    temp = temp.next;
  }

  return dummy.next;
};

const printLinkedList = (head) => {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.data + " ");
      temp = temp.next;
    }
    console.log();
  };

let list1 = new Node(2);
list1.next = new Node(4);
list1.next.next = new Node(3);

let list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = new Node(4);

process.stdout.write("First linked list: ");
printLinkedList(list1);

process.stdout.write("Second linked list: ");
printLinkedList(list2);

let sum = addTwoLinkedList(list1, list2);

process.stdout.write("Sum of 2 linked list: ");
printLinkedList(sum);
