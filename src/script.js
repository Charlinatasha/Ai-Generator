function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#positive-statement", {
    strings: "Generating your personal quote....",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let inputElement = document.querySelector("#positive-quote-form");
inputElement.addEventListener("submit", generateQuote);
