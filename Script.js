
function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);

    if (num >= 1 && num <= 33) {
      cpuChoice.src = "./icon/angry.png";
      return "BOSS";
    }

    else if (num >= 34 && num <= 66) {
      cpuChoice.src = "./icon/espresso.png";
      return "COFFEE MACHINE";
    }

    else {
      cpuChoice.src = "./icon/intern.png";
      return "INTERN";
    }
  }

  const yourChoice = document.querySelector('#you');
  const cpuChoice = document.querySelector('#cpu');

function getHumanChoice(e) {
    const target = e.target;

    if (target.classList.contains('BOSS')) {
        yourChoice.src = "./icon/angry.png";
        return 'BOSS';
    } else if (target.classList.contains('COFFEE-MACHINE')) {
        yourChoice.src = "./icon/espresso.png";
        return 'COFFEE MACHINE';
    } else if (target.classList.contains('INTERN')) {
        yourChoice.src = "./icon/intern.png";
        return 'INTERN';
    } else {
        return null;
    }
}

  const topText = document.querySelector('.text');
  const para = document.querySelector('.first-text');
  topText.appendChild(para);
  const para1 = document.querySelector('.second-text');
  topText.appendChild(para1);
  const buttons = document.querySelector(".buttons");
  let humanScore = 0, 
  computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
      para.textContent = "It's a draw";
      para1.textContent = "The office remains a battleground of petty rivalries.";
    }

    else if (humanChoice === "BOSS" && computerChoice === "INTERN") {
      para.textContent = "You won!";
      para1.textContent = "Boss reprimands Intern";
      humanScore++;
    }
    
    else if (humanChoice === "INTERN" && computerChoice === "COFFEE MACHINE") {
      para.textContent = "You won!";
      para1.textContent = "Intern breaks Coffee Machine";
      humanScore++;
    }

    else if (humanChoice === "COFFEE MACHINE" && computerChoice === "BOSS") {
      para.textContent = "You won!";
      para1.textContent = "Coffee Machine malfunctions for Boss";
      humanScore++;
    }

    else if (computerChoice === "BOSS" && humanChoice === "INTERN") {
      para.textContent = "You lost!";
      para1.textContent = "Boss reprimands Intern";
      computerScore++;
    }
    
    else if (computerChoice === "INTERN" && humanChoice === "COFFEE MACHINE") {
      para.textContent = "You lost!";
      para1.textContent = "Intern breaks Coffee Machine";
      computerScore++;
    }

    else if (computerChoice === "COFFEE MACHINE" && humanChoice === "BOSS") {
      para.textContent = "You lost!";
      para1.textContent = "Coffee Machine malfunctions for Boss";
      computerScore++; 
    }
  
  
  const yourScore = document.querySelector(".yourScore");
  yourScore.textContent = humanScore;

  const cpuScore = document.querySelector(".cpuScore");
  cpuScore.textContent = computerScore;

  if(humanScore === 5) {
    para.textContent = "YAY!";
    para1.textContent = "You Won";
    buttons.removeEventListener('click', gameHandler);
  }
  
  else if(computerScore === 5) {
    para.textContent = "Sorry";
    para1.textContent = "You Lost";
    buttons.removeEventListener('click', gameHandler);
  }
  
};

  function gameHandler(e) {
    let humanChoice = getHumanChoice(e);
    const audio = document.querySelector(".btn-sound");

    if(humanChoice && start) {
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }

    audio.play();
  };

  const startBtn = document.querySelector(".start");
  let start = false;

  function startIsClicked(e) {
    return e.isTrusted;;
  }
 
  startBtn.addEventListener('click', (e) => {
    if (startIsClicked(e)) {
       start = true;
    }
  });
  
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const reloadButton = document.querySelector('.restart');
    
    reloadButton.addEventListener('click', () => {
        location.reload();
    });
});



  buttons.addEventListener('click', gameHandler);
  
 
  
  

  

  

  