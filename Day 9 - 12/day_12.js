// task 1 - throw error

const error = () => {
  try {
    throw new Error("This is an error");
  } catch (error) {
    console.log("Error:", error.message);
  }
};
// error();

// ------------------ task 2 - throw error when divide by zero ------------------
const validateDivide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const testDivide = (a, b) => {
  try {
    console.log(validateDivide(a, b));
  } catch (error) {
    console.log("Error:", error.message);
  }
};
// testDivide(10, 0);
// testDivide(10,2);

// ------------------ task 3 - try catch finally ------------------

const tryCatchFinally = () => {
  try {
    console.log("Try block");
    throw new Error("This is an error");
  } catch (error) {
    console.log("Catch block : ", error.message);
  } finally {
    console.log("Finally block");
  }
};
// tryCatchFinally();

// ------------------ task 4 - custom error ------------------

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
const riskyFunction = () => {
  try {
    throw new ErrorHandler("Something went wrong in riskyFunction!", 400);
  } catch (error) {
    if (error instanceof ErrorHandler) {
      console.error(
        `ErrorHandler used: ${error.message} & Error Code: ${error.statusCode}`
      );
    } else {
      console.error(
        `An unexpected error occurred: ${error.message} & Error Code: ${error.statusCode}`
      );
    }
  }
};
// riskyFunction();

// ------------------ task 5 - validates string ------------------
class ValidationError extends Error {
  constructor(message) {
    // super(message);
    super();
    this.message = message;
    this.name = this.constructor.name;
  }
}

const validateInput = (input) => {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("Input cannot be empty or only whitespace.");
  }
  console.log("Input is valid:", input);
};

const testValidate = (input) => {
  try {
    validateInput(input);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`ValidationError caught: ${error.message}`);
    } else {
      console.error(`An unexpected error occurred: ${error.message}`);
    }
  }
};

// testValidate("");
// testValidate("Hi");

// ------------------ task 6 - promise that randomly resolves/reject ------------------

// const randomPromise = new Promise((resolve, reject) => {
//   const min = 1;
//   const max = 10;
//   const rand = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(rand);

//   if (rand >= 5) {
//     resolve("Success");
//   } else {
//     reject("Fail");
//   }
// });

// randomPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// ------------------ task 7 - 6 but in async function ------------------

const asyncHandler = async () => {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// asyncHandler();

// ------------------ task 8 - fetch but invalid url ------------------
const invalidUrl = "https://manavukani.co";
const validUrl = "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=2"

// fetch(invalidUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data["data"]["data"][0]["name"]);
//   })
//   .catch((error) => {
//     console.error("Invalid URL Found!! Error:", error.message);
//   });

// ------------------ task 9 - 8 but with async ------------------

const invalidUrlHandler = async (invalidUrl) => {
  try {
    const response = await fetch(invalidUrl);
    const data = await response.json();
    console.log("Name:", data["data"]["data"][0]["name"]["first"], data["data"]["data"][0]["name"]["last"]);
  } catch (error) {
    console.log("Invalid URL Found!! Error:", error.message);
  }
};
// invalidUrlHandler(invalidUrl);
invalidUrlHandler(validUrl);
