/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/***
 * Creates a new phrase object for the game
 * @class 
 */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseLetters = this.phrase.split('');
    }
    addPhraseToDisplay(){
        console.log(`start addPhraseToDisplay()`)         // TESTING
        console.log(this.phrase)         // TESTING
        let html = '\n'
        this.phraseLetters.forEach( letter => letter === " " ?
            html += '\t<li class="space"> </li>\n' :
            html += `\t<li class="hide letter ${letter}">${letter}</li>\n`)  
        console.log(`ending addPhraseToDisplay()`)         // TESTING

        const testInsert = document.querySelector('#phrase ul')         // TESTING
        testInsert.insertAdjacentHTML('afterbegin', html)
        console.log(testInsert)
        return html
    }
    checkLetter(guess){
        return this.phraseLetters.includes(guess)
    }
    showMatchedLetter(guess){
        console.log(`start showMatchedLetter()`)         // TESTING
        const liMatch = document.querySelectorAll(`#phrase li.${guess}`);
        console.log(liMatch)         // TESTING
        if (this.checkLetter(guess)){
            liMatch.forEach( li => {
                li.classList.remove('hide');
                li.classList.add('show');
            });
        }
        console.log(liMatch)         // TESTING
        console.log(`end showMatchedLetter()`)         // TESTING
    }
}



// TESTING all below

const testPhrase = new Phrase('We got this');
console.log(testPhrase.addPhraseToDisplay())
console.log(`testing checkLetter() with g: ${testPhrase.checkLetter('g')}`)
console.log(`testing showMatchedLetter(): ${testPhrase.showMatchedLetter('g')}`)