let balance = 50;

function spinReels() {
  const symbols = ["@", "#", "*", "%", "!"];
  let reel1 = symbols[Math.floor(Math.random() * symbols.length)];
  let reel2 = symbols[Math.floor(Math.random() * symbols.length)];
  let reel3 = symbols[Math.floor(Math.random() * symbols.length)];
  return [reel1, reel2, reel3];
}

function calculateWinnings(reels, bet) {
  const winnings = {
    "@@@": bet * 50,
    "###": bet * 40,
    "%%%": bet * 30,
    "!!!": bet * 20,
    "***": bet * 10,
  };

  const combo = reels.join("");
  return (
    winnings[combo] ||
    (reels[0] === reels[1] && reels[1] === reels[2] ? bet * 5 : 0)
  );
}

async function pullLever() {
  console.clear();
  console.log("Pulling the lever...");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const bet = 10;

  const reels = spinReels(bet);
  console.log(`You spun: [ ${reels.join("  ")} ]`);

  const winnings = calculateWinnings(reels, bet);
  balance += winnings - bet;

  if (winnings > 0) {
    console.log(`You win $${winnings}!`);
  } else {
    const loss = bet;
    console.log(`You lost $${loss}`);
  }

  console.log(`Current balance: $${balance}`);
  return reels;
}

async function playGame() {
  while (balance > 0) {
    const reels = await pullLever();
    if (reels.length > 0) {
    }
    if (balance <= 0) {
      console.log("You don't have enough money");
      break;
    }
  }
  console.log("Game over! Your final balance is $" + balance);
}

playGame();
