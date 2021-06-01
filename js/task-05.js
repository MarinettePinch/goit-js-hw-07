// // Напиши скрипт, который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее значение 
// в span#name-output. Если инпут пустой, в спане должна отображаться 
// строка 'незнакомец'.

const outputEl = document.querySelector('#name-output');

const inputEl = document.querySelector('#name-input');

const onInput = (event) => event.currentTarget.value ? outputEl.textContent = event.currentTarget.value : outputEl.textContent = 'незнакомец';

inputEl.addEventListener('input', onInput);
