const options = ["rock", "paper", "scissors"];

function randomChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userInput) {
  const computerChoice = randomChoice(options);
  let result = "";

  if (userInput === computerChoice) {
    result = "It was a tie!";
  } else if (
    (userInput === "rock" && computerChoice === "scissors") ||
    (userInput === "scissors" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "rock")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  document.getElementById("result").innerText = `
            You chose: ${userInput}
            Computer chose: ${computerChoice}
            ${result}
        `;
}
