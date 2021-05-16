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

// 1. Написать функцию подсчёта длины массива:
const countLengthArray = (array) => array.length;

// 2. Написать функцию создания сообщения
const creationMessage = (value) => `В списке ${value} категории.`;

// 3. Получить массив объектов li.item
const categories = document.querySelectorAll('.item');

// 4. Вывести в консоль строку 'В списке n категории.'
console.log(creationMessage(countLengthArray(categories)));

// 5. Получить доступ к пунктам категорий, перебрав массив, не изменяя его

[...categories].forEach((category) => {
// 6. Вывести все заголовки
    console.log('Категория:', category.firstElementChild.textContent);
// 7. Получить все массивы - списки с li, осчититать их длину 
    console.log('Количество элементов:', category.lastElementChild.children.length);
});
