// task 1
numbers = function () {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};
// numbers();

// task 2
table_of = function (num) {
  for (i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};
// table_of(5);

// task 3
sum = function (num) {
  sum = 0;
  while (num > 0) {
    sum += num;
    num--;
  }
  console.log(sum);
};
// sum(10);

// task 4
print = function (num) {
  while (num > 0) {
    console.log(num);
    num--;
  }
};
// print(10);

// task 5
do_while = function (num) {
  i = 1;
  do {
    console.log(i);
    i += 1;
  } while (i <= num);
};
// do_while(5);

// task 6
factorial = function (num) {
  fact = 1;
  do {
    fact *= num;
    num--;
  } while (num > 0);
  console.log(fact);
};
// factorial(5);

// task 7
star = function (num) {
  for (i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
};
// star(5);

// task 8
skip = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i == 5) {
      continue;
    } else {
      console.log(i);
    }
  }
};
// skip(10);

// task 9

stop = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i == 7) {
      break;
    } else {
      console.log(i);
    }
  }
};
stop(10);
