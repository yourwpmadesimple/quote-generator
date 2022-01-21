# Quote Generator

## Quote API
[https://type.fit/api/quotes](https://type.fit/api/quotes)
```
https://quotes-react.netlify.app/

https://type.fit/api/quotes -> Actual API link for ^ service.
```
### Using Math.random() and Math.floor() To Get Random Quotes From API
[Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
[Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
```
function newQuote() {
    // Pick a random quote form the apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}
```