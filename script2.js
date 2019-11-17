const buttons = document.querySelectorAll('button');
const bot = document.querySelector('#bot');
const player = document.querySelector('#player');
const msg = document.querySelector('.msg');
const round = document.querySelector('.round p');
let resultMsg = '';
let dark = '#333';
let blue = '#16affa';
let roundWin = 5;
let roundCount = 1;
let playerCount = 0;
let botCount = 0;
let end = false;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    bot.style.display = 'initial';
    player.style.display = 'initial';

    resetEnd();
    determineWinner(e.target.value);
    checkEnd();

    msg.textContent = resultMsg;
    round.textContent = roundCount;
    player.textContent = 'You: ' + playerCount + '/5';
    bot.textContent = 'Bot: ' + botCount + '/5'

  });
});

function determineWinner(playerChoice) {
  let result = playRound(playerChoice);
  if(result == "win") {
    playerCount++;
    roundCount++;
    playerWon();
  } else if (result == "lose") {
    botCount++;
    roundCount++;
    botWon();
  } else {
    roundCount++;
    player.style.color = dark;
    bot.style.color = dark;
  }
}

function checkEnd() {
  if(playerCount == roundWin || botCount == roundWin) {
    roundCount = 1;
    end = true;
    if(playerCount ==roundWin) {
      playerWon();
      resultMsg = 'Congratulations, you won!';
    } else {
      botWon()
      resultMsg = 'Nope. You lost.';
    }
  }
}

function resetEnd() {
  if(end) {
    playerCount = 0;
    botCount = 0;
    end = false;
  }
}

function playerWon() {
  player.style.color = blue;
  bot.style.color = dark;
}

function botWon() {
  bot.style.color = blue;
  player.style.color = dark;
}

function playRound(playerChoice) {
  let botChoice = botPlay();

  if (playerChoice == botChoice) {
    resultMsg = 'It\'s a draw.';
    return "draw";
  } else if (playerChoice == "scissors"){
    if (botChoice == "rock") {
      resultMsg = 'You lose: bot chose Rock';
      return "lose";
    } else {
      resultMsg = 'You win: bot chose Paper.';
      return "win";
    }
  } else if (playerChoice == "rock") {
    if (botChoice == "paper") {
      resultMsg = 'You lose: bot chose Paper.';
      return "lose";
    } else {
      resultMsg = 'You win: bot chose Scissors.';
      return "win";
    }
  } else {
    if (botChoice == "scissors") {
      resultMsg = 'You lose: bot chose Scissors.';
      return "lose";
    } else {
      resultMsg = 'You win: bot chose Rock.';
      return "win";
    }
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
