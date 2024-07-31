// ----------- find all occurrences of JavaScript -----------
// Modifiers: g - global, i - case insensitive, m - multiline

const str_task1 = "JavaScript is a language. Web dev uses Javascript.";
const task1 = /JavaScript/gi;
const matches_task1 = str_task1.match(task1);
console.log(matches_task1);

// ----------- match all digits in a string -----------

const str_task2 = "2 apples, 50 people, 11 players, 5 sports";
const task2 = /\d/g; // '\d' = [0-9]
const matches_task2 = str_task2.match(task2);
console.log(matches_task2);

// ----------- match all words in a string that start with a capital letter -----------
const str_task3 = "India is Largest Country by Population";
const task3 = /\b[A-Z][a-z]*\b/g; // '/b' - boundary (start or end with specific)
const matches_task3 = str_task3.match(task3);
console.log(matches_task3);

// ----------- match all sequences of one or more digits in a string. Log the matches -----------

const str_task4 = "2 apples, 50 people, 11 players, 5 sports";
const task4 = /\d+/g; // '\d' = [0-9]
const matches_task4 = str_task2.match(task4);
console.log(matches_task4);

// ----------- capture the area code, central office code, and line number from a US phone number format -----------
// Quantifiers:  n{X} = sequence of X n's
const str_task5 = "(123) 456-7890";
const task5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches_task5 = str_task5.match(task5);

if (matches_task5) {
  console.log("Area Code:", matches_task5[1]);
  console.log("Central Office Code:", matches_task5[2]);
  console.log("Line Number:", matches_task5[3]);
} else {
  console.log("No matches found.");
}

// ----------- capture the username and domain from an email address -----------
const str_task6 = "username@email.com";
const task6 = /([^@]+)@([^@]+)/; // [^@] - any character except @
const matches_task6 = str_task6.match(task6);
if (matches_task6) {
  console.log("Username:", matches_task6[1]);
  console.log("Domain:", matches_task6[2]);
} else {
  console.log("No matches found.");
}

// ----------- match a word only if it is at the beginning of a string. Log the matches. -----------
const str_task7 = "Hello world, welcome to JavaScript";
const task7 = /^\w+/g; // ^ - beginning, \w+ - word
const matches_task7 = str_task7.match(task7);
console.log(matches_task7);

// ----------- match a word only if it is at the end of a string. Log the matches. -----------
const str_task8 = "Hello world, welcome to JavaScript";
const task8 = /\w+$/g;
const matches_task8 = str_task8.match(task8);
console.log(matches_task8);

// ----------- validate password (atleast one upper, one lower, one digit, one special, 8 char long) -----------

// ?=n                      Matches any string followed by specific string n
// . 	                    Find a single character, except newline or line terminator
// (?=.*[a-z])              Ensure at least one lowercase letter
// (?=.*[A-Z])              Ensure at least one uppercase letter
// (?=.*\d)                 Ensure at least one digit
// (?=.*[@$!%*?&])          Ensure at least one special character
// [A-Za-z\d@$!%*?&]{8,}$   Ensure the length is at least 8 characters

const str_task9 = "Passw0rd!";
const task9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const validate_pw = task9.test(str_task9);
console.log(validate_pw);

// ----------- validate a URL -----------
// ^(https?:\/\/)?              Optional http or https protocol
// (www\.)?                     Optional www subdomain
// ([a-zA-Z0-9-]{1,63}\.)+      Domain name, up to 63 characters per segment
// [a-zA-Z]{2,6}                Top-level domain (TLD) of 2 to 6 letters
// (\/[^\s]*)?$                 Optional path, no spaces allowed

const str_task10 = "https://www.google.com";
const task10 =
  /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
const validate_url = task10.test(str_task10);
console.log(validate_url);
