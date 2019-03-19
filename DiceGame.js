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

let d4s;
let d6s;
let d8s;
let d10s;
let d12s;
let d20s;

function roll(){

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

  gameScoring();

}

function rollDice(n){
  let randomNumber = Math.floor(Math.random() * n + 1);
  return randomNumber;
}

// let scoreoutput;

function gameScoring() {

  let player1score = document.getElementById('player1score');
  // let player2score = document.getElementById('player2score');

  let sum = d4s + d6s + d8s + d10s + d12s + d20s;
  let scoreoutput = sum;
  let score = [d4s, d6s, d8s, d10s, d12s, d20s];
  let orderedarray = score.sort(function(a, b) {
    return a - b
  });
  let scorelength = orderedarray.length;
  // let snakeeyescount = 0;

  for (i = 0; i < scorelength; i++) {
    if ((orderedarray.indexOf(1, 0)) == 1) {
      if ((orderedarray.indexOf(1, 1)) == 1) {
        return scoreoutput += 0;
      }
    } else if ((orderedarray.lastIndexOf(20)) == 20) {
      return scoreoutput = 0;
    } else {
      return scoreoutput;
    }

    player1score.innerHTML = scoreoutput;
    // player2score.innerHTML = scoreoutput;

  }



}
