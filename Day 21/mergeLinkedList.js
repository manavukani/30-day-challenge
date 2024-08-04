/*

Activity 4: Merge Two Sorted Lists

Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list.

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const sortTwoLinkedLists = (list1, list2) => {
  // dummy node - head of the merged list
  const dummyNode = new Node(-1);
  let temp = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    // Move temporary to next node
    temp = temp.next;
  }

  // remaining nodes in any list
  if (list1 !== null) {
    temp.next = list1;
  } else if (list2 !== null) {
    temp.next = list2;
  }

  return dummyNode.next;
};

const printLinkedList = (head) => {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  }
  console.log();
};

let list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

let list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

process.stdout.write("First sorted linked list: ");
printLinkedList(list1);

process.stdout.write("Second sorted linked list: ");
printLinkedList(list2);

let mergedList = sortTwoLinkedLists(list1, list2);

process.stdout.write("Merged sorted linked list: ");
printLinkedList(mergedList);
