// Get Quotss From API
// Asynchronous fetch request in try catch

//let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote form the apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

function myLocalQuotes() {
  const quote = loadQuotes[Math.floor(Math.random() * loadQuotes.length)];
  console.log(quote);
}
myLocalQuotes();

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
// On Page Load
//getQuotes();
