/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/***
 * Creates the game class, managing the game's state, logic and interactions.
 * @class
 */
class Game {
    /**
     * Create a game.
     * 
     * No params.
     * Includes list of phrases.
     */
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('eternamax eternatus'),
            new Phrase('pikachu'), 
            new Phrase('togepi'),
            new Phrase('eevee'),
            new Phrase('charmander'),
            new Phrase('bulbasaur'),
            new Phrase('jigglypuff')];
        this.activePhrase = null;
    }

    /**
     * Start the game, remove overlay, select random phrase, and display it.
     */
    startGame() {
        const overlay = document.querySelector('#overlay');
        const finalImg = document.querySelector('#overlay h1 img');

        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /** 
     * Randomly selects a phrase.
     * @return {string} - phrase stored at the randomly selected index number
     */
    getRandomPhrase() {
        const randomNumber = Math.floor( Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    /**
     * Handles most game interaction, state, and logic.
     * 
     * @param {string} letter - letter selected by the user
     */
    handleInteraction(letterButton) {
        const letter = letterButton.innerText;

        // disable guessed letter's onscreen keyboard button
        letterButton.disabled = 'true'

        // if guessed letter is correct/wrong, indicate on keyboard and remove life or check for win
        if (game.activePhrase.checkLetter(letter)){
            letterButton.classList.add('chosen');
            game.activePhrase.showMatchedLetter(letter);
                                            // if user wins, should I let them see the winning solution for a short time?
            this.checkForWin() ? this.gameOver() : '';
        } else {
            letterButton.classList.add('wrong');
            this.removeLife();
        }       
    }

    /**
     * Removes a life heart and checks if the game is over.
     * 
     * No params or return.
     */
    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard li');

        for (let i = 0; i <= this.missed; i++){
            hearts[i].firstElementChild.src = "images/lostHeart.png";
        }
        this.missed++;
        this.missed === 5 ? this.gameOver() : '';
    }

    /**
     * Checks if there are any more hidden letters to find.
     * 
     * @returns {boolean} - true if the player won.
     */

    checkForWin(){
        const hiddenLetterCount = document.querySelectorAll('#phrase li.hide').length;
        return (!hiddenLetterCount);
    }

    /**
     * Demonstrates the game is over with an overlay,
     * win/lose message, and a fun pokemon at the end.
     * 
     * No params or return.
     */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        const winMessage = 'Congrats! You rocked that!';
        const loseMessage = "Bummer! Next time you'll get it.";
        const h1 = overlay.querySelector('h1');
        const cutePikachu = `<img src="images/pokemon.png" alt="Pikachu Clipart Transparent Background" class="final-img">`;
        
        // Turning on the overlay
        overlay.style.display = 'block';
        // Setting final message to win or lose based on checkForWin()
        this.checkForWin() ? h1.innerText = winMessage : h1.innerText = loseMessage;
        // Reset the game in the background
        this.resetGame();

        // Adds only 1 final image of a pokemon at the end. 
        //          FOR LATER: could this be done more efficiently?
        const img = document.querySelector('.final-img');
        if (!img) {
            h1.insertAdjacentHTML('afterend', cutePikachu);
        } else {
            h1.insertAdjacentHTML('afterend', '');
        }
    }
    
    /**
     * Resets the phrase location, keyboard, and hearts after the player has won/lost.
     * 
     * No params or return.
     */
    resetGame(){
        const phraseLocation = document.querySelector('#phrase ul');
        const screenKeyboardLetters = document.querySelectorAll('#qwerty button');
        const hearts = document.querySelectorAll('#scoreboard li');

        phraseLocation.innerHTML = '';
        screenKeyboardLetters.forEach( letter => {
            letter.removeAttribute('disabled');
            letter.className = 'key';
        });

        hearts.forEach( heart => heart.firstElementChild.src = "images/liveHeart.png");
    }
}