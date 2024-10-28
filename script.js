let score = 0;
let currentNumber = 0;
let interval;
let speed = 1000;
let already_clicked = false;

function rozpocznijGre() {
    interval = setInterval(los, speed);
}

function los() {
    already_clicked = false
    currentNumber = Math.floor(Math.random() * 100);
    document.querySelector('.number').innerText = `Liczba: ${currentNumber}`;
}

document.querySelector(".speed").onchange = () => {
    clearInterval(interval);

    const speed_bar = document.querySelector('.speed') 
    speed = speed_bar.max - speed_bar.value;

    rozpocznijGre();
}

document.getElementById("dzikImage").onclick = () => {
    if (!already_clicked) {
        if (currentNumber % 7 === 0 || currentNumber.toString().includes('7')) {
            score++;
            already_clicked = true
        } else {
            score = 0    
        }
    }
    document.querySelector('.score').innerText = `Wynik: ${score}`;
}

rozpocznijGre()