// import greenSquare from "./module.js";
import Gallows from "./gallows.js";
import gallowWrap from "./gallows.js";



const body = document.querySelector("body");
body.append(gallowWrap);

const pageName = document.createElement("h1");
pageName.innerText="Hangman game";
pageName.classList.add("title");
body.appendChild(pageName);

const interactivityPart=document.createElement('div');
interactivityPart.classList.add('interactivity-part');
body.appendChild(interactivityPart);

const guessWord=document.createElement('div');
guessWord.classList.add('guess-word');
interactivityPart.appendChild(guessWord);

const question = document.createElement('div');
question.classList.add('question');
interactivityPart.appendChild(question);

const guessCount=document.createElement('div');
guessCount.classList.add('guess-count');
interactivityPart.appendChild(guessCount);

const keyboard = document.createElement('div');
keyboard.classList.add("keyboard");
interactivityPart.appendChild(keyboard);

function createKeyboard() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i< letters.length; i++) {
    const key = document.createElement('div');
    key.className = "key";
    key.textContent = letters[i];
    keyboard.appendChild(key)
  }
}
createKeyboard();

const state = {
  keyWord: "baby",
  incorrectAttempt: 0,
  maxIncorrectAttempts: 6,
  pressedKeys: [],
};

const gallows = new Gallows(state, body);
gallows.render();

const button = document.createElement("button");
button.textContent = "ADD";
body.appendChild(button);

button.onclick = () => {
  state.incorrectAttempt++;
  gallows.render();
};

// render(state);

