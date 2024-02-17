// function play() {
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // show play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
    const playerPresses = event.key;
    console.log('player pressed', playerPresses);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPresses, currentAlphabet);

    if (playerPresses === expectedAlphabet) {
        console.log('you get point');
        // update score

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;

        console.log(newScore);

        currentScoreElement.innerText = newScore;



        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed.you lost a life');

        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;
    }
    if (newLife === 0) {
        console.log('game over')
    }
}


// keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)



function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // display alphabet

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set bg color
    setBacgrounColorById(alphabet);


    // remove bg-color

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}