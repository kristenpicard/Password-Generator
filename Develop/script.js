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

// This function returns a random set of characters.
function generatePasswordBasedOnOptions(n, upper, lower, special, number) {
  var randomPasswordArray = [];
  while (randomPasswordArray.length -1 <= n) {
    var randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber != 5) {
      if (randomNumber == 0 && upper == true && lower == true) {
        randomPasswordArray.push(generateRandomLetter("Both"));
      }   
      else if (randomNumber == 1 && upper == true && lower == false) {
        randomPasswordArray.push(generateRandomLetter("Upper"));
      } 
      else if (randomNumber == 2 && upper == false && lower == true) {
        randomPasswordArray.push(generateRandomLetter("Lower"));
      }
      else if (randomNumber == 3 && special == true) {
        randomPasswordArray.push(generateRandomSpecialCharacter());
      }
      else if (randomNumber == 4 && number == true) {
        randomPasswordArray.push(generateRandomNumber());
      }
    }
  }
  return randomPasswordArray.toString().replace(/,/g, '');;
}

// This returns the generated password.
function generatePassword(size, upper, lower, special, number) {
  var generatedPassword = generatePasswordBasedOnOptions(size, upper, lower, special, number);
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  
  size = 0

  // Prompts the user for size.
  while (size < 8 || size > 128) {
    var size = prompt("How many characters would you like? (8-128)", 12);
    size = parseInt(size);
  }
  
  upper = "?";
  lower = "?";
  number = "?";
  special = "?";

  // Prompts the user for the various options for their password.
  while (upper != "Y" && lower != "Y") {
    var upper = prompt("Would you like upper case letters? (Y/N) At least 1 Character is required.", "Y");
    var lower = prompt("Would you like lower case letters? (Y/N) At least 1 Character is required.", "Y");
  }
  while (special != "Y" && special != "N"){
    var special = prompt("Would you like special characters? (Y/N)", "Y");
  }
  while (number != "Y" && number != "N") {
    var number = prompt("Would you like numbers? (Y/N)", "Y");
  }
  
  // Convert to booleans.
  if (upper == "Y") {
    upper = true;
  } else if (upper == "N"){
    upper = false;
  }
  if (lower == "Y") {
    lower = true;
  } else if (upper == "N"){
    lower = false;
  }
  if (special == "Y") {
    special = true;
  } else if (upper == "N"){
    special = false;
  }
  if (number == "Y") {
    number = true;
  } else if (upper == "N"){
    number = false;
  }

  // generate and display password
  var password = generatePassword(size, upper, lower, special, number);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
