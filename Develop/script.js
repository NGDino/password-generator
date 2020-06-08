//DOM elemens
const resultEl = document.getElementById('password');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const numberCharacters = window.prompt('How Many Characters?')

  console.log(numberCharacters);

} )

/*given in assignment
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 */

//generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}
console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}
console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}
console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!"#$%&"()*+-/.:;<=>?@[]^_`{|}~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol());
