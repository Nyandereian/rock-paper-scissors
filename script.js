function game () {
  console.log("Welcome to a classic game of Rock, Paper, & Scissors!");
  let rounds;
  do {
    rounds = prompt("How many rounds do you want to play?", 5);
    if (rounds == null) {
      console.log("Canceled.")
      return 0;
    }
  }
  while (rounds < 1);

  let roundWin = Math.ceil(rounds/2);

  console.log("You'll be playing a " + rounds + "-round game: the player
    who gets " + roundWin + " wins first wins!");
  console.log("You ready?");

  let roundCount = 1;
  let playerCount = 0;
  let botCount = 0;

  do {
    console.log("Round " + roundCount);
    let result = playRound();
    if (!result) {
      return 0;
    } else if (result == "win") {
      playerCount++;
      roundCount++;
    } else if (result == "lose") {
      botCount++;
      roundCount++;
    } else {
      roundCount++;
    }
    console.log("You: " + playerCount + " - Bot: " + botCount);
  }
  while (playerCount < roundWin && botCount < roundWin);

  if (playerCount == roundWin) {
    console.log("Congratulations, you won the game!");
  } else {
    console.log("Nope. You lost.")
  }

  return 0;
}

function playRound() {
  let botChoice = botPlay();
  let playerChoice = playerPlay();
  if (!playerChoice) {
    console.log("Canceled.");
    return 0;
  }

  if (playerChoice == botChoice) {
    console.log("It's a draw!");
    return "draw";
  } else if (playerChoice == "scissors"){
    if (botChoice == "rock") {
      console.log("You lose! Bot chose Rock.");
      return "lose";
    } else {
      console.log("You win! Bot chose Paper.");
      return "win";
    }
  } else if (playerChoice == "rock") {
    if (botChoice == "paper") {
      console.log("You lose! Bot chose Paper.");
      return "lose";
    } else {
      console.log("You win! Bot chose Scissors.");
      return "win";
    }
  } else {
    if (botChoice == "scissors") {
      console.log("You lose! Bot chose Scissors.");
      return "lose";
    } else {
      console.log("You win! Bot chose Rock.");
      return "win";
    }
  }
}

function playerPlay() {
  let playerChoice;
  do {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    if (playerChoice == null) {
      return 0;
    } else {
      playerChoice = playerChoice.toLowerCase();
    }
  }
  while (playerChoice != "rock" && playerChoice != "scissors" &&
    playerChoice != "paper" && playerChoice != "cancel" &&
    playerChoice != null);
  if (playerChoice == "cancel") {
    return 0;
  } else {
    return playerChoice;
  }
}

function botPlay() {
  let x = Math.floor(Math.random() * 3);
  if (x == 0) {
    return "rock";
  } else if (x == 1) {
    return "scissors";
  }
  else {
    return "paper";
  }
}
