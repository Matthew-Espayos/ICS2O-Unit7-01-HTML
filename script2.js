// Creating variable to store numbers
let randomnumber = 0
let userguess = 0
// Connect "Guess" button to "random" function
document.getElementById('mybutton').addEventListener('click', randomizer)
// Get number typed in by user and convert it to integer
function randomizer () {
  userguess = document.getElementById('myinput').value
  userguess = parseInt(userguess)
  // Generate random number between 1 and 6
  randomnumber = (Math.random() * 6) + 1
  randomnumber = parseInt(randomnumber)
  // Compares user guess with random number
  if (userguess === randomnumber) {
    document.getElementById('myanswer').innerHTML = 'You win!'
  }
}
