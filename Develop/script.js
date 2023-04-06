// Assignment Code
/* 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the passwordgit push
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  while(passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  }
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumbers = confirm("Would you like to include numbers?");
  var passwordSymbols = confirm("Would you like to include symbols?");
  while(passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSymbols === false) {
    alert("You must select at least one character type");
    var passwordLowercase = confirm("Would you like to include lowercase letters?");
    var passwordUppercase = confirm("Would you like to include uppercase letters?");
    var passwordNumbers = confirm("Would you like to include numbers?");
    var passwordSymbols = confirm("Would you like to include symbols?");
  }

  var passwordCharacters = [];
  if (passwordLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase);
  }
  if (passwordUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase);
  }
  if (passwordNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }
  if (passwordSymbols) {
    passwordCharacters = passwordCharacters.concat(symbols);
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return password;
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
