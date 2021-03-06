var LetterConstructor = require('./letter.js');

var WordConstructor = function(word){
	this.word = word;
	this.letterArray = [];

	var animalArray = word.split("");

	for (var i = 0; i < animalArray.length; i ++){
		var letter = new LetterConstructor(animalArray[i]);
		this.animalArray.push(letter);
	}
}

module.exports = WordConstructor;

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the 
//function on each letter object (the first function defined in Letter.js) that 
//displays the character or an underscore and concatenate those together.


// A function that takes a character as an argument and calls the guess 
//function on each letter object (the second function defined in Letter.js)