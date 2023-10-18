/* 
Rock Paper Scissors (console version)
5 rounds are played in a game.
Player is prompted to choose rock paper or scissors by typing it in while having
it be case insensitive.
Invalid player selection will display as such
Result of each game is displayed in the console. (Tie, win, or lose)
Points are added (if there's a winner that round).
Prints winner of game.
*/



//Randomizes a number between 1 and 3
//Returns "Rock", "Paper", or "Scissors" depending which number was chosen
function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if(randomNumber == 1) 
    {
        return "Rock";
    }

    else if (randomNumber == 2) 
    {
        return "Paper";
    }

    else if (randomNumber == 3) 
    {
        return "Scissors";
    }

}

/*
 Takes in a string as an argument
 Makes the string lowercase
 Then capitalizes the first letter of the string
 This allows player input to be case insensitive
 */
function capitalizeFirstLetter(someString) {
    
    someString = someString.toLowerCase();
    someString = someString.charAt(0).toUpperCase() + someString.slice(1); 
    return someString;
}


/*
Takes in the playerSelection and computerSelection strings as arguments.
Formats the playerSelection string to have the first letter Uppercase, and the rest lowercase
via the capitalizeFirstLetter function.
Displays the selections to the console.
Checks for invalid playerSelection, and if true, returns string stating such.
Otherwise, if selections are the same (checks for tie-breaker), returns a string stating such.
Otherwise, if a player win condition returns true, returns string stating player wins. Adds points.
Otherwise returns string stating computer wins. Adds points.
*/
function playRound(playerSelection, computerSelection){

    playerSelection = capitalizeFirstLetter(playerSelection);

    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);

    if((playerSelection !== "Rock") &&
       (playerSelection !== "Paper") &&
       (playerSelection !== "Scissors"))
    {
        return ("Invalid selection. No points rewarded.");
    }

    else if(playerSelection === computerSelection)
    {
        return ("Tie. No points rewarded.");
    }

    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
             (playerSelection === "Paper" && computerSelection === "Rock") ||
             (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        addPoints("Player");
        return ("Player wins. +1 point.");
    }

    else
    {
        addPoints("Computer");
        return ("Computer wins. +1 point")
    }

}

//Initialize and set playerPoints and computerPoints to 0
let playerPoints = 0;
let computerPoints = 0;

//Adds points
function addPoints(winner)
{
    if (winner === "Player")
    {
        playerPoints ++;
    }
    else if (winner === "Computer")
    {
        computerPoints ++;
    }

}

//Displays the final winner
function displayWinner()
{
    if(playerPoints === computerPoints)
    {
        return ("The game resulted in a tie.");
    }

    else if (playerPoints > computerPoints)
    {
        return ("Player has won the game!");
    }
    
    else 
    {
        return ("Computer has won the game!");
    }
}


//Assigns the amount of rounds to be played to the totalRounds variable.
const totalRounds = 5;


/*
Iterates the following according to the totalRounds variable.
Prompts player to make a selection between 'rock, paper, or scissors'.
Assigns result to playerSelection.
Then assigns computerSelection based on getComputerChoice function.
Calls the playRound function using playerSelection and computerSelecton as arguments.
Prints a blank line to better see results in console.

Then after the rounds are complete, prints Game Over message with final score and winner
*/
function game() {

    for(i = 0; i < totalRounds; i++)
    {
        const playerSelection = prompt("Rock, Paper, or Scissors?\n");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("");
        
    }

    console.log("Game Over.");
    console.log("Final score:");
    console.log(`Player: ${playerPoints} - Computer: ${computerPoints}`);
    console.log(displayWinner());
    console.log("Refresh to play again.");
}



game();