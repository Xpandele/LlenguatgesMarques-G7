document.addEventListener('DOMContentLoaded', () => {
  const mealList = document.getElementById('meal-list');
  const categorySelect = document.getElementById('category-select');
  const savedMeals = [];

  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
      const categories = data.categories;
      categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.strCategory;
        option.textContent = category.strCategory;
        categorySelect.appendChild(option);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });

  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    mealList.innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;
        meals.forEach(meal => {
          const mealElement = document.createElement('div');
          mealElement.classList.add('meal-card');
          mealElement.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          `;
          mealList.appendChild(mealElement);

          const mealImage = mealElement.querySelector('img');
          mealImage.addEventListener('mousedown', () => {
            saveMeal(meal);
          });
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  function saveMeal(meal) {
    savedMeals.push(meal);
  }

  function displaySavedMeals() {
    const savedMealsList = document.getElementById('saved-meals-list');
    savedMealsList.innerHTML = '';

    savedMeals.forEach(meal => {
      const mealElement = document.createElement('div');
      mealElement.classList.add('saved-meal');
      mealElement.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      `;
      savedMealsList.appendChild(mealElement);
    });
  }

  const showSavedMealsButton = document.getElementById('show-saved-meals-button');
  showSavedMealsButton.addEventListener('click', () => {
    displaySavedMeals();
  });
});
