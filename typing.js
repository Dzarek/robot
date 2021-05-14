const box = document.querySelector(".typing");
const text = [
  "Cześć Kochanie! ",
  " Mam nadzieję że się dobrze czujesz, a Martynka nie daje ci w kość ;). ",
  " Tęsknie za Wami, a muszę siedzieć tu w pracy :(.^ Za to jutro cały dzień siedze przy Tobie! ",
  " A teraz życzę Ci moja żono słodkich snów :*. ^DOBRANOC !!!<3 ",
];
let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 80;
let activeDOMElement = box;

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].substr(wordIndex, 1);
    if (wordIndex === text[textIndex].length - 1) {
      if (textIndex === text.length - 1) {
        return;
      }
      return setTimeout(() => {
        box.textContent = "";
        textIndex++;
        wordIndex = 0;
        requestAnimationFrame(typing);
      }, 3000);
    } else if (wordIndex === 0 || letter === "^") {
      const p = document.createElement("p");
      box.appendChild(p);
      activeDOMElement = p;
    }
    if (!(letter === "^")) {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;

    wordIndex++;
  }
  requestAnimationFrame(typing);
};

typing();
