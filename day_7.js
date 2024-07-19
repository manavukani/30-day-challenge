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
let getBookInfo = function () {
  return `${this.title} was written in ${this.year}`;
};
book.getBookInfo = getBookInfo;
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
