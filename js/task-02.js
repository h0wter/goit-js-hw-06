const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');
const ingr = [];
ingredients.forEach(item => {
    const ingredient = document.createElement('li');
    ingredient.textContent = item;
    ingredient.classList.add('item');
    ingredientsList.append(ingredient);
});
