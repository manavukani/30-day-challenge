/*

Activity 4: Merge Two Sorted Lists

Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
Create a few test cases with linked lists and log the merged list.

*/

                            
// Node class represents a
// node in a linked list
class Node {
    // Data stored in the node
    constructor(data1, next1 = null) {
        this.data = data1;
        this.next = next1;
    }
}

// Function to merge two sorted linked lists
function sortTwoLinkedLists(list1, list2) {
    // Create a dummy node to serve
    // as the head of the merged list
    const dummyNode = new Node(-1);
    let temp = dummyNode;

    // Traverse both lists simultaneously
    while (list1 !== null && list2 !== null) {
        // Compare elements of both lists and
        // link the smaller node to the merged list
        if (list1.data <= list2.data) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        // Move the temporary pointer
        // to the next node
        temp = temp.next;
    }

    // If any list still has remaining
    // elements, append them to the merged list
    if (list1 !== null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }
    // Return the merged list starting
    // from the next of the dummy node
    return dummyNode.next;
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        // Print the data of the current node
        process.stdout.write(temp.data + " ");
        // Move to the next node
        temp = temp.next;
    }
    console.log();
}

// Example Linked Lists
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