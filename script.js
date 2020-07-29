// make arrays for upper, lower, special, number char, work array, and final password
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '\\', ';', ':', '?', '-','_', '+', '='];
var workshopArr = [];
var finalPass = [];

var userInputLength
var userInputUpper
var userInputLower
var userInputNumbers
var userInputSpecial

function passwordOptions() {
// make prompt for # of char and confirms for U/l/s/#s
    userInputLength = parseInt(prompt("How long would you like your password to be? Please enter a number between 8 and 128"));
    if (!userInputLength) {
        alert("Ok maybe later");
        return;
    }
    userInputUpper = confirm("Would you like uppercase letters in your password?");
    userInputLower = confirm("Would you like lowercase letters?");
    userInputNumbers = confirm("How about numbers?");
    userInputSpecial = confirm("And special characters?");
    if (!userInputUpper && !userInputLower && !userInputNumbers && !userInputSpecial) {
        alert("you have to pick something");
        return;
    }
    
    var passwordOptions = {
        userInputLength: userInputLength,
        userInputUpper: userInputUpper,
        userInputLower: userInputLower,
        userInputNumbers: userInputNumbers,
        userInputSpecial: userInputSpecial
    };
    
    return passwordOptions;
}

// // use math.random and math.floor to randomize; multiply by length of total array of possible char
// // use loop to call function number of times of user choice length of pw
function generatePassword(){
    for (var i = 0; i < (userInputLength); i++) {
        randomChar = Math.floor(Math.random() * workshopArr.length);
        finalPass.push(randomChar)
    }
    finalPass.join()
    var passwordText = document.querySelector("#password");
    passwordText.textContent = finalPass;
}

// push the user confirm answers to be included in work array
function toWorkingArr() {
    if (userInputUpper) {
        workshopArr.concat[uppercase]
    };
    if (userInputLower) {
        workshopArr.concat[lowercase]
    };
    if (userInputNumbers) {
        workshopArr.concat[numbers]
    };
    if (userInputSpecial) {
        workshopArr.concat[special]
    };
    return workshopArr
}

workshopArr = toWorkingArr(passwordOptions)

// // make button "generate password" that starts process
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', generatePassword());