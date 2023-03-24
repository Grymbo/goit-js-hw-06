const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < ingredients.length; i++) {
    const li = document.createElement("li");
    li.textContent = ingredients[i];
    li.classList.add("item");
    fragment.appendChild(li);
  }
  
  ul.appendChild(fragment);
