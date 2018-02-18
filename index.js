//Requirements
var Word = require('./word.js');
var inquirer = require('inquirer');

//Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
var animalOptions = ["zebra","giraffe","alligator","elephant","lion","gazelle"];
var randomAnimal = animalOptions[Math.floor(Math.random() * animalOptions.length)];
var guessThisAnimal = new WordConstructor(randomAnimal);
var guesses = 10;

//Gameplay
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