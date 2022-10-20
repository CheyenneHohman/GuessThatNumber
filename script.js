// GUESS THAT NUMBER 
// Message to be used throughout the project/file 
const enterNumText = `Please enter a number greater than zero.`;

// For restarting the game 
let restartGame = true;

// For storing the range of the number to be guessed 
let rangeNum;

// For storing the number that the user guessed 
let randomNum;

// For storing the number of attempts the user has left 
let attempts; 

// For storing the user's guess 
let guess;

// For storing the user's response to play again or not play again 
let playAgain; 

// Starting alert message 
alert(`Welcome to GUESS THAT NUMBER! Please click OK to start the game.`);

// Game restarts as long as 'restartGame' has the value of TRUE. 
while (restartGame) {
    // Ask user to ENTER a number to set the upper bound for the random number that will be created.
    rangeNum = prompt(`Please enter a maximum number for the range.`);

    // Using parseInt to attempt to convert the user's response into a number value. 
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is a number greater than zero (NOTE! All numbers, positive or negative, have a default boolean value of TRUE, except for zero, which is FALSE by default). Also, NaN is default FALSE.
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum);
    }
    
    // Create a random number using the range number entered by the user. 
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompt user to enter a number of attempts/guesses allowed
    attempts = prompt(`Enter the number of guesses you want:`);
    attempts = parseInt(attempts);

    //Verifying user's entry for a number of attempts allowed is a number greater than zero and equal or less than the range they set
    while(!attempts || attempts < 1 || attempts > rangeNum) {
        attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Ask user to guess a number in the range they set 
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) remaining.`)

    // Continues looping until the user guesses the correct number or runs out of attempts. (NOTE! Loops until a BREAK keyword is run)
    while(true) {
        // Displays the number when a code word is entered 
        if (guess == `WTF`) {
            alert(`The number is... ${randomNum}!`);
            //Prompts the user to enter another guess 
            guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) remaining.`);
        }
        //Tries to convert user's guess into a number 
        guess = parseInt(guess);

        //Verify that the user's guess is a number greater than zero AND less than or equal to the range they set. 
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }

        //Remove an attempt 
        attempts--;

        // Checks to see if the guess is correct. If so, the game ends. 
        if (guess === randomNum){
            alert(`HUZZAH! You guessed the correct number: ${randomNum}!`);
            break;

            //Checks if user has any attempts left. If not, game ends & number is displayed to the user. 
        } else if (attempts === 0) {
            alert(`You ran out of guesses. The number was ${randomNum}. Better luck next time!`);
            break;

            //Checks if user's guess was too low and prompts user to guess again, if so. 
        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${attempts} attempt(s) remaining.`);

            //Last possibility is the user's guess was too high. Else used now, because there's no conditions left needed to define. 
         } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) remaining.`);
         }

    }

// Prompts user to play again, if they want 
playAgain = prompt(`Wouldst thou like to play again? Y for yea. N for nay.`);

//Loop continues until user submits a valid response
while (true) {
    //Check if the user's answer is no. 
    if (playAgain.toUpperCase() === `N`) {
        //Alerts the user that the game is over and the game does not restart. 
        alert(`Thanks for playing! Farewell.`);
        restartGame = false;
        break;
        //Checks if the user wants to play again
    } else if (playAgain.toUpperCase() === `Y`) {
        alert(`Heck yeah! Here we go again!`);
        break;
    } else {
        playAgain = prompt(`Please enter Y or N.`)
    }

}

}