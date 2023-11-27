/* 
Rock Paper Scissors (UI version)
Player is prompted to choose rock paper or scissors by clicking one of the images
Result of each game is displayed on screen. (Tie, win, or lose)
Points are added (if there's a winner that round).
Prints winner of game when one gets 5 points.
*/

//Grab Body Element
const body = document.body;

//Create Button Elements//
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

//Add Class to Elements
btnRock.classList.add("btn");
btnPaper.classList.add("btn");
btnScissors.classList.add("btn");

//Add Text to Elements
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

//Ammend to DOM
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);


//Button Click Events which start a round depending on which button was pressed.

//Rock Button Click Event
btnRock.addEventListener('click', () => {
    alert("CLICKED ROCK");
}
)

//Paper Button Click Event
btnPaper.addEventListener('click', () => {
    alert("CLICKED PAPER");
}
)

//Scissors Button Click Event
btnScissors.addEventListener('click', () => {
    alert("CLICKED SCISSORS");
}
)

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


        const playerSelection = prompt("Rock, Paper, or Scissors?\n");
 
        const computerSelection = getComputerChoice();
        try{console.log(playRound(playerSelection, computerSelection));}
        catch(error)
        {
            console.log("Game cancelled.");
            
        }
        console.log("");
        

    console.log("Game Over.");
    console.log("Final score:");
    console.log(`Player: ${playerPoints} - Computer: ${computerPoints}`);
    console.log(displayWinner());
    console.log("Refresh to play again.");
}



game();