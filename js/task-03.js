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

// Пишем функцию создания одной строки:

const makeGalleryMarkup = ({url, alt}) => {
  // Создаем шаблонную строку и возвращаем её
  return `<li><img src="${url}" alt="${alt}" width="1200"></li>`;
}

// Перебираем массив объектов, присоединяем, получаем одну строку из строк
// тегов со свойствами

const imgString = images.map(makeGalleryMarkup).join('');

console.log(imgString);

// Итоговая запись - передаем для вставки готовую строку

galleryEl.insertAdjacentHTML('afterbegin', imgString);