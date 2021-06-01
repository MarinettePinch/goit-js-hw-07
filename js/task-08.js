// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция. При нажатии 
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 
// параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть 
// шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {
    input: document.querySelector('#controls input'),
    renderBtn: document.querySelector('#controls button[data-action="render"]'),
    destroyBtn: document.querySelector('#controls button[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

let amount;

const minNumber = Number(refs.input.getAttribute('min'));
const maxNumber = Number(refs.input.getAttribute('max'));


refs.input.addEventListener('input', onInput);

function onInput (event){
    const number = Number(event.currentTarget.value);
    if (number%1 !== 0 || number < minNumber || number > maxNumber){
        alert(`Ошибка! Введите число от ${minNumber} до ${maxNumber}!`);
    } else {
        amount = number;
    }
    refs.input.addEventListener('blur', onInputBlur);
        
    function onInputBlur (event){
        event.currentTarget.value = '';
    }
}

const createBoxes = () => {

    const divArray = [];

    for(let i=0; i < amount; i+=1) {
        
        const divEl = document.createElement('div');
        
        divEl.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
        divEl.style.width = (i * 10 + 30)+'px';
        divEl.style.height = (i * 10 + 30)+'px';
        
        divArray.push(divEl);
    }

    refs.boxes.append(...divArray);
}

const destroyBoxes = () => {
    refs.boxes.innerHTML = '';
}



refs.renderBtn.addEventListener('click', createBoxes);

refs.destroyBtn.addEventListener('click', destroyBoxes);

