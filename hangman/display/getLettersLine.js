const getLettersLine = (state) => {
  const lettersLine = document.createElement("div");
  const keyWord = state.keyWord;
  console.log(keyWord);
  for (let i = 0; i < keyWord.length; i++) {
    const letter = document.createElement("p");
    letter.textContent = keyWord[i];
    letter.classList.add('letter');
    lettersLine.appendChild(letter);
     }

  return lettersLine;
};

export default getLettersLine;