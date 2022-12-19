// get id
const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// time count
let startTime; //開始時間を記録
let stopTime = 0; //停止時間を記録
let timeoutId; // 時間のカウントを止める変数

// timer process
function timerDisplay() {
    const nowTime = new Date(Date.now() - startTime + stopTime);
    const hour = String(nowTime.getHours()-9).padStart(1, '0');
    const min = String(nowTime.getMinutes()).padStart(1, '0');
    const sec = String(nowTime.getSeconds()).padStart(1, '0');
    const msec = String(nowTime.getMilliseconds()).slice(-1);

    timer.textContent = `${hour}: ${min}: ${sec}: ${msec}`;
    timeoutId = setTimeout(timerDisplay, 100);
}


// start
startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    startTime = Date.now();
    timerDisplay();
})


// stop
stopBtn.addEventListener('click', function() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
    clearTimeout(timeoutId);
    stopTime += (Date.now() - startTime);
});

// reset
resetBtn.addEventListener('click', function() {
    resetBtn.disabled = true;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    timer.textContent = '0: 0: 0: 0';
    stopTime = 0;
})

