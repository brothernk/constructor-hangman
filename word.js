var Letter = require('./letter.js');

var Word = function(word) {
	this.word = word;
	this.wordArray = [];
}

guessLetter = function(userGuess) {
	for (var i = 0; i < this.wordArray.length; i ++ ) {
		this.wordArray[i].userGuess(userGuess)
	}
}

module.exports = Word;