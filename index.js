const showTimer = document.querySelector(".showTimer");
let startTimer;
let elapsedTime = 0;
let timerInterval;

function startFunction(){
    console.log("function log ");
    startTimer = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTimer;
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor(elapsedTime % 60000) / 1000;
        let miliseconds = elapsedTime % 1000;
        document.getElementById("showTimer").innerHTML = `${minutes}:${seconds}:${miliseconds}`;

    }, 10);
}

function stopFunction() {
    clearInterval(timerInterval);
}

function resetFunction() {
    document.getElementById("showTimer").innerHTML = `00:00:00`;
}