//DOM elemens

const resultEl = document.getElementById('password');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


//on click starts prompt for length then has confirms for other options
generateEl.addEventListener('click', () => {
  const length = +window.prompt('How Many Characters between 8-128?');
    if (length >= 8 && length <= 128){ console.log(length)     
    } else {return ''}

  const hasLower = confirm('Include Lower Case Letter?');
  const hasUpper = confirm('Include Upper Case Letter?');
  const hasNumber = confirm('Include Number?');
  const hasSymbol = confirm('Include a Symbol?');

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
    );

  //console.log(length)
  } )

//genarate password function
function generatePassword(lower, upper, number, symbol, length) {

let generatedPassword = '' ;

const typesCount = lower + upper + number + symbol;

//console.log('typesCont: ',typesCount);

const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
(
  item => Object.values(item)[0]
  );

//console.log('typesArr: ',typesArr)

if(typesCount === 0) {
  return '';
}

for(let i = 0; i < length; i += typesCount){
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    //console.log('funcName: ', funcName);

    generatedPassword += randomFunc[funcName]();
  });
}
const finalPassword = generatedPassword.slice(0, length);
return finalPassword;
  
}

//generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97)
}
//console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65)
}
//console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48)
}
//console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!"#$%&"()*+-/.:;<=>?@[]^_`{|}~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
//console.log(getRandomSymbol());

