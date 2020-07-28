// javascript baby!

// make arrays for upper, lower, special, number char, work array, and final password

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '\\', ';', ':', '?', '-','_', '+', '='];
var workshopArr = [];
var finalPass = [];

// make button "generate password" that starts process

// make prompt for # of char and confirms for U/l/s/#s

// push the user confirm answers to be included in work array

// use math.random and math.floor to randomize; multiply by length of total array of possible char

// use loop to call function number of times of user choice length of pw

// lil tip from wilson:
// function number(arr) {
//      for(var i = 0; i < numberArr.length; i++) {
//          arr.push(numberArr[i]);
//      };
//      return arr
//  };
// you call that function in your logic I.E.
// var workshopArr = [];
// if (userChoiceNumber === true) {
//   number(workshopArr);
// };

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);