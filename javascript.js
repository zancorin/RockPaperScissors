// Rock Paper Scissors (console version)

// For computer choice,
// Randomize a number between 1 and 3
// Create a variable and assign it to
// Rock Paper or Scissors respectively depending
// on what number was randomized

let computerChoice;

function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber == 1)
    {
        computerChoice = "Rock";
        console.log(`Computer has chosen ${computerChoice}`);
        return computerChoice;
    }
    else if(randomNumber == 2)
    {
        computerChoice = "Paper";
        console.log(`Computer has chosen ${computerChoice}`);
        return computerChoice;
    }
    else if(randomNumber == 3)
    {
        computerChoice = "Scissors";
        console.log(`Computer has chosen ${computerChoice}`);
        return computerChoice;
    }
    else 
    {
        console.error("randomNumber must be between 1 and 3.")
    }
}

getComputerChoice();
