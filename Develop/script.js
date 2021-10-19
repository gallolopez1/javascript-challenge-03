// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var tempPassword = [];
    var length = getUserOptions();
    var options = getPasswordAttributes();

    while (tempPassword.length != length) {
        tempPassword.push(randomCharacter)
    }

    // console.log(length);
    // console.log(options.hasSpecial);
    // console.log(options.hasLowerCase);
    // console.log(options.hasUpperCase);
    // console.log(options.hasNumbers);

    //generate password

    //return password
}

function getUserOptions() {
    //Ask the user, using prompts, pass criteria

    //ask length
    var length = window.prompt('Please choose a length of at least 8 characters and no more than 128 characters');

    if (length === null || length === "" || isNaN(length)) {
        window.alert("You need to provide a valid answer! Please try again.");
        return getUserOptions();
    }

    //calidate between 8-128
    else if (length < 8 || length > 128) {
        window.alert("The length must be at least 8 characters and no more than 128 characters! Please try again.");
        return getUserOptions();
    }
    return length;
}


function getPasswordAttributes() {
    var options = {
            combineArray: [],
            hasLowerCase: window.confirm("Would you like to use lower case letters?"),
            hasUpperCase: window.confirm("Would you like to use upper case letters?"),
            hasNumbers: window.confirm("Would you like to use numbers?"),
            hasSpecial: window.confirm("Would you like to use special characters?")
        }
        // var hasSpecial = window.confirm("Would you like to use special characters?");
        // var hasLowerCase = window.confirm("Would you like to use lower case letters?");
        // var hasUpperCase = window.confirm("Would you like to use upper case letters?");
        // var hasNumbers = window.confirm("Would you like to use numbers?");

    //! equals to not or false
    if (!options.hasSpecial && !options.hasLowercase && !options.hasUpperCase && !options.hasNumbers) {
        window.alert("At least one of the values must be true.");
        return getOptions();
    }

    if (options.hasLowerCase) {
        options.combineArray = options.combineArray.concat(lowerCasedCharacters);
    }
    if (options.hasUpperCase) {
        options.combineArray = options.combineArray.concat(upperCasedCharacters);
    }
    if (options.hasNumbers) {
        options.combineArray = options.combineArray.concat(numericCharacters);
    }
    if (options.hasSpecial) {
        options.combineArray = options.combineArray.concat(specialCharacters);
    }
    return options;
}

function randomCharacter(array) {
    return array[Math.floor(Math.random() * array.length)];

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);