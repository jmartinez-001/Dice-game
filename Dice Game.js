// (15 points): As a developer, I want to come up with a game concept played with dice,
// ensuring that my game concept is more complicated than “War”.
// (15 points): As a developer, I want my game to have gameplay functionality.
// (10 points): As a developer, I want to have one function capable of “rolling a die” (by generating a random number),
// regardless of the number of sides.
// (10 points): As a developer, I want to utilize six different dice within my game.
// (Recommended dice are 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided.Different dice may be substituted.
// No 2-sided die.)
// (5 points): As a developer, I want to make consistent commits accompanied with good, descriptive commit messages.



function roll(n){

  let d4 = document.getElementById('dice1');
  let d6 = document.getElementById('dice2');
  let d8 = document.getElementById('dice3');
  let d10 = document.getElementById('dice4');
  let d12 = document.getElementById('dice5');
  let d20 = document.getElementById('dice6');

  function rollDice(n){
    let randomNumber = Math.floor(Math.random() * n + 1);
    return randomNumber;
}

  dice1.innerHTML = rollDice(4);
  dice2.innerHTML = rollDice(6);
  dice3.innerHTML = rollDice(8);
  dice4.innerHTML = rollDice(10);
  dice5.innerHTML = rollDice(12);
  dice6.innerHTML = rollDice(20);

}

let sum = d4 + d6 + d8 + d10 + d12 + d20;
let scoreoutput = 0;
let player1score = 0;
let player2score = 0;

function gameScoring(){

let score = d4.concat[d6,d8,d10,d12,d20];
let orderedarray = score.sort(compareNumbers);
let scorelength = orderedarray.length;
let scoreoutput = 0;

for (i = 0; i < scorelength; i++) {
  if (charAt(scorelength[i]) = 1) {
    i++;
  }
  else if (charAt(scorelength[i]) = 1) {
    return scoreoutput += 0;

  }
  else if (charAt(scorelength[i]-1) = 20) {
    return scoreoutput = 0;
  }
  else () {
    return scoreoutput = sum;
    break;
  }

}

player1score.innerHTML = gameScoring();
player2score.innerHTML = gameScoring();


}
