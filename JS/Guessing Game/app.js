// guessField
// submitButton


const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
// console.log(answer);
document.getElementById("submitButton").onclick = function () {  
let guess =                     document.getElementById("guessField").value;
    guesses +=1;
  if (guess == answer) {
    alert(`${answer}  is correct!!!. It took you ${guesses} times to guess`);
  } else if(guess < answer) {
    alert(`${guess} is too small`);
  }
  else {
    alert(`${guess} is too large`);
  }
}