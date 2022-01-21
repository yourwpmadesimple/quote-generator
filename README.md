# Quote Generator

## Quote API
[https://type.fit/api/quotes](https://type.fit/api/quotes)
```css
https://quotes-react.netlify.app/

https://type.fit/api/quotes -> Actual API link for ^ service.
```
### Using Math.random() and Math.floor() To Get Random Quotes From API
[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
[Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

```javascript
let apiQuotes = [];

function newQuote() {
    // Pick a random quote form the apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
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
// On Page Load
getQuotes();
```
#### Getting data from local file
```javascript
function myLocalQuotes() {
  const quote = loadQuotes[Math.floor(Math.random() * loadQuotes.length)];
  console.log(quote);
}
myLocalQuotes();
```