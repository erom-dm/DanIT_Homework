//////////////timer////////////////////////////
let divTimer = document.getElementById('timer');
divTimer.innerHTML = '0';
let currentTime = 0;

let flag = true;

let timer;
let startTimer = function () {
    let time = performance.now();
    flag = !flag;
    timer = setInterval(function () {
        divTimer.innerHTML = (parseInt(performance.now() - time) / 1000 +currentTime).toFixed(3);
    },1);
};

let stopTimer = function(){
    flag = !flag;
    clearInterval(timer);
    currentTime = +divTimer.innerHTML;
};

document.getElementById('button-stop').onclick = function(){
    if(flag){
        startTimer();
    } else {
        stopTimer();
    }
};