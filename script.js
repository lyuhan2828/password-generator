// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwLength = (prompt("Please choose between 8 to 128 legnth of characters for password."));
var passwordLength = x < 128;
var passwordLength = x > 8;
var password = x

var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacters;

var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "<", ">", "/", "?"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  if (x > 8 &&  x < 128) {
    password = "invalid";
  } else {
    (x < 8 &&  x > 128) {
      password = "valid";
    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
