class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello from ${this.name} (Age: ${this.age})`);
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Age updated to ${this.age}`);
  }

  static hello() {
    console.log("Hello from Person class");
  }

  static lastName = "LOL";

  get message() {
    return `I'm ${this.name} and my age is ${this.age}`;
  }

  set setName(newName) {
    this.name = newName;
  }
}

// task 1
const person1 = new Person("Manav", 23);
person1.greet();

// task 2
person1.updateAge(24);

// task 3 - inheritance
class Student extends Person {
  static count = 0;

  constructor(name, age, id) {
    super(name, age);
    this.id = id;
    Student.count++;
  }

  get studentId() {
    return this.id;
  }

  greet() {
    console.log(`Hello from ${this.name} (Age: ${this.age}. ID: ${this.id})`);
  }
}

const student1 = new Student("Manav", 22, "A101");
console.log("ID:", student1.studentId);

// task 4 - method override
student1.greet();

// task 5 - static
// can only be called by object class not instance

Person.hello();

// task 6
const person2 = new Student("Bob", 15, "A102");
const person3 = new Student("Alice", 13, "A103");
const person4 = new Student("Rob", 18, "A104");

console.log(Student.count);

// task 7 - getter
console.log(person2.message);

// task 8 - setter
person2.setName = "Barley";
console.log(person2.message);

// task 9 - private fields
class Account {
  static count = 0;
  constructor(name, id) {
    this.name = name;
    this.id = id;
    Account.count++;
  }
  
  #balance = 0;
  
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }
  
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  get avlBalance() {
    return this.#balance;
  }
}

// task 10
const ac1 = new Account("Max", "A00001");
console.log("Available Balance:", ac1.avlBalance);
ac1.deposit(200);
console.log("Available Balance:", ac1.avlBalance);
ac1.withdraw(100);
console.log("Available Balance:", ac1.avlBalance);
ac1.deposit(300);
console.log("Available Balance:", ac1.avlBalance);
