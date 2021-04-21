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
    "help",
]

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randWord() {
    answer = randomWords[Math.floor(Math.random() * randomWords.length)];
    // alert(answer)

}

randWord()



function generateKeyboard() {
    // create alphabet ul
    keyboard = document.getElementById('keyboard');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('button');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        keyboard.appendChild(letters);
        letters.appendChild(list);
        console.log(keyboard);
    }
}
generateKeyboard();