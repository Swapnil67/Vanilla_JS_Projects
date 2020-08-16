const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const container = document.querySelector('.container');

const scores = {
    'dice1': 1,
    'dice2': 2,
    'dice3': 3,
    'dice4': 4,
    'dice5': 5,
    'dice6': 6
}

function getRandomNum() {
    // Random number between 1 to 6
    return Math.floor((Math.random() * 6) + 1);
}

img1Src = img1.getAttribute('src');


function checkWinner(ran1, ran2) {
    if (ran1 === ran2) {
        document.querySelector('h1').innerHTML = "Its a tie! 😶";
    } else if (ran1 > ran2) {
        console.log('Image one won');
        document.querySelector('h1').innerHTML = "🚩 Player 1 wins!"
    } else {
        console.log('Image twos won');
        document.querySelector('h1').innerHTML = "Player 2 wins! 🚩"
        return 2;
    }
}

function setImages() {
    let random1 = getRandomNum();
    let random2 = getRandomNum();
    img1.setAttribute('src', `./images/dice${random1}.png`);
    img2.setAttribute('src', `./images/dice${random2}.png`);
    const winner = checkWinner(random1, random2);
    console.log(winner);
}
setImages();