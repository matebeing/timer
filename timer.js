"use stric5";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let time = 0;


document.form_timer.start.onclick = () => start();
document.form_timer.pause.onclick = () => pause();
document.form_timer.reset.onclick = () => reset();

const start = function() {
    pause();
    time = setInterval(() => { timer(); }, 10);
}

const pause = function() {
    clearInterval(time)
}

const reset = function() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}

const timer = function () {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }
  