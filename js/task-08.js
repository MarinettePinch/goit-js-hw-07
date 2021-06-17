const refs = {
    controls: document.querySelector('#controls'),
    boxes: document.querySelector('#boxes'),
    renderBtn: document.querySelector('#controls button[data-action="render"]'),
    destroyBtn: document.querySelector('#controls button[data-action="destroy"]')
}

refs.controls.addEventListener('click', onButtonRenderClick);

refs.controls.addEventListener('click', onButtonDestroyClick);

function onButtonRenderClick(event) {
    
    if (event.target !== refs.renderBtn) return;

    const num = Number(event.currentTarget.firstElementChild.value);

    createBoxes(num);
}

let size = 30;

function onButtonDestroyClick(event) {
    
    if (event.target !== refs.destroyBtn) return;

    event.currentTarget.firstElementChild.value = '';

    refs.boxes.innerHTML = '';

    size = 30;

}

const rgbRandom = () => {
    return Math.floor(Math.random() * 255);
}


class Div {

  constructor(red, green, blue, size) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.width = size;
    this.height = size;
  }

  getSting() {
    return `<div style="background-color: rgb(${this.red}, ${this.green}, ${this.blue}); width: ${this.width}px; height: ${this.height}px;"></div>`;
  }

}


function createBoxes(amount) {

    const divArray = [];
      

    for (let i = 0; i < amount; i += 1) {
        
        
        const div = new Div(rgbRandom(), rgbRandom(), rgbRandom(), size);
        
        size += 10;
        
        divArray.push(div.getSting());
    }

    refs.boxes.insertAdjacentHTML('beforeend', divArray.join(''));
}
