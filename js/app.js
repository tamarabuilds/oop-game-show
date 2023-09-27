/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/** ELEMENT SELECTORS */
const startButton = document.querySelector('#btn__reset')
const screenKeyboard = document.querySelector('#qwerty')

/** Game element */
let game = {};

/**
 * Listens on button click of 'Start Game' to trigger the start the game.
 * @event
 */
startButton.addEventListener('click', ()=> {
    game = new Game()
    game.startGame()
});

/***
 * Listens for onscreen keyboard buttons to manage guesses and game interaction.
 * @event
 */
screenKeyboard.addEventListener('click', (event)=> {
    // Ensures a button is clicked and not the space around buttons
    const letterClicked = event.target.closest('button');
    if (letterClicked) {
        game.handleInteraction(letterClicked);
    }
});

/**
 * Listens for the physical keyboard to enter guesses and trigger game interaction.
 * @event
 */
document.addEventListener('keyup', (event)=> {
    const keyPressed = event.key;
    console.log(keyPressed)
});