// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}

function logValuesFromBothStorages(key) {
  const localStorageValue = localStorage.getItem(key);
  const sessionStorageValue = sessionStorage.getItem(key);
  console.log(`Value from localStorage for key "${key}":`, localStorageValue);
  console.log(
    `Value from sessionStorage for key "${key}":`,
    sessionStorageValue
  );
}

const key = "exampleKey";
const value = "exampleValue";

saveToBothStorages(key, value);
logValuesFromBothStorages(key);

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearBothStorages() {
  localStorage.clear();
  sessionStorage.clear();
}

function verifyStoragesAreEmpty() {
  const localStorageIsEmpty = localStorage.length === 0;
  const sessionStorageIsEmpty = sessionStorage.length === 0;
  console.log("Is localStorage empty?", localStorageIsEmpty);
  console.log("Is sessionStorage empty?", sessionStorageIsEmpty);
}

clearBothStorages();
verifyStoragesAreEmpty();
