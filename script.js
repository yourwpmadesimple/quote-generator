// Get Quotss From API
// Asynchronous fetch request in try catch

/*******
 * Example of pulling data from local file
function myLocalQuotes() {
  const quote = loadQuotes[Math.floor(Math.random() * loadQuotes.length)];
  console.log(quote);
}
myLocalQuotes();
********** */
// Get Elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("jewel");
const newQuoteBtn = document.querySelector(".new-quote");

const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote form the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = `~ Unknown`;
  } else {
    authorText.textContent = `~ ${quote.author}`; // Insert author text into DOM id=author
  }
  // Check if Quote text is more than 50 characters, then apply appropriate styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.text; // Insert quote text into DOM id=quote
  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl); // Get json from API
    // Global Variable 'apiQuotes'
    apiQuotes = await response.json(); // Turn response into a json object
    //console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); // Open link in new window
}

// Event Listeners
twitterBtn.addEventListener("click", tweetQuote, false);
newQuoteBtn.addEventListener("click", newQuote, true);
// On Page Load
getQuotes();
