/* 
Rock Paper Scissors (console version)
5 rounds are played in a game.
Player is prompted to choose rock paper or scissors by typing it in while having
it be case insensitive.
Invalid player selection will display as such
Result of each game is displayed in the console. (Tie, win, or lose)
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
Otherwise, if a player win condition returns true, returns string stating player wins.
Otherwise returns string stating computer wins.
*/
function playRound(playerSelection, computerSelection){

    playerSelection = capitalizeFirstLetter(playerSelection);

    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);

    if((playerSelection !== "Rock") &&
       (playerSelection !== "Paper") &&
       (playerSelection !== "Scissors"))
    {
        return ("Invalid selection.");
    }

    else if(playerSelection === computerSelection)
    {
        return ("Tie. No points rewarded.");
    }

    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
             (playerSelection === "Paper" && computerSelection === "Rock") ||
             (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        return ("Player wins.");
    }

    else
    {
        return ("Computer wins.")
    }

}


const playerSelection = "rOCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


