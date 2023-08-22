// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password based on user criteria
function generatePassword() {
  // Prompt for password criteria
  var length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  // Validate length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Confirm character types
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Define character sets based on user selections
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var availableChars = "";
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumeric) availableChars += numericChars;
  if (includeSpecial) availableChars += specialChars;

  // Generate password
  var generatedPassword = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }

  return generatedPassword;
}
