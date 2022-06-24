// Assignment code here
function generatePassword() {

  // Prompt the user for the password criteria
  //1a. password length 8 to 128 characters

    var passwordlenght = prompt("How many characters do you want your password to have?");
    while ((passwordlenght < 8)&& (passwordlenght) || (passwordlenght > 128)){
if (passwordlenght <8) alert("Password must be at least 8 characters") 
if (passwordlenght >128) alert("password must be less than 128")
passwordlenght = prompt("How many characters do you want your password to have?"); 
    }
    
  //1b. lowercase, uppercase, numbers, special characters
var includesLowercase = confirm("Do you want to include lowercase characters?")
var includesUpercase = confirm("Do you want to include uppercase characters?")
var includesNumeric = confirm("Do you want to include numeric characters")
var includesSpecial = confirm("Do you want to include and/or special characters")
  //2. Validate the input. 
console.log(includesLowercase, includesUpercase)
  //3. generate password based on criteria.

  var characterChoices = [];
if (includesLowercase) {
  characterChoices.push("abcdefghijklmnopqrstuvwxyz")
}
console.log(characterChoices)

var characterChoices = [];
if (includesUpercase) {
  characterChoices.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
}
console.log(characterChoices)

var characterChoices = [];
if (includesNumeric) {
  characterChoices.push("0123456789")
}
console.log(characterChoices)

var characterChoices = [];
if (includesSpecial) {
  characterChoices.push("!@#$%^&*")
}
console.log(characterChoices)

console.log(characterChoices);

return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var Password = Math.floor(Math.random() * (max) + min);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
