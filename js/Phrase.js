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
    /**
     * Breaks down the game's phrase into letters and generates html to display it.
     * 
     * @returns {html} html - adds letter placeholders to be displayed
     */
    addPhraseToDisplay(){
        const phraseLocation = document.querySelector('#phrase ul');

        let html = '\n';
        this.phraseLetters.forEach( letter => letter === " " ?
            html += '\t<li class="space"> </li>\n' :
            html += `\t<li class="hide letter ${letter}">${letter}</li>\n`);
        
        phraseLocation.insertAdjacentHTML('afterbegin', html)
        return html
    }
    /**
     * Checks if the guessed letter is in the phrase.
     * 
     * @returns {boolean} - answers if guess is included in the phrase.
     */
    checkLetter(guess){
        return this.phraseLetters.includes(guess)
    }
    /**
     * Reveals correctly guessed letter(s) in the phrase on screen 
     * 
     * @param {string} guess - guessed letter provided by app event listener 
     */
    showMatchedLetter(guess){
        const liMatch = document.querySelectorAll(`#phrase li.${guess}`);
        if (this.checkLetter(guess)){
            liMatch.forEach( li => {
                li.classList.remove('hide');
                li.classList.add('show');
            });
        }
    }
}