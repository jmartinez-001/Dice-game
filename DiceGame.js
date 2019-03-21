// (15 points): As a developer, I want to come up with a game concept played with dice,
// ensuring that my game concept is more complicated than “War”.

// (15 points): As a developer, I want my game to have gameplay functionality.

// (10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number),
// regardless of the number of sides.

// (10 points): As a developer, I want to utilize six different dice within my game.

// (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided.Different dice may be substituted.
// No 2-sided die.)

// (5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.


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
    totalScore = totalScore + runningScore;
    player1bank.innerHTML = totalScore;
    player1score.innerHTML = 0;
    player1total.innerHTML = 0;

  // return updateHighScores();
}

function turnScore(scoreoutput) {
  let score = ((parseInt(player1total.innerHTML)) + scoreoutput);
  return score;
}


  let score1 = document.getElementById('score1');
  let player1 = document.getElementById('name1');
  let score2 = document.getElementById('score2');
  let player2 = document.getElementById('name2');
  let score3 = document.getElementById('score3');
  let player3 = document.getElementById('name3');
  let score4 = document.getElementById('score4');
  let player4 = document.getElementById('name4');
  let score5 = document.getElementById('score5');
  let player5 = document.getElementById('name5');
  let score6 = document.getElementById('score6');
  let player6 = document.getElementById('name6');
  let score7 = document.getElementById('score7');
  let player7 = document.getElementById('name7');
  let score8 = document.getElementById('score8');
  let player8 = document.getElementById('name8');
  let score9 = document.getElementById('score9');
  let player9 = document.getElementById('name9');
  let score10 = document.getElementById('score10');
  let player10 = document.getElementById('name10');
  let scoreboard;

function updateHighScores() {

  let highScore1 = { 'score': score1.innerHTML, 'player': player1 };
  let highScore2 = { 'score': score2.innerHTML, 'player': player2 };
  let highScore3 = { 'score': score3.innerHTML, 'player': player3 };
  let highScore4 = { 'score': score4.innerHTML, 'player': player4 };
  let highScore5 = { 'score': score5.innerHTML, 'player': player5 };
  let highScore6 = { 'score': score6.innerHTML, 'player': player6 };
  let highScore7 = { 'score': score7.innerHTML, 'player': player7 };
  let highScore8 = { 'score': score8.innerHTML, 'player': player8 };
  let highScore9 = { 'score': score9.innerHTML, 'player': player9 };
  let highScore10 = { 'score': score10.innerHTML, 'player': player10 };
  let highScoreInput = { 'score': player1total.innerHTML, 'player': prompt("Please Enter Initials ***") };
  scoreboard = [highScore1, highScore2, highScore3, highScore4, highScore5, highScore6, highScore7, highScore8, highScore9, highScore10]
  highScoreArray();

function highScoreArray() {
  for (let i = 0; i < scoreboard.length; i++) {
    if (highScoreInput.score > parseInt(scoreboard[i].score)) {
      for (let j = scoreboard.length; j > i && j != i; j--) {
        scoreboard[j] = scoreboard[j - 1];
      }
      scoreboard[i] = highScoreInput;
      break;
    }
  }
  return scoreboard;
}
return;
}
