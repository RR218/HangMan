let randomWords = [
    "happy",
    "color",
    "coading",
    "hangged",
    "random",
    "words",
    "life",
    "python",
    "javascript",
    "apple",
    "cook",
    "evil",
    "gaming",
]

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

function randWord() {
    answer = randomWords[Math.floor(Math.random() * randomWords.length)];
    // alert(answer)
}

randWord()