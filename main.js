console.log("Hello World!");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('I see quite a bit of bias in this statement.');
console.dir(result);    // Score: -2, Comparative: -0.666