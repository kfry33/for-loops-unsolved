
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  let sum = 0;
  let sumOfDeposits = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i].deposits) {
        sum = 0;
    } else {
        for (let amount of array[i].deposits) {
        sum += +amount;
        }      
      } if (sum < 2000 || !array[i].deposits) {
        sumOfDeposits.push(array[i]);
      }
    } return sumOfDeposits;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
