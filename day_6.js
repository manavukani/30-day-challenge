// task 1 - 9
arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
let arr2 = arr.map((x) => x * 2);
console.log(arr2);
console.log(arr.filter((x) => x % 2 == 0));
console.log(arr.filter((x) => x % 2 != 0));
sum = arr.reduce((x, y) => x + y);
console.log(sum);

// task 10
var iterate = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
iterate(arr);

// task 11
var iterate2 = function (arr) {
  arr.forEach((x) => console.log(x));
};
iterate2(arr2);

// task 12
var array2d = [[1,2,3], [4,5,6], [7,8,9]];
console.log(array2d);

// task 13
console.log(array2d[1][1]); // 5