const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');


// List of words for game
const words = [
  'music',
  'engineering',
  'venkateshwara',
  'information',
  'technlogy',
  'lockdown',
  'online classes',
  'network problem',
  'bandwidth problem',
  'weak connection',
  'fever',
  'body pain',
  'negativity',
  'study holidays',
  'corona',
  'china',
  'vaccine',
  'covaxin',
  'covidshield',
  'cowin',
  'cold',
  'hospital',
  'mask',
  'holiday',
  'chennai',
  'India',
  'Tamilnadu',
  'canteen',
  'flood',
  'december',
  'boat ride'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 15;

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Times up. U ran out of time.</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText.toUpperCase() === randomWord.toUpperCase()) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

      time += 3;

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});