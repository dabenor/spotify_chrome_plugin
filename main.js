console.log("Hello World!");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('I am not in danger, Skyler, I AM THE DANGER! A guy opens his door and you think that of me? I am the one who knocks!');
console.log(result['comparative']);    // Score: -2, Comparative: -0.666
