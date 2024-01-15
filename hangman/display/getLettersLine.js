const getLettersLine = (state) => {
  const lettersLine = document.createElement("div");
  const keyWord = state.keyWord;
  lettersLine.classList.add("guess-word");

  for (let i = 0; i < keyWord.length; i++) {
    const letter = document.createElement("div");
    letter.textContent = keyWord[i];
    letter.classList.add("letter");
    lettersLine.appendChild(letter);
  }

  return lettersLine;
};

export default getLettersLine;
