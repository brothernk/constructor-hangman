//Requirements
var Word = require('./word.js');
var inquirer = require('inquirer');

//Global variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
var blankSpaces = 0;
var score = 0;
var guesses = 10;
var correctGuess = 0;
var spaces = 0;
var lettersGuessed = [];
var animalOptions = ["zebra","giraffe","alligator","elephant","lion","gazelle"];

var NewWord = function(array){
	this.array = array;
	this.newWord = new Word(array[Math.floor(Math.random() * animalOptions.length)]);
	console.log("Current Score: " + score);
}

NewWord.prototype.userLetter = function(){
	var wordObject = this.newWord;
	wordObject.displayWord();
	startGame(wordObject);
}

function startGame(){

	inquirer.prompt([
		{
		 type: 'input',
		 name: 'userLetter',
		 message: 'Guess a letter: '
		}
	])

	.then(function(user){
		var userLetter = user.userLetter;

		for (var i = 0; i < word.animalOptions.length; i ++) {
			if (word.animalOptions[i].guessed) {
				thisGuess ++;
			}
			if (word.animalOptions[i].space) {
				blankSpaces ++;
			}
		}			
		if (thisGuess === blankSpaces) {
			console.log("Nope, sorry!")
			guesses --;
			blankSpaces = 0
		}
		else (thisGuess > correctGuess){
			console.log("Holla!")
			guessedRight = thisGuess
			blankSpaces = 0
		}
		if (correctGuess === word.word.length) {
			console.log("Yer a winner, Harry!");
			score ++;
			correctGuess = 0;
			blankSpaces = 0;
			guesses = 10;
			lettersGuessed = [];			
		}
		else {
			wordRandom.userLetter();	
		}
	})
}