// javascript baby!

// make arrays for upper, lower, special, number char, work array, and final password

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '\\', ';', ':', '?', '-','_', '+', '='];
var workshopArr = [];
var finalPass = [];

// make button "generate password" that starts process

generateBtn.addEventListener("click", writePassword);

// make prompt for # of char and confirms for U/l/s/#s

var userInputLength = prompt("How long would you like your password to be? please enter a number between 8 and 128");
var userInputUpper = confirm("Would you like uppercase letters in your password?");
var userInputLower = confirm("Would you like lowercase letters?");
var userInputNumbers = confirm("How about numbers?");
var userInputSpecial = confirm("And special characters?");

// push the user confirm answers to be included in work array

// use math.random and math.floor to randomize; multiply by length of total array of possible char

var num = Math.floor(Math.random() * workshopArr.length) + 1;

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