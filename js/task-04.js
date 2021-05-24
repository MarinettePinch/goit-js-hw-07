// Счетчик состоит из спана и кнопок, которые должны увеличивать 
//и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится 
//текущее значение счетчика.
// Создай функции increment и decrement для увеличения и 
//уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterEl = document.querySelector('#counter #value');

const counterValue = counterEl.textContent;

const counter = {
    value: counterValue,
    getValue() {
        return this.value;
    },
    increment() {
        this.value = Number(this.value)+1;
     },
    decrement() {
        this.value = Number(this.value)-1;
    },
};


const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');

const incrementBtn = document.querySelector('#counter button[data-action="increment"]');


const updateCounterValue = () => {
    counterEl.textContent = counter.getValue();
} 


incrementBtn.addEventListener('click', counter.increment.bind(counter));

incrementBtn.addEventListener('click', updateCounterValue.bind(counter));



decrementBtn.addEventListener('click', counter.decrement.bind(counter));

decrementBtn.addEventListener('click', updateCounterValue.bind(counter));



