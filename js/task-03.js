//Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img 
// вложенных в li. Для создания разметки используй 
// шаблонные строки `Здесь вставить кусок кода ${value}` и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами 
//или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Получаем доступ к ul#gallery

const galleryEl = document.querySelector('#gallery');

// Пишем функцию создания элемента:

const makeElGallery = ({url, alt}) => {
  // Создаем элемент li
  const item = document.createElement('li');
  
// Создаем элемент img
  const picture = document.createElement('img');

// Присваиваем элементу img атрибуты
picture.setAttribute('url', url);
picture.setAttribute('alt', alt);  
  
  // Вкладываем img в li
 item.appendChild(picture);

 // Возвращаем готовый элемент
  return item;
}


// Перебираем массив объектов, получаем массив тегов со свойствами

const imagesEl = images.map(makeElGallery);

//console.log(imagesEl);

//galleryEl.append(...imagesEl);



// Преобразуем полученный массив в строку
//const imgString = f;

// Итоговая запись - передаем для вставки готовую строку

//galleryEl.insertAdjacentHTML(afterbegin, imgString);