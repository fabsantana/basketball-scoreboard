// Home and Guest Score Containers
const homeScoreContainer = document.getElementById('home-score');
const guestScoreContainer = document.getElementById('guest-score');

// Home Increment Buttons
const homeIncrementOne = document.getElementById('home-1')
const homeIncrementTwo = document.getElementById('home-2')
const homeIncrementThree = document.getElementById('home-3')

// Guest Increment Buttons
const guestIncrementOne = document.getElementById('guest-1')
const guestIncrementTwo = document.getElementById('guest-2')
const guestIncrementThree = document.getElementById('guest-3')

const newGameBtn = document.getElementById('new-game');

let homeScore = 0;
let guestScore = 0;

// Home increment functions
function homeAddOne() {
    homeScore += 1;
    homeScoreContainer.textContent = homeScore;
}
function homeAddTwo() {
    homeScore += 2;
    homeScoreContainer.textContent = homeScore;
}
function homeAddThree() {
    homeScore += 3;
    homeScoreContainer.textContent = homeScore;
}

// Guest increment functions
function guestAddOne() {
    guestScore += 1;
    guestScoreContainer.textContent = guestScore;
}
function guestAddTwo() {
    guestScore += 2;
    guestScoreContainer.textContent = guestScore;
}
function guestAddThree() {
    guestScore += 3;
    guestScoreContainer.textContent = guestScore;
}

// New game
function newGame() {
    homeScore = 0;
    guestScore = 0;
    guestScoreContainer.textContent = guestScore;
    homeScoreContainer.textContent = homeScore;

}


homeIncrementOne.addEventListener('click', homeAddOne)
homeIncrementTwo.addEventListener('click', homeAddTwo)
homeIncrementThree.addEventListener('click',homeAddThree)

guestIncrementOne.addEventListener('click', guestAddOne)
guestIncrementTwo.addEventListener('click', guestAddTwo)
guestIncrementThree.addEventListener('click', guestAddThree)

newGameBtn.addEventListener('click', newGame)

homeScoreContainer.textContent = homeScore
guestScoreContainer.textContent = guestScore
