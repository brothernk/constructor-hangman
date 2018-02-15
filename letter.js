var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
    this.space = false;
}

Letter.prototype.stringify = function(){
    var letter = "_";
    if (this.letter === " "){
        this.space = true;
        this.guessed = true;
    }
    if (this.guessed){
        return this.letter
    }
    return letter;
}

Letter.prototype.userGuess = function(){
    if (userGuess === this.letter){
        this.guessed = true;
    }
}

module.exports = Letter;