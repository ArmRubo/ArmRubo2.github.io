const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const lap = document.querySelector('.lap');
const reset = document.querySelector('.reset');
const timer = document.querySelector('.timer');
const ul = document.querySelector('ul');
const btnContainer = document.querySelector('.btn-container');
const resetwdl = document.querySelector('.resetwdl');
let interval;
let hour = 0;
let minute = 0;
let second = 0;

startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetwdl.style.display = 'inline';
    stopBtn.style.display = 'inline';
    lap.style.display = 'inline';
    reset.style.display = 'inline';
    btnContainer.style.left = '27.5%';
    interval = setInterval(timerFunction, 1000)
})

stopBtn.addEventListener('click', function() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(interval);
})

ul.addEventListener('click', function(event) {
    if(event.target.className == 'close') {
        event.target.parentElement.remove();
    }
})

lap.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = timer.innerText;
    li.innerHTML += '<span class="close">&times;</span>';
    ul.appendChild(li);
})

reset.addEventListener('click', function() {
    hour = minute = second = 0;
    ul.innerHTML = '';
    startBtn.disabled = false;
    stopBtn.style.display = 'none';
    lap.style.display = 'none';
    reset.style.display = 'none';
    resetwdl.style.display = 'none';
    btnContainer.style.left = '41.5%';
    timer.innerText = addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
    clearInterval(interval);
})

resetwdl.addEventListener('click', function() {
    hour = minute = second = 0;
    startBtn.disabled = false;
    stopBtn.style.display = 'none';
    lap.style.display = 'none';
    reset.style.display = 'none';
    resetwdl.style.display = 'none';
    btnContainer.style.left = '41.5%';
    timer.innerText = addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
    clearInterval(interval);
})

function timerFunction() {
    second++;

    if(second == 60) {
        second = 0;
        minute++;

        if(minute == 60) {
            minute = 0;
            hour++;
        }
    }

    timer.innerText = addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
}

function addZero(num) {
    if(num < 10) {
        return '0' + num;
    }

    return num;
}