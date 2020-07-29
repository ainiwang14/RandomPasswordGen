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
    
    toWorkshopArr(userInputUpper, userInputLower, userInputNumbers, userInputSpecial)
}

// push the user confirm answers to be included in work array
// use for loop to go through and push each string in the array individually
function toWorkshopArr(userInputUpper, userInputLower, userInputNumbers, userInputSpecial) {
    if (userInputUpper) {
        for(var i = 0; i < uppercase.length; i++) {
            workshopArr.push(uppercase[i])
        }
    };
    if (userInputLower) {
        for(var i = 0; i < lowercase.length; i++) {
            workshopArr.push(lowercase[i])
        }
    };
    if (userInputNumbers) {
        for(var i = 0; i < numbers.length; i++) {
            workshopArr.push(numbers[i])
        }
    };
    if (userInputSpecial) {
        for(var i = 0; i < special.length; i++) {
            workshopArr.push(special[i])
        }
    };
    console.log(workshopArr);
    return workshopArr
}

// // use math.random and math.floor to randomize; multiply by length of total array of possible char
// // use loop to call function number of times of user choice length of pw
// Math.floor(Math.random() * workshopArr.length) is just giving you a random index not the item in the array hence workshopArr[Math.floor(Math.random() * workshopArr.length)]
function generatePassword(){
    for (var i = 0; i < (userInputLength); i++) {
        randomChar = workshopArr[Math.floor(Math.random() * workshopArr.length)];
        finalPass.push(randomChar)
    }
    return finalPass.join('')
}

function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.textContent = finalPass;
}

// // // make button "generate password" that starts process
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', passwordOptions)