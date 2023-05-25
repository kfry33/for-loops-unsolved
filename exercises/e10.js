// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let namesWLetter = [];
  
  for (let item of array) {
    let text = item.name.toLowerCase();
    for (let j = 0; j <= text.length; j++) {
      if (text[j] === letter) {
         namesWLetter.push(item.name);
      }
    }
      
    } return namesWLetter;
}



// export function getClientsWithLetterInName(array, letter) {
//   // Your code goes here...
//   let namesWLetter = [];
  
//   for (let item of array) {
//     let text = item.name.toLowerCase();
//       if (text.includes(letter)) {
//          namesWLetter.push(item.name);
//       }
//     } return namesWLetter;
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
