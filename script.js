// variables
let answer = '';
let maxWrong = 6;
let wrong = 0;
let guessed = [];
let currentGuess = null;
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let words = [
	"happy",
	"life",
	"anything",
	"apple",
	"coconut",
	"python",
	"hello",
	"goodbye",
	"cars",
	"codingbn",
	"javascript",
	"television",
	"code",
	"fasting"
]

// ramdom word generator
function randWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

// generate buttons
function displayButtons() {
  let letterButtons = alphabet.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-1"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = letterButtons;
}

// check if guessed letter true or false
function handleGuess(selectedLetter) {
  guessed.indexOf(selectedLetter) === -1 ? guessed.push(selectedLetter) : null;
  document.getElementById(selectedLetter).setAttribute('disabled', true);

  if (answer.indexOf(selectedLetter) >= 0) {
    displayCurrentGuess();
    checkWon();
  } else if (answer.indexOf(selectedLetter) === -1) {
    wrong++;
    updateWrong();
    checkLost();
    updatePic();
  }
}

// update pic
function updatePic() {
  document.getElementById('pic').src = './images/' + wrong + '.png';
}

// check if won
function checkWon() {
  if (currentGuess === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

// check if lost
function checkLost() {
  if (wrong === maxWrong) {
    document.getElementById('answerDisplay').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

// display current guess on HTML
function displayCurrentGuess() {
  currentGuess = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('answerDisplay').innerHTML = currentGuess;
}

// update the current wrong guess count on HTML
function updateWrong() {
  document.getElementById('mistakes').innerHTML = wrong;
}

// reset the game
function reset() {
  wrong = 0;
  guessed = [];
  randWord();
  displayCurrentGuess();
  updateWrong();
  displayButtons();
  updatePic()
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randWord();
displayButtons();
displayCurrentGuess();