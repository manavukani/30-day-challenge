// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

// task 3

class Stack {
  // using array (can also do using LL)
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length == 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  peek() {
    if (this.items.length == 0) {
      return "No items";
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

console.log("--- STACK ---");
const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.pop()); // underflow
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // 10 20 30
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.printStack()); // 10 20
console.log(stack.peek()); // 20

// task 4
const reverseString = (str) => {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  
  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
};

console.log("--- REVERSE STRING ---");
console.log(reverseString("HELLOW WORLD"));

// extra
const postFixEvaluation = (exp) => {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (!isNaN(c)) stack.push(c - "0");
    else {
      let val1 = stack.pop();
      let val2 = stack.pop();
      if (val1 == "Underflow" || val2 == "Underflow")
        return "Can not perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;
        case "-":
          stack.push(val2 - val1);
          break;
        case "/":
          stack.push(val2 / val1);
          break;
        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }

  return stack.pop();
};

console.log("--- POST FIX EVALUATION ---");
console.log(postFixEvaluation("235*+8-")); // 9
console.log(postFixEvaluation("23*+")); // cannot perform
