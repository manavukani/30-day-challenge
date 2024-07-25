// task 1
let name = "John";
let age = 30;
console.log(`My name is ${name} and my age is ${age}`);

// task 2 - multi line string
multiLine = 
`
My name is ${name}
My age is ${age}
My hobbies are:
- Reading
- Coding
- Playing
`
console.log(multiLine);

// task 3 - array destructuring to extract first and second 
let arr = ["John", "Doe", 70];
let [firstName, lastName, weight] = arr;
console.log(firstName);
console.log(lastName);
console.log(weight);

// task 4 - object destructuring to extract author and title from book object
let book = {
    title: "The Alchemist",
    author: "Paul Coelho",
    readingStatus: true
};
let {title, author} = book;
console.log(title);
console.log(author);

// task 5 - spread operator
arr2 = [1, 2, 3, 4, 5];
let arr3 = [...arr2, 6, 7, 8, 9, 10];
console.log(arr3);

// task 6 - rest operator
function sum(...args) {
    return args.reduce((acc, item) => acc + item, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// task 7 - default parameters
let product = function(a, b = 1) {
    return a * b;
}
console.log(product(5, 2));
console.log(product(5));

// task 8 - object literal with methods
let obj = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
};
obj.greet();

// task 9
let key = "name";
let value = "John";
let obj2 = {
    [key]: value
};
console.log(obj2);