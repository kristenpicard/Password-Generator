// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateRandomNumbers(n) {
  var randomIntegersArray = [];
  for (i=0; i < n; i++) {
    randomIntegersArray.push(Math.floor(Math.random() * 10));
  }
  return randomIntegersArray.toString().replace(/,/g, '');
}

function generateRandomLowercaseLetter() {
  var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomNumberBetween0an26 = Math.floor(Math.random() * 25);
  return lowercaseAlphabet[randomNumberBetween0an26];
}

function generateRandomUppercaseLetter() {
  var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomNumberBetween0an26 = Math.floor(Math.random() * 25);
  return uppercaseAlphabet[randomNumberBetween0an26];
}

function generateRandomLetters(n) {
  var randomLettersArray = [];
  for (i=0; i < n; i++) {
    var randomNumberBetween0and9 = Math.floor(Math.random() * 10);
    if (randomNumberBetween0and9 < 5) {
      var generatedRandomLetter = generateRandomLowercaseLetter();
    }
    else { 
      var generatedRandomLetter = generateRandomUppercaseLetter();
    }
    randomLettersArray.push(generatedRandomLetter);
    
  }
  return randomLettersArray.toString().replace(/,/g, '');
}


function generatePassword() {
  var generatedPassword = generateRandomLetters(7);
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
