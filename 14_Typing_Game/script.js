const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const settingBtn = document.getElementById('settings-btn');
const settingForm = document.getElementById('setting-form');
const settings = document.getElementById('settings');
const endGameEl = document.getElementById('end-game-container');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

// Initialize variables
let randomWord;
let score = 0;
let time = 10;
let gameDifficulty = localStorage.getItem('gameDifficulty') !== null ? localStorage.getItem('gameDifficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('gameDifficulty') !== null ? localStorage.getItem('gameDifficulty') : 'medium';

const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array of words
const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
const addWordToDOM = () =>{
    randomWord = getRandomWord();
    wordEl.innerText = randomWord;
}

// Update the score
const updateScore = () => {
    score++;
    scoreEl.innerText = score;
}

// Update the time
function updateTime() {
    time--;
    timeEl.innerText = time + 's';
    if(time === 0){
        clearInterval(timeInterval)
        // END the game
        gameOver();
    }
}

// Game Over show end screen
function gameOver() {
    endGameEl.innerHTML =  `
    <h1>Time ran out</h1>
    <p>Your final score is: ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endGameEl.style.display = 'flex';
}


// Check if the entered word is correct
const checkWord = () => {
    // Event listeners
    textEl.addEventListener('input', (e) => {
        const insertedText = e.target.value;
        // console.log(insertedText);
        if(insertedText === randomWord){
            init();
            updateScore();
            // Clear the input
            e.target.value = '';
            // Setting difficulty
            if(gameDifficulty === 'hard'){
                time += 2;
            }else if(gameDifficulty === 'medium'){
                time += 3;
            }else{
                time += 5;
            }
            updateTime
        }
    });
}

// Settings btn click
settingBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');  
});


// Settings select 
settingForm.addEventListener('change', (e) => {
    gameDifficulty = e.target.value;
    // console.log(gameDifficulty);
    localStorage.setItem('gameDifficulty', difficulty);
});

//  Game Initializer
function init(){
    textEl.focus();
    addWordToDOM();
    checkWord();
}
init();

  
