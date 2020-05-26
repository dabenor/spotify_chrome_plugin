console.log("Hello World!");
var Sentiment = require('sentiment');
var text = document.body.innerText;
var sentiment = new Sentiment();
var result = sentiment.analyze(document.body.innerText);
console.log(result['comparative']);    // Score: -2, Comparative: -0.666
