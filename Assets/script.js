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

    var length = getUserOptions();
    var options = getPasswordAttributes();
    var password = function() {
        //push random character until it meets length condition
        var tempPassword = [];
        while (tempPassword.length != length) {
            tempPassword.push(randomCharacter(options.combineArray));
        }
        if (options.hasLowerCase) {
            if (!tempPassword.some(x => lowerCasedCharacters.indexOf(x) > -1)) {
                return password();
            }
        }
        if (options.hasUpperCase) {
            if (!tempPassword.some(x => upperCasedCharacters.indexOf(x) > -1)) {
                return password();
            }
        }
        if (options.hasNumbers) {
            if (!tempPassword.some(x => numericCharacters.indexOf(x) > -1)) {
                return password();
            }
        }
        if (options.hasSpecial) {
            if (!tempPassword.some(x => specialCharacters.indexOf(x) > -1)) {
                return password();
            }
        }
        return tempPassword.join('');

    }

    return password();

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
    return parseInt(length);
}


function getPasswordAttributes() {
    //create array
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
    if (!options.hasLowerCase && !options.hasUpperCase && !options.hasNumbers && !options.hasSpecial) {
        // if (options.hasSpecial === false && options.hasLowercase === false && options.hasUpperCase === false && options.hasNumbers === false) {
        window.alert("At least one of the values must be true.");
        return getPasswordAttributes();
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
//create a function to randomize with Math.random and add Math.floor to round number
function randomCharacter(array) {
    return array[Math.floor(Math.random() * array.length)];

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);