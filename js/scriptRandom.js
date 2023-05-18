document.addEventListener('DOMContentLoaded', () => {
    const mealList = document.getElementById('meal-list');
  
    // Realiza una solicitud a la API para obtener 1 comida aleatoria
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
  
        // Crea un elemento para mostrar la información de la comida
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal-card');
        mealElement.innerHTML = `
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        `;
        mealList.appendChild(mealElement);
      })
      .catch(error => {
        console.log('Error:', error);
      });

      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
  
        // Crea un elemento para mostrar la información de la comida
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal-card');
        mealElement.innerHTML = `
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        `;
        mealList.appendChild(mealElement);
      })
      .catch(error => {
        console.log('Error:', error);
      });

      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
  
        // Crea un elemento para mostrar la información de la comida
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal-card');
        mealElement.innerHTML = `
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        `;
        mealList.appendChild(mealElement);
      })
      .catch(error => {
        console.log('Error:', error);
      });

      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        const meal = data.meals[0];
  
        // Crea un elemento para mostrar la información de la comida
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal-card');
        mealElement.innerHTML = `
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        `;
        mealList.appendChild(mealElement);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  