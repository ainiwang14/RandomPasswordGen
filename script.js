// javascript baby!

// make arrays for upper, lower, special, number char, work array, and final password
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '\\', ';', ':', '?', '-','_', '+', '='];
var workshopArr = [];
var finalPass = [];

// make prompt for # of char and confirms for U/l/s/#s
var userInputLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128");
var userInputUpper = confirm("Would you like uppercase letters in your password?");
var userInputLower = confirm("Would you like lowercase letters?");
var userInputNumbers = confirm("How about numbers?");
var userInputSpecial = confirm("And special characters?");

// push the user confirm answers to be included in work array
function push() {
    if (userInputUpper) {
        workshopArr.push(uppercase)
    };
    if (userInputLower) {
        workshopArr.push(lowercase)
    };
    if (userInputNumbers) {
        workshopArr.push(numbers)
    };
    if (userInputSpecial) {
        workshopArr.push(special)
    };
    if (!userInputUpper && !userInputLower && !userInputNumbers && !userInputSpecial) {
        alert("you have to pick something")
    }
    if (!userInputLength) {
        alert("Ok maybe later")
    }
}

// use math.random and math.floor to randomize; multiply by length of total array of possible char
// use loop to call function number of times of user choice length of pw
for (var i=0; i < userInputLength.length; i++) {
    function generatePassword() {
        var randomChar = Math.floor(Math.random() * workshopArr.length);
        finalPass.push(randomChar)
    }
}

// Write password to the #password input
function writePassword() {
    push();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// make button "generate password" that starts process
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword());