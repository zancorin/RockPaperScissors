/* 
Rock Paper Scissors Revisited (UI version)
Create DOM structure and styles via JS
Player is prompted to choose rock, paper, or scissors by clicking one of the buttons
Result of each game is displayed on screen. (Tie, win, or lose)
Points are added and displayed (if there's a winner that round).
Prints winner of game when one gets 5 points.
Disables buttons, and displays message adivising player to refresh page to play again.
*/

//GRAB BODY ELEMENT
const body = document.body;

//CREATE MAIN CONTAINER DIV - ADD CLASS - ADD FLEXBOX STYLE
const container = document.createElement("div");
container.classList.add("container");
container.setAttribute('style',`display: flex; 
                                flex-direction: column;`)

//CREATE GAME CONTAINER DIV (FOR BUTTONS AND SCORE) - ADD CLASS - ADD FLEXBOX STYLE
const gameDiv = document.createElement("div");
gameDiv.classList.add("gameDiv");
gameDiv.setAttribute('style',`display: flex; 
                              flex-direction: column;
                              padding:10px;`);

//CREATE LOG DISPLAY DIV - ADD CLASS - ADD STYLE
const logDisplay = document.createElement("div");
logDisplay.classList.add("logDisplay");
logDisplay.setAttribute('style',`height:125px;
                                 text-align: center;
                                 padding:5px;`);

//SCORE DECLARATION AND INITIALIZATION
let playerScore = 0;
let computerScore = 0;

//CREATE P TEXT ELEMENT FOR DISPLAYING SCORES - SET DEFAULT - ADD STYLE
const playerLabel = document.createElement("p");
playerLabel.textContent = `PLAYER SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;
playerLabel.setAttribute('style', 'text-align: center;');

//CREATE H2 TEXT ELEMENT FOR DISPLAYING LOG MESSAGES. SET IT TO BLANK.
const logDisplayText = document.createElement("h2");
logDisplayText.textContent = "";



//PLAYER BUTTONS
//CREATE BUTTON ELEMENTS
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

//ADD CLASS TO BUTTON ELEMENTS
btnRock.classList.add("btn");
btnPaper.classList.add("btn");
btnScissors.classList.add("btn");

//ADD TEXT TO BUTTON ELEMENTS
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

//ADD STYLE TO BUTTON ELEMENTS
btnRock.setAttribute('style', 'height: 100px;');
btnPaper.setAttribute('style', 'height: 100px;');
btnScissors.setAttribute('style', 'height: 100px;');

//APPEND BUTTONS TO GAMEDIV
gameDiv.appendChild(btnRock);
gameDiv.appendChild(btnPaper);
gameDiv.appendChild(btnScissors);

//APPEND ELEMENTS TO THEIR PARENTS
container.appendChild(gameDiv);
container.appendChild(logDisplay);
logDisplay.appendChild(logDisplayText);
gameDiv.appendChild(playerLabel);
body.appendChild(container);



function DisableButtons()
{
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}


//Rock Button Click Event
btnRock.addEventListener('click', () => {
   logDisplayText.textContent = playRound("Rock", getComputerChoice());
}
)

//Paper Button Click Event
btnPaper.addEventListener('click', () => {
    logDisplayText.textContent = playRound("Paper", getComputerChoice());
}
)

//Scissors Button Click Event
btnScissors.addEventListener('click', () => {
    logDisplayText.textContent = playRound("Scissors", getComputerChoice());
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





//Checks if tie, win, or lose.
//Adds points, displays score, and ends game when player or computer reaches 5 wins

function playRound(playerSelection, computerSelection){

    
    //console.log(`Player selected ${playerSelection}`);
    //console.log(`Computer selected ${computerSelection}`);


    if(playerSelection === computerSelection)
    {
        return ("Tie. No points rewarded.");
    }

    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
             (playerSelection === "Paper" && computerSelection === "Rock") ||
             (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        addPoints("Player");
        playerLabel.textContent = `PLAYER SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;
        gameDiv.appendChild(playerLabel);
        if(playerScore === 5)
        {
            DisableButtons();
            return ("PLAYER HAS WON THE GAME! REFRESH PAGE TO RESTART");
        }
        else
        {
            return (`Player: ${playerSelection} | Computer: ${computerSelection}. Player wins. +1 point.`);
        }
    }

    else
    {
        addPoints("Computer");
        playerLabel.textContent = `PLAYER SCORE: ${playerScore} | COMPUTER SCORE: ${computerScore}`;
        gameDiv.appendChild(playerLabel);
        if(computerScore === 5)
        {
            DisableButtons();
            return ("COMPUTER HAS WON THE GAME! REFRESH PAGE TO RESTART");
        }
        else 
        {
            return (`Player: ${playerSelection} | Computer: ${computerSelection}. Computer wins. +1 point`);
        }

    }


}



//Adds points
function addPoints(winner)
{
    if (winner === "Player")
    {
        playerScore ++;
    }
    else if (winner === "Computer")
    {
        computerScore ++;
    }

}
