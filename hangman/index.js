
import getLettersLine from "./display/getLettersLine.js";
import Gallows from "./gallows/gallows.js";
import gallowsWrap from "./gallows/gallowsWrap.js";

const state = {
  keyWord: "baby",
  hint: "hint hint hint",
  incorrectAttempt: 0,
  maxIncorrectAttempts: 6,
  pressedKeys: [],
};

const body = document.querySelector("body");
body.append(gallowsWrap);

const pageName = document.createElement("p");
pageName.innerText = "Hangman game";
pageName.classList.add("title");
gallowsWrap.appendChild(pageName);

const quizPart = document.createElement("div");
quizPart.classList.add("quiz-part");
body.appendChild(quizPart);

const guessWord = getLettersLine(state);
guessWord.classList.add("guess-word");
quizPart.appendChild(guessWord);

const question = document.createElement("div");
question.classList.add("question");
question.innerText = "Hint: hint hint hint";
quizPart.appendChild(question);

const incorrectGuessCount = document.createElement("div");
incorrectGuessCount.classList.add("incorrect-guess-count");
incorrectGuessCount.innerHTML = "Incorrect guesses:";
quizPart.appendChild(incorrectGuessCount);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
quizPart.appendChild(keyboard);

function createKeyboard() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const key = document.createElement("button");
    key.className = "key";
    key.textContent = letter;
    keyboard.appendChild(key);
    key.onclick = () => {
      if (!state.pressedKeys.includes(letter)) {
        state.pressedKeys.push(letter);
      }
      key.classList.add('pressed-key');
      key.disabled = true;
      console.log(state);
    };
  }
}
createKeyboard();



// const gallows = new Gallows(state, body);
// gallows.render();

// const button = document.createElement("button");
// button.textContent = "ADD";
// body.appendChild(button);

// button.onclick = () => {
//   state.incorrectAttempt++;
//   gallows.render();
// };
