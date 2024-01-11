import gallowsWrap from "./gallowsWrap.js";

class Gallows {
  constructor(state, parent) {
    this.state = state;
    this.parent = parent;
    this.prevElement = null;
  }

  render() {
    const counter = gallowsWrap;
    const counterNumber = document.createElement("p");
    counterNumber.textContent = this.state.incorrectAttempt;
    counter.appendChild(counterNumber);
    if (this.prevElement) {
      counter.replaceChild(counter, this.prevElement);
    } else {
      this.parent.appendChild(counter);
    }
    this.prevElement = counter;
  }
}

export default Gallows;
