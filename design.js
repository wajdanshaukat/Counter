// Get references to the DOM elements
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const timerDisplay = document.getElementById('timer');

let count = 0;
let timeLeft = 10;

timerDisplay.textContent = `Time left ${timeLeft} seconds`;

const countdown = setInterval(() => {
    timeLeft--;
    // using with ternary operator

    // timerDisplay.textContent = timeLeft < 10 ? `Time left 0${timeLeft} seconds` : `Time left ${timeLeft} seconds`;
    // using if else 
    if (timeLeft < 10) {
        timerDisplay.textContent = `Time left 0${timeLeft} seconds`;
    } else {
        timerDisplay.textContent = `Time left ${timeLeft} seconds`;
    }
    if (timeLeft <= 0) {
        clearInterval(countdown);
        incrementBtn.disabled = true;
    }
}, 1000);

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;
}
