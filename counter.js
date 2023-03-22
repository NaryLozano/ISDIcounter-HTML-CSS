const counter = document.querySelector('.counter');
const increaseNumber = document.querySelector('.button-increment');
const decreaseNumber = document.querySelector('.button-decrement');
const restartNumber = document.querySelector('.button-restart');
let numberCounter = 0;

const increase = () => {
    if( numberCounter < 10){
        numberCounter++;
        counter.innerHTML = numberCounter;
    }
}

const decrease = () => {
    if(numberCounter > 0){
        numberCounter--;
        counter.innerHTML = numberCounter;
    }
}

const restartCounter = () => {
    numberCounter = 0;
    counter.innerHTML = numberCounter;
}

increaseNumber.addEventListener('click',increase);
decreaseNumber.addEventListener('click',decrease);
restartNumber.addEventListener('click',restartCounter);