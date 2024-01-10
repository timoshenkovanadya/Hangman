const gallowWrap = document.createElement("div");
gallowWrap.classList.add("gallow-wrap");
const gallowImg = document.createElement("img");
gallowImg.src = "./assets/gallows.png";
gallowImg.alt = "empty gallow";
gallowImg.classList.add("gallow-img");
gallowWrap.appendChild(gallowImg);


class Gallows {
  constructor(state, parent) {
    this.state = state;
    this.parent = parent;
    this.prevElement = null;
  }

  render() {
    const counter = document.createElement("p");
    counter.textContent = this.state.incorrectAttempt;
    if (this.prevElement) {
      this.parent.replaceChild(counter, this.prevElement);
    } else {
      this.parent.appendChild(counter);
    }
    this.prevElement = counter;
  }
}

export default Gallows; gallowWrap;
