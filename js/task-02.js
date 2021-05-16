//В HTML есть пустой список ul#ingredients.

//В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну операцию 
//в список ul.ingredients. Для создания DOM-узлов используй 
//document.createElement().


// Получаем доступ к списку ul#ingredients, создаём переменную
const listIngredients = document.querySelector('#ingredients');

// Перебираем массив ingredients

const itemsIngredients = ingredients.map((ingredient) => {
// создаём элементы на каждый пункт
  const item = document.createElement('li');

// вписываем значения ингридиентов в пункты списка
  item.textContent = ingredient;

// добавляем каждый пункт в конец списка ul#ingredients
  listIngredients.appendChild(item);

// возвращаем новый список
  return listIngredients;
});




