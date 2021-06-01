// Напиши скрипт, который реагирует на изменение 

// значения input#font-size-control (событие input) 

// и изменяет инлайн-стиль span#text обновляя свойство font-size. 

// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

const fontSizeValues = ['10px', '12px', '14px', '16px', '18px', '24px', '36px'];

refs.input.addEventListener('input', onInputRangeInput);

function onInputRangeInput(event) {
    const rangeValue = Number(event.srcElement.value);
    if (rangeValue === 0) {
        refs.span.style.fontSize = fontSizeValues[0];
    };
    if (rangeValue > 0 && rangeValue < 25) {
        refs.span.style.fontSize = fontSizeValues[1];
    }; 
    if (rangeValue >= 25 && rangeValue < 40) {
        refs.span.style.fontSize = fontSizeValues[2];
    };
    if (rangeValue >= 40 && rangeValue < 60) {
        refs.span.style.fontSize = fontSizeValues[3];
    };
    if (rangeValue >= 60 && rangeValue < 75) {
        refs.span.style.fontSize = fontSizeValues[4];
    };
    if (rangeValue >= 75 && rangeValue < 100) {
        refs.span.style.fontSize = fontSizeValues[5];
    };
    if (rangeValue === 100) {
        refs.span.style.fontSize = fontSizeValues[6];
    };
}
