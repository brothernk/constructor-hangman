var LetterConstructor = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.underline = "_";
}

LetterConstructor.prototype.checkLetter = function(userInput){
    if (userInput === this.letter){
        this.guessed = true;
    }
}

LetterConstructor.prototype.updateLetter = function(){
    if (this.guessed === true){
        console.log(this.letter);
    }
    else {
        console.log(this.underline);
    }
}

module.exports = LetterConstructor;




