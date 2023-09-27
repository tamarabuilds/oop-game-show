# oop-game-show
Unit 04 project for the Full Stack JavaScript Techdegree. This is an online word guessing game: “Pokemon Finder.” This uses JavaScript and OOP (Object-Oriented Programming) to select a random, hidden pokemon names, which a player tries to guess, by clicking letters on an onscreen keyboard or their physical keyboard.

![Screenshot 2023-09-27 at 9 39 35 AM](https://github.com/tamarabuilds/oop-game-show/assets/98510821/2bdafe76-89a5-4c29-acc4-134d5b119518)


## Installation

There is nothing required to install for this project.

## Usage

This code includes two JavaScript classes: ‘Game’ class for managing the game and a ‘Phrase’ class to create an array of phrase objects, or in this case, pokemon names.

Initially, a random phrase is selected, split into letters, and put on the gameboard. The player guesses letters, which are compared with the phrase. If the letter is in the phrase, all its occurrences will be displayed on the gameboard.

The player continues to play until they guess the phrase (and win!) or make five incorrect guesses (and lose). The program will disable letters that have already been guessed. Either a winning or losing screen will appear with a cute pokemon image.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
