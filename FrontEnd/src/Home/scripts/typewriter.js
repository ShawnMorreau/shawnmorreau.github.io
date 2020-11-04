window.addEventListener("load", () => {
  
  const words = [
    "Software Engineer",
    "Front End Developer",
    "Back End Developer",
    "Gym Enthusiast",
    "Jaymee's Lover",
  ];
  let index = 0;
  let wordIndex = 0;
  let currentText = "";
  let letter = "";
  let endOfWord = false;
  let screen = document.querySelector(".role");
  
  (function type() {
    if(!!document.querySelector(".role")){
    if (index === words.length) {
      index = 0;
    }
    //set current word
    currentText = words[index];
    //type forward
    if (endOfWord === false) {
      letter = currentText.slice(0, ++wordIndex);
    }
    //set value of letter on screen
    if (letter.length === currentText.length) {
      endOfWord = true;
    }
    if (endOfWord === true) {
      letter = currentText.slice(0, wordIndex);
      wordIndex--;
      if (wordIndex === 0) {
        index++;
        wordIndex = 0;
        endOfWord = false;
      }
    }
    screen.textContent = letter;

    setTimeout(type, 300);
  }
  })();
});
