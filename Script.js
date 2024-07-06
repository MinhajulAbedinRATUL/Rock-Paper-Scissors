
function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num >= 1 && num <= 33) {
      return "ROCK";
    }

    else if (num >= 34 && num <= 66) {
      return "PAPER";
    }

    else
    return "SCISSOR";
    
  }

  function getHumanChoice() {
    let choice = prompt("Enter Rock or Paper or Scissor" );
    return choice.toUpperCase();
  }

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      console.log("It's a draw");
      return ( humanScore++ ,
        computerScore++
      );
    }

    else if (humanChoice === "ROCK" && computerChoice === "SCISSOR") {
      console.log("You won! , rock beats scissor");
      return humanScore++;
    }
    
    else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
      console.log("You won! , paper beats rock");
      return humanScore++;
    }

    else if (humanChoice === "SCISSOR" && computerChoice === "PAPER") {
      console.log("You won! , scissor beats rock");
      return humanScore++;
    }

    else if (computerChoice === "ROCK" && humanChoice === "SCISSOR") {
      console.log("You lost! , rock beats scissor")
      return computerScore++;
    }
    
    else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
      console.log("You lost! , paper beats rock")
      return computerScore++;
    }

    else if (computerChoice === "SCISSOR" && humanChoice === "PAPER") {
      console.log("You lost! , scissor beats paper")
      return computerScore++; 
    }

    else
      console.log("Please enter a valid choice");
  }
  
  let humanScore = 0, 
  computerScore = 0;

  function playGame() {

  for(let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Your score is " + humanScore + "," + " Computer's score is " + computerScore);
  }
  
  if(humanScore > computerScore) {
    console.log("You win");
  }

  else {
    console.log("You lost");
  }
  
 }

 playGame();