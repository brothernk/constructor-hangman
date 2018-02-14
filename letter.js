//letter constructor to start building a word object.
function NewLetter(letter, bool) {
    this.letter = letter; //string value to contain a letter char.
    this.bool = false; //set to false for if letter is not guessed.
}

/*check the characgter and if it's already guessed display "_" or
    if yas yet to be guessed*/
NewLetter.prototype.Underlaying = function(guessed) {
    this.guessed = function() {
        if (this.bool === false) {
            //have the letter show up as "_"
            this.letter = "_";
        }
    };
}

/*takes a character as an argument then checks it against the Underlying
    character, updating the stored boolean val to true if correctly guessed */
NewLetter.prototype.CharCheck = function(letter) {
    if (letter === letter) {
        this.bool = true;
    }
}

module.exports = Letter;