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

// возвращаем массив из строк с валидной разметкой 
// с тегами li и текстом из исходного массива
  return item.outerHTML;
});

// превращаем полученный массив с строку с разделителем ' ',
// а затем браузет распарсит её и превратит их в валидные li 
// внутри списка ul.ingredients

listIngredients.innerHTML = itemsIngredients.join(' ');




