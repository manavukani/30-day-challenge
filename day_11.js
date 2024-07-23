// task 1 - promisw with resolve and timeout

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is a resolve");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

// task 2 - promise with reject and handle error

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is a reject with catch");
  }, 2000);
});

myPromise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// task 3 - sequence of promises

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Promise");
  }, 2000);
});

promise1
  .then((message) => {
    console.log(message); // First Promise
    return promise2;
  })
  .then((message) => {
    console.log(message); // Second Promise
    return promise3;
  })
  .then((message) => {
    console.log(message); // Third Promise
  });

// task 4 - async function that waits for a promise to resolve

const myPromise3 = new Promise((resolve, reject) => {
  resolve("Promise 'resolved' through async function");
});

const asyncFunction = async () => {
  const message = await myPromise3;
  console.log(message);
};
asyncFunction();

// task 5 - async function that waits for a promise to reject

const myPromise4 = new Promise((resolve, reject) => {
  reject("Promise 'rejected' through async function");
});

const asyncFunction2 = async () => {
  try {
    const message = await myPromise4;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};
asyncFunction2();

// task 6 - fetch using promise
const url = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=2";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data["data"]["data"][1]["name"]);
  });

// task 7 - fetch using async await
const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data["data"]["data"][0]["name"]);
};
fetchData();

// task 8 - use promise.all to wait for multiple promises
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 1000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 3000);
});

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 2000);
});

Promise.all([promise5, promise6, promise7]).then((messages) => {
  console.log(messages);
});

// task 9 - use promise.race to wait for the fastest promise

Promise.race([promise5, promise6, promise7]).then((message) => {
  console.log(`Fastest resolved promise using Promise.race: "${message}"`);
});

/*

NOTE:

Async functions don't necessarily execute entirely before other code. 
They can pause their execution when they encounter an await statement with
a pending promise. This means the code continues running other parts of
the program while the async function waits for the promise to resolve.

Even though defined later, if task 4 uses await with a promise that resolves
quickly, it can appear to execute before tasks 1, 2, and 3 that have slower resolving
promises. This is because the code only waits for the awaited promise to resolve,
not for the entire async function to finish.



*/
