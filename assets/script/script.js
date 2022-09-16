// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
        let password = generatePassword();
        let passwordText = document.querySelector("#password");
            passwordText.value = password;
        }
//Character options displayed for user displayed and will be pushed to array passCharacters
        let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let specialCharacters = ["[\]","^", ".","!", "@", "#", "$", "%", "{","}", "&", "*", "(", ")", "+", ",", "-", "/", ";", "?", "]", "|", "`"];
        let passCharacters = []
// function to generate password
function generatePassword() {
        let passLength = parseInt(prompt("How many characters would you like your password to be (must be from 8-128)"));
//range for acceptable user prompt input
             if (passLength > 128 || passLength < 8 || isNaN(passLength) ) { 
                alert("Please ensure value entered is a number and the number is from 8-128");
                return generatePassword();
            } else{
        window.alert("Your password will be " + passLength+ " characters long" );
         }
//alerts displayed depending on user choice
        let userInput = [];
        let UpperCasing = confirm("Includes uppercase letters: press OK for yes and CANCEL for no");
            if(UpperCasing){
                 window.alert("your password will include an uppercase letter");
            }else{
            window.alert("your password will NOT contain an uppercase letter");
        }
        let lowerCasing = confirm("Includes lowerrcase letters: press OK for yes and CANCEL for no");
            if(lowerCasing){
            window.alert("your password will contain a lower case letter");
            }else{
            window.alert("your password will NOT contain a lower case letter");
        }
        let passNumber = confirm("Includes numbers: press OK for yes and CANCEL for no");
            if(passNumber){
            window.alert( "your password will contain a number");
            }else{
            window.alert("your password will NOT contain a number");
        }
        let charSymbol = confirm("Includes symbols: press OK for yes and CANCEL for no");
            if(charSymbol){
            window.alert("your password will contain a symbol");
            }else{
            window.alert("your password will NOT contain a symbol");
        }
// this is the alert users will see if they didn't make at least one selection
            if (!UpperCasing && !lowerCasing && !passNumber && !charSymbol) {
            alert("You must make at least one character type selection! Click 'Generate Password' button to try again.")
            return null;
        }






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);