

const respone_text = document.getElementById('result')

const form = document.getElementById('word-form')





form.addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formInputValue = $('#word-input').val();
  // grabs the input value of the form input area

  const response = await axios.post('/submit-form', { data: formInputValue });

  console.log(response.data);

  if (response.data.result === "ok") {
    displayWord(response.data.result);
    displayWordLength(response.data.word_length);
    displayTotalScore(response.data.total_score); // Display the total score
} else {
    // Handle other cases (not-on-board or not-word)
    displayWord(response.data.result);
    displayTotalScore(response.data.total_score); // Display the total score even for invalid words
}
$('#word-input').val('');
});

function displayWordLength(length) {
  const lengthDisplay = document.createElement('p');
  const lengthNode = document.createTextNode(`Length: ${length}`);
  lengthDisplay.appendChild(lengthNode);

  const lengthDiv = document.getElementById('word-length');
  lengthDiv.innerHTML = '';
  lengthDiv.appendChild(lengthDisplay);
}





 function displayWord(result){
    const text = document.createElement('p')
    const node = document.createTextNode(result)

    text.appendChild(node)

    while (respone_text.firstChild) {
      respone_text.removeChild(respone_text.firstChild)
    }


    respone_text.appendChild(text)


 }


 function displayTotalScore(score) {
  const scoreDisplay = document.createElement('p');
  const scoreNode = document.createTextNode(`Total Score: ${score}`);
  scoreDisplay.appendChild(scoreNode);

  const scoreDiv = document.getElementById('total-score');
  scoreDiv.innerHTML = '';
  scoreDiv.appendChild(scoreDisplay);
}
 

let timer = 60; // Initial time in seconds

// Function to update the timer display
function updateTimer() {
    document.getElementById('timer').textContent = timer;
}

// Function to stop the game when the timer reaches 0
function stopGame() {
  clearInterval(intervalId); // Stop the timer interval

  // Add code here to stop the game
  // For example:
  document.getElementById('word-input').disabled = true; // Disable input field
  document.getElementById('submit-button').disabled = true; // Disable submit button
  document.getElementById('game-over-message').textContent = 'Time\'s up! Game over.'; // Show game over message
}

// Update the timer display initially
updateTimer();

// Start the timer
const intervalId = setInterval(function() {
    timer--; // Decrement the timer
    updateTimer(); // Update the timer display

    // Check if the timer has reached 0
    if (timer === 0) {
        stopGame(); // Stop the game
    }
}, 1000);







