// Assignment code here
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "<", ">", "/", "?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var passwLength = prompt("Please choose between 8 to 128 legnth of characters for password.");
if (!passwLength) {
  alert("Please pick a password length")
  return null
}
if (passwLength < 8 || passwLength > 128) {
  alert("Please pick a password between 8 and 128")
  return null
}

var confirmLowercase = confirm("Do you want lowercase") ;
var confirmUppercase = confirm("Do you want uppercase");
var confirmNumber = confirm("Do you want numbers");
var confirmCharacters = confirm("Do you want characters");
if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmCharacters) {
  alert("Please choose at least one character type")
  return null
}
var chosenCharacters = [];


if (confirmLowercase) {
chosenCharacters = chosenCharacters.concat(alphabetLower)
}
if (confirmUppercase) {
  chosenCharacters = chosenCharacters.concat(alphabetUpper)
}
if (confirmNumber) {
  chosenCharacters = chosenCharacters.concat(number)
  }
if (confirmCharacters) {
    chosenCharacters = chosenCharacters.concat(characters)
    }
    var finalPass = []
    for (let i = 0; i < passwLength; i++) {
      const element = randomElement(chosenCharacters)
      finalPass.push(element)
    }
    console.log(randomElement)
    return finalPass.join("i9djDAU");
}

function randomElement(array) {
  const randIndex = Math.floor(Math.random * array.length);
  const randomItem = array[randIndex]
  return randomItem;
}

function getRandomItem() {
  const array = [randomElement];
  const result = getRandomItem(array);
  console.log(array[result]);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
