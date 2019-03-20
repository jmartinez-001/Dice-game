// (15 points): As a developer, I want to come up with a game concept played with dice,
// ensuring that my game concept is more complicated than “War”.

// (15 points): As a developer, I want my game to have gameplay functionality.

// (10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number),
// regardless of the number of sides.

// (10 points): As a developer, I want to utilize six different dice within my game.

// (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided.Different dice may be substituted.
// No 2-sided die.)

// (5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.


// let d4 = document.getElementById('dice1');
// let d6 = document.getElementById('dice2');
// let d8 = document.getElementById('dice3');
// let d10 = document.getElementById('dice4');
// let d12 = document.getElementById('dice5');
// let d20 = document.getElementById('dice6');

let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice3 = document.getElementById('dice3');
let dice4 = document.getElementById('dice4');
let dice5 = document.getElementById('dice5');
let dice6 = document.getElementById('dice6');
let player1score = document.getElementById('player1score');
let player1total = document.getElementById('player1total');
let player1bank = document.getElementById('player1bank');

function startGame() {

  dice1.innerHTML = 0;
  dice2.innerHTML = 0;
  dice3.innerHTML = 0;
  dice4.innerHTML = 0;
  dice5.innerHTML = 0;
  dice6.innerHTML = 0;
  player1score.innerHTML = 0;
  player1total.innerHTML = 0;
  player1bank.innerHTML = 0;
}

let d4s;
let d6s;
let d8s;
let d10s;
let d12s;
let d20s;
let totalScore = 0;
let totalTurn = 0;
let runningScore= 0;

function roll() {

  d4s = rollDice(4);
  d6s = rollDice(6);
  d8s = rollDice(8);
  d10s = rollDice(10);
  d12s = rollDice(12);
  d20s = rollDice(20);

  dice1.innerHTML = d4s;
  dice2.innerHTML = d6s;
  dice3.innerHTML = d8s;
  dice4.innerHTML = d10s;
  dice5.innerHTML = d12s;
  dice6.innerHTML = d20s;

  let totalScore = gameScoring();
  // let player1bank = document.getElementById('player1bank');

}

function rollDice(n) {
  let randomNumber = Math.floor(Math.random() * n + 1);
  return randomNumber;
}

function gameScoring() {
  totalScore;
  let totalTurn = player1score.innerHTML;
  let sum = d4s + d6s + d8s + d10s + d12s + d20s;
  scoreoutput = sum;
  let scorearray = [d4s, d6s, d8s, d10s, d12s, d20s];
  let orderedarray = scorearray.sort(function(a, b) {
    return a - b
  });
  let scorelength = orderedarray.length;
  // orderedarray[0] = 1;
  // orderedarray[1] = 1;
  if (orderedarray[0] == 1 && orderedarray[1] == 1) {
    scoreoutput = 0;
    runningScore = 0;
    totalScore = 0;
  }
  if ((orderedarray[scorelength - 1]) == 20) {
    scoreoutput = 0;
    runningScore = 0;
  } else {
    runningScore = turnScore(scoreoutput);
  }

  player1score.innerHTML = scoreoutput;
  player1total.innerHTML = runningScore;
  player1bank.innerHTML = totalScore;
  return;
}

function bankScore() {
  // if (scoreoutput != 0 && runningScore != 0) {
    totalScore = totalScore + runningScore;
    player1bank.innerHTML = totalScore;
    player1score.innerHTML = 0;
    player1total.innerHTML = 0;
  // }
  return;
}

function turnScore(scoreoutput) {
  let score = ((parseInt(player1total.innerHTML)) + scoreoutput);
  return score;
}
