import getLettersLine from "./display/getLettersLine.js";
import gallowsWrap from "./gallows/gallowsWrap.js";
import keywordsAndHints from "./display/keywords.js";
const index = Math.floor(Math.random() * 15);

const state = {
  keyWord: keywordsAndHints[index].keyword,
  hint: keywordsAndHints[index].hint,
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

const modal = document.createElement("div");
modal.classList.add("modal");
body.appendChild(modal);
modal.textContent = `Secret word is ${state.keyWord}`;
const modalText = document.createElement("p");
modalText.classList.add("modal-text");
modal.appendChild(modalText);
const playAgain = document.createElement("button");
playAgain.classList.add("play-again");
playAgain.textContent = "Play again";
modal.appendChild(playAgain);
const backgroundModal = document.createElement("div");
backgroundModal.classList.add("background-modal");
body.appendChild(backgroundModal);

let guessWord = getLettersLine(state);
quizPart.appendChild(guessWord);

const question = document.createElement("div");
question.classList.add("question");
question.textContent = `Hint: ${state.hint}`;
quizPart.appendChild(question);

const incorrectGuessCount = document.createElement("div");
incorrectGuessCount.classList.add("incorrect-guess-count");
incorrectGuessCount.textContent = `Incorrect attempt: ${state.incorrectAttempt} / ${state.maxIncorrectAttempts}`;
quizPart.appendChild(incorrectGuessCount);

function openWinModal() {
  modal.style.display = "flex";
  modalText.textContent = "Congratulations! You Win!";
  backgroundModal.style.display = "block";
}

function openLoseModal() {
  modal.style.display = "flex";
  modalText.textContent = "Sorry, you lost";
  backgroundModal.style.display = "block";
}

const changeIncorrectAttempts = () => {
  incorrectGuessCount.textContent = `Incorrect attempt: ${state.incorrectAttempt} / ${state.maxIncorrectAttempts}`;
};

const madeLettersVisible = () => {
  const pressedLetter = state.pressedKeys.at(-1);
  const lettersArr = guessWord.querySelectorAll(".letter");
  lettersArr.forEach((letter) => {
    if (letter.textContent === pressedLetter) {
      letter.classList.add("correct-letter");
    }
  });
};

const madePersonVisible = () => {
  const personPartsArr = gallowsWrap.querySelectorAll(".body-part");
  const part = personPartsArr[state.incorrectAttempt - 1];
  part.classList.add("visible");
};

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
quizPart.appendChild(keyboard);

const changeButtonStyle = () => {
  const pressedKey = state.pressedKeys.at(-1);
  const keysArr = keyboard.querySelectorAll(".key");
  keysArr.forEach((key) => {
    if (key.textContent === pressedKey) {
      key.classList.add("pressed-key");
    }
  });
};

const pressKeyHandler = (e) => {
  console.log(e);
  if (
    (e.keyCode && e.keyCode < 65) ||
    (e.keyCode > 90 && e.keyCode < 97) ||
    e.keyCode > 122
  ) {
    return;
  }
  const letter =
    e.type === "keydown" ? e.key.toUpperCase() : e.target.textContent;
  if (!state.pressedKeys.includes(letter)) {
    state.pressedKeys.push(letter);
  } else {
    return;
  }
  if (state.keyWord.includes(letter)) {
    madeLettersVisible();
    const correctLettersArr = document.querySelectorAll(".correct-letter");
    if (correctLettersArr.length === state.keyWord.length) {
      openWinModal();
    }
  } else {
    state.incorrectAttempt++;
    changeIncorrectAttempts();
    madePersonVisible();

    if (state.incorrectAttempt === state.maxIncorrectAttempts) {
      openLoseModal();
    }
  }
  changeButtonStyle();
};

function createKeyboard() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const key = document.createElement("button");
    key.className = "key";
    key.textContent = letter;
    keyboard.appendChild(key);
    key.onclick = pressKeyHandler;
  }
}
function refreshGame() {
  // refresh state
  const index = Math.floor(Math.random() * 15);
  state.keyWord = keywordsAndHints[index].keyword;
  state.hint = keywordsAndHints[index].hint;
  state.incorrectAttempt = 0;
  state.pressedKeys = [];

  // reset word
  const newGuessWord = getLettersLine(state);
  quizPart.replaceChild(newGuessWord, guessWord);
  guessWord = newGuessWord;

  // reset hint
  question.textContent = `Hint: ${state.hint}`;

  // reset incorrect attempts
  incorrectGuessCount.textContent = `Incorrect attempt: ${state.incorrectAttempt} / ${state.maxIncorrectAttempts}`;

  // reset keyboard
  const keyboardButtons = document.querySelectorAll(".pressed-key");
  keyboardButtons.forEach((button) => button.classList.remove("pressed-key"));

  // reset body parts
  const bodyParts = document.querySelectorAll(".body-part.visible");
  bodyParts.forEach((part) => part.classList.remove("visible"));

  modal.textContent = `Secret word is ${state.keyWord}`;
  modal.classList.add("modal");

  // close modal
  modal.style.display = "none";
  backgroundModal.style.display = "none";
}
createKeyboard();

document.addEventListener("keydown", pressKeyHandler);

playAgain.addEventListener("click", refreshGame);
// window.addEventListener('load', refreshGame);
