let timerElement = document.getElementById('timer');
let bell = document.getElementById('bell');
let interval;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function countdown(seconds, callback) {
    let remaining = seconds;
    timerElement.innerHTML = formatTime(remaining);

    interval = setInterval(() => {
        remaining--;
        timerElement.innerHTML = formatTime(remaining);
        
        if (remaining <= 0) {
            clearInterval(interval);
            bell.play();
            if (callback) callback();
        }
    }, 1000);
}

function startTimers() {
    countdown(120, () => {
        countdown(120, () => {
            countdown(120);
        });
    });
}

function startSingleTimer(minutes) {
    countdown(minutes * 60);
}

function stopTimer() {
    clearInterval(interval);
    timerElement.innerHTML = '00:00';
}
