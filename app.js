let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let alphabet = [
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
  'z',
]

let character = ['!', '@', '#', '$', '%', '^', '&', '*'];

const input = document.querySelector('#input');
const copy = document.querySelector('#copyBtn');

const generateBtn = document.querySelector('#generateBtn');

copy.addEventListener ("click", copyPassword);

  function copyPassword() {
    const password = input.value
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert('password copied')
        })
        .catch((err) => {
          alert('fail to copied')
        })
    } else {
      alert('no password copy')
    }
  }

generateBtn.addEventListener('click', () => {
  let password = ''
  let genNumberIndx = Math.floor(Math.random() * number.length)
  let genNumber = number[genNumberIndx]

  let genAlphabetIndx = Math.floor(Math.random() * alphabet.length)
  let genAlphabet = alphabet[genAlphabetIndx]

  let genCharIndx = Math.floor(Math.random() * character.length)
  let genCharacter = character[genCharIndx]

  password += genNumber + genAlphabet + genCharacter

  while (password.length !== 12) {
    let mix = [
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
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
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
      'z',
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]
    let genMinIndx = Math.floor(Math.random() * mix.length)
    let genMix = mix[genMinIndx]
    password += genMix
    input.value = `${password}`
  }
  console.log(password)
});
