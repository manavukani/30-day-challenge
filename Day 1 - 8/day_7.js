// task 1 - 2
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
};
console.log(book);
console.log(book.title);
console.log(book.author);

// task 3
console.log("------------------");
let getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
book.getSummary = getSummary;
console.log(book.getSummary());

// task 4
console.log("------------------");
let updateYear = function (newYear) {
  this.year = newYear;
};
book.updateYear = updateYear;
book.updateYear(2021);
console.log(book.getSummary());

// task 5 - 6
console.log("------------------");
let library = {
  name: "Central Library",
  books: ["book1", "book2", "book3"],
};
console.log(library);
console.log(library.name);
console.log(library.books[0]);
console.log(library.books[1]);
console.log(library.books[2]);

// task 7
console.log("------------------");
book.getBookInfo = function () {
  return `${this.title} was written in ${this.year}`;
};;
console.log(book.getBookInfo());

// task 8
// Use a for...in loop to iterate over the properties of
// the book object and log each property and its value.
console.log("------------------");
for (let key in book) {
  console.log(key, book[key]);
}

// task 9
// Use Object.keys and Object.values methods to log all
// the keys and values of the book object.
console.log("------------------");
console.log(Object.keys(book));
console.log(Object.values(book));


/* 

Object.assign(target, source) // Copies properties from a source object to a target object

Object.create(object) // Creates an object from an existing object

Object.entries(object) // Returns an array of the key/value pairs of an object

Object.fromEntries() // Creates an object from a list of keys/values

Object.keys(object) // Returns an array of the keys of an object

Object.values(object) // Returns an array of the property values of an object

Object.groupBy(object, callback) // Groups object elements according to a function

-------------------

Object.defineProperty(object, property, descriptor) // Adding or changing an object property

Object.defineProperties(object, descriptors) // Adding or changing object properties

Object.getOwnPropertyDescriptor(object, property) // Accessing a Property

Object.getOwnPropertyDescriptors(object) // Accessing Properties

Object.getOwnPropertyNames(object) // Returns all properties as an array

Object.getPrototypeOf(object) // Accessing the prototype

-------------------

const car = {type:"Fiat", model:"500", color:"white"}; // Prevents re-assignment

Object.preventExtensions(object) // Prevents adding object properties

Object.isExtensible(object) // Returns true if properties can be added to an object

Object.seal(object) // Prevents adding and deleting object properties

Object.isSealed(object) // Returns true if object is sealed

Object.freeze(object) // Prevents any changes to an object

Object.isFrozen(object) // Returns true if object is frozen

*/