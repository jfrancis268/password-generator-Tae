// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numberCharacter = "1234567890";
var specialCharacters = "!%&'()*+,-./:;<=>?@[]^_`{|}~?"


//var letterContainer = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!%&'()*+,-./:;<=>?@[]^_`{|}~?";
var letterContainer = "";


function generatePassword() {
  var currentPassword = "";
  //asking for the length of password (prompt)
  //If length is NOT between 8 and 128, then 
  //Alert/show user:  "password needs to be between 8 & 128"
  //ask the user again for length of password

  var chosenLength = prompt("Enter the length of password (needs to be between 8 and 128");
  console.log(chosenLength)

  if (chosenLength < 8 || chosenLength > 128) {
    alert("Password needs to be between 8 & 128")
    generatePassword();
  }
  //Else If length is between 8 and 128, then ask:
  else {
    //If user wants Uppercase (confirm method true-false)
    var upperCaseConfirm = window.confirm("Would you like upper case characters?");
    console.log(upperCaseConfirm)

    //OK(if true), then:
    if (upperCaseConfirm) {
      //add uppercase to letterContainer
      letterContainer += upperCase;
      console.log(letterContainer)
    }

    ///Cancel(if false): no action needed

    var lowercaseConfirm = window.confirm("Would you like lower case characters?");

    //If user wants lowercase (confirm method)
    //OK: add lowercase to letterContainer
    ///Cancel: no action needed
    if (lowercaseConfirm) {
      letterContainer += lowerCase;
      console.log(letterContainer);
    }

    var numberConfirm = window.confirm("Would you like numbers?");

    //If user wants numbers (confirm method)
    //OK: add numbers to letterContainer
    ///Cancel: no action needed
    if (numberConfirm) {
      letterContainer += numberCharacter;
      console.log(letterContainer);
    }

    var specialConfirm = window.confirm("Would you like special characters?");

    //If user wants special characters (confirm method)
    //OK: add special characters to letterContainer
    ///Cancel: no action needed
    if (specialConfirm) {
      letterContainer += specialCharacters;
      console.log(letterContainer);
    }

  }

  //add the character to an empty string (currentpPassword var), and keep adding until the loop is ended
  //create a loop to loop through letterContaner, lopp is gonna run depending on the length user picked the first time

  for (var i = 0; i < chosenLength; i++) {
    //inside the loop, randomly pick out a character

    var randomIndex = Math.floor(Math.random() * letterContainer.length) //0 -6returns random index from letter container string
    var randomCharacter = letterContainer.charAt(randomIndex)
      currentPassword += randomCharacter;
      console.log(randomIndex, randomCharacter)
      console.log(currentPassword)
  }


  //return the final currentPassword

  return currentPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
