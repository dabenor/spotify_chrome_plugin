console.log("Hello World!");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('I am not in danger, Skyler, I AM THE DANGER! A guy opens his door and you think that of me? I am the one who knocks!');
console.dir(result);    // Score: -2, Comparative: -0.666

var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
// getSentiment expects an array of strings
console.log(analyzer.getSentiment(["I", "like", "cherries"]));
// 0.6666666666666666
