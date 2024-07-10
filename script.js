let timer;
let elapsed = 0;
let running = false;

document.getElementById('start').addEventListener('click', function() {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    running = true;
  }
});

document.getElementById('stop').addEventListener('click', function() {
  if (running) {
    clearInterval(timer);
    running = false;
  }
});

document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timer);
  elapsed = 0;
  document.getElementById('time').innerText = '00:00:00';
  running = false;
});

function updateTime() {
  elapsed++;
  let hours = Math.floor(elapsed / 3600);
  let minutes = Math.floor((elapsed % 3600) / 60);
  let seconds = elapsed % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
}
