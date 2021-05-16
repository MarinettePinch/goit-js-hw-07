//В HTML есть список категорий ul#categories.

//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories, 
//то есть элементов li.item. Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента (тега h2) и 
//количество элементов в категории (всех вложенных в него элементов li).

//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4

// 1. Написать функцию создания сообщения
const creationMessage = (value) => `В списке ${value} категории.`;

// 2. Получить массив объектов li.item
const categories = document.querySelectorAll('#categories .item');

// 3. Вывести в консоль строку 'В списке n категории.'
console.log(creationMessage((categories).length));

// 4. Получить доступ к пунктам категорий, перебрав массив, не изменяя его

[...categories].forEach((category) => {
// 5. Вывести все заголовки
  const titleEl = category.querySelector('h2');
    console.log('Категория:', titleEl.textContent);
// 6. Получить все массивы-списки с li, подсчититать их длину 
  const liEl = category.querySelector('ul').children;
    console.log('Количество элементов:', liEl.length);
});
