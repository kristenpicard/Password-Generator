// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function takes in some number (n). Within it, we are creating an array with which our for loop with run through.
function generateRandomNumber(n) {
  var randomIntegerBetween0And9 = Math.floor(Math.random() * 10)
  // This returns our random group of numbers and converts them into a string and removes the commas between them.
  return randomIntegerBetween0And9.toString();
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
function generateRandomLetter(option) {
    if(option == 'Upper'){
      var generatedRandomLetter = generateRandomUppercaseLetter();
    } else if (option == 'Lower') {
      var generatedRandomLetter = generateRandomLowercaseLetter();
    } else if (option == 'Both') {
      var generatedRandomLetter = generateRandomUpperOrLowercaseLetter();
    }
  return generatedRandomLetter;
}

// This function returns a random special character.
function generateRandomSpecialCharacter() {
  var specialCharacterOptions = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", ";", ":", "'", "\"", "\,", "<", ".", ">", "?", "/", "\\", "|", "~", "`"];
  var randomNumber = Math.floor(Math.random() * (specialCharacterOptions.length-1));
  return specialCharacterOptions[randomNumber];
}

function generateUpperLowerSpecialNumberPassword(n) {
  var randomPasswordArray = [];
  while (randomPasswordArray.length -1 <= n) {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber != 3) {
      if (randomNumber == 0) {
        randomPasswordArray.push(generateRandomLetter("Both"));
      }
      else if (randomNumber == 1) {
        randomPasswordArray.push(generateRandomSpecialCharacter());
      }
      else if (randomNumber == 2) {
        randomPasswordArray.push(generateRandomNumber());
      }
    }
  }
  return randomPasswordArray.toString().replace(/,/g, '');;
}

// This is where we test
function generatePassword() {
  var upper = true;
  var lower = true;
  var special = true;
  var number = true;
  if (upper === true && lower === true && special === true && number === true) {
    var generatedPassword = generateUpperLowerSpecialNumberPassword(7);
  }
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
