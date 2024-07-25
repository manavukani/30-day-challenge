// task 1
result = function (x) {
  return x > 0
    ? console.log("positive")
    : x < 0
    ? console.log("negative")
    : console.log("zero");
};
result(-8);

// task 2
vote = function (age) {
  return age >= 18
    ? console.log("eligible to vote")
    : console.log("not eligible to vote");
};
vote(18);

// task 3
largest = function (a, b, c) {
  if (a > b) {
    if (a > c) return a;
    else return c;
  } else {
    if (b > c) return b;
    else return c;
  }
};
console.log(largest(5.561, -7.65, 0));

// task 4
day = function (day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;

    case 2:
      console.log("Monday");
      break;

    case 3:
      console.log("Tuesday");
      break;

    case 4:
      console.log("Wednesday");
      break;

    case 5:
      console.log("Thursday");
      break;

    case 6:
      console.log("Friday");
      break;

    case 7:
      console.log("Saturday");
      break;

    default:
      console.log("Invalid day");
      break;
  }
};
day(5);

// task 5
grade = function (score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
};
console.log(grade(90));

// task 6
oddEven = function (num) {
  return num % 2 === 0 ? console.log("even") : console.log("odd");
};
oddEven(5);

// task 7
leapYear = function (year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return console.log("Leap year");
  } else {
    return console.log("Not a leap year");
  }
};
leapYear(2300);
