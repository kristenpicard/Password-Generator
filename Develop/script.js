// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function takes in some number (n). Within it, we are creating an array with which our for loop with run through.
function generateRandomNumbers(n) {
  var randomIntegersArray = [];
  for (i=0; i < n; i++) {
    randomIntegersArray.push(Math.floor(Math.random() * 10));
  }
  // This returns our random group of numbers and converts them into a string and removes the commas between them.
  return randomIntegersArray.toString().replace(/,/g, '');
}

// This function returns a random lower case letter.
function generateRandomLowercaseLetter() {
  var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomNumberBetween0an25 = Math.floor(Math.random() * 25); // Generates a random number between 0 and 25.
  return lowercaseAlphabet[randomNumberBetween0an25]; 
}

// This function returns a random upper case letter.
function generateRandomUppercaseLetter() {
  var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomNumberBetween0an25 = Math.floor(Math.random() * 25); // Generates a random number between 0 and 25.
  return uppercaseAlphabet[randomNumberBetween0an25]; // This returns the character at the random index in the array.
}

// This function returns a random upper or lower case letter.
function generateRandomUpperOrLowercaseLetter() {
  var randomNumberBetween0and9 = Math.floor(Math.random() * 10);
  if (randomNumberBetween0and9 < 5) { 
    var generatedRandomLetter = generateRandomLowercaseLetter();
  }
  else { 
    var generatedRandomLetter = generateRandomUppercaseLetter();
  }
  return generatedRandomLetter;
}

// This function returns an array of random upper and lower case letters the size of n. 
function generateRandomLetters(n) {
  var randomLettersArray = [];
  for (i=0; i < n; i++) {
    var generatedRandomLetter = generateRandomUpperOrLowercaseLetter();
    randomLettersArray.push(generatedRandomLetter);
  }
  return randomLettersArray.toString().replace(/,/g, '');
}

// This function returns a random special character.
function generateRandomSpecialCharacter() {
  var specialCharacterOptions = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", ";", ":", "'", "\"", "\,", "<", ".", ">", "?", "/", "\\", "|", "~", "`"];
  var randomNumber = Math.floor(Math.random() * (specialCharacterOptions.length-1));
  return specialCharacterOptions[randomNumber];
}

// This function returns an array of random special characters the size of n.
function generateRandomSpecialCharacters(n) {
  var randomSpecialArray = [];
  for (i=0; i < n; i++) {
    var generatedRandomSpecial = generateRandomSpecialCharacter();
    randomSpecialArray.push(generatedRandomSpecial);
  }
  return randomSpecialArray.toString().replace(/,/g, '');
}

// This is where we test
function generatePassword() {
  var generatedPassword = generateRandomSpecialCharacters(7);
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
