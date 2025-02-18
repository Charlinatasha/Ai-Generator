function displayQuote(response) {
  new Typewriter("#positive-statement", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();
  let userInstructions = document.querySelector("#textInputElement");
  let prompt = `User instructions: generate a personalised affirmation about${userInstructions.value}`;
  let context =
    "you are a kind life coach AI assistant, with years of experience providing personalised affirmations. Your affirmations are short and precise. Your mission is to provide a 5 line affirmation and seperate each line with a <br/>. Please ensure you follow the user Instructions, and sign the quote with `Your Affirmation AI` inside a <strong></strong> element after a <br/> element";

  let apiKey = "f0c1a84ba5f0b6db3obaf7359402cfct";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);

  let affirmation = document.querySelector("#positive-statement");
  affirmation.classList.remove("hidden");

  affirmation.innerHTML = `<div class="generating">⏳ Generating your personalised affirmation about ${userInstructions.value}....</div>`;

  let resetButton = document.querySelector("#reset");
  resetButton.classList.remove("hidden");
}

let inputElement = document.querySelector("#positive-quote-form");
inputElement.addEventListener("submit", generateQuote);
