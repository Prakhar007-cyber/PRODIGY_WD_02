let startTime, updatedTime, difference, tInterval, running = false;

const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('display');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopButton.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(tInterval);
        startStopButton.textContent = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    running = false;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
