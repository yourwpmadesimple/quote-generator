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
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.querySelector(".new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote form the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
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
  quoteText.textContent = quote.text; // Insert quote text into DOM id=quote
}

async function getQuotes() {
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
