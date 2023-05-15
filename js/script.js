// Espera a que se cargue el contenido del DOM antes de ejecutar el código JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const mealList = document.getElementById('meal-list');
  const categorySelect = document.getElementById('category-select');

  // Realiza una solicitud a la API para obtener las categorías de comida disponibles
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
      const categories = data.categories;

      // Rellena el menú desplegable con las categorías
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

  // Agrega un event listener para detectar cuando se selecciona una categoría
  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;

    // Limpia las comidas anteriores
    mealList.innerHTML = '';

    // Realiza una solicitud a la API para obtener las comidas de la categoría seleccionada
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;

        // Itera sobre las comidas y crea elementos para mostrar la información
        meals.forEach(meal => {
          const mealElement = document.createElement('div');
          mealElement.classList.add('meal-card');
          mealElement.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          `;
          mealList.appendChild(mealElement);

          // Agrega un event listener a la imagen de la comida para mostrar los detalles
          const mealImage = mealElement.querySelector('img');
          mealImage.addEventListener('click', () => {
            showMealDetails(meal);
          });
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  // Función para mostrar los detalles de una comida al hacer clic en la imagen
  function showMealDetails(meal) {
    // Crea un elemento div para mostrar los detalles de la comida
    const detailsElement = document.createElement('div');
    detailsElement.classList.add('meal-details');
    detailsElement.innerHTML = `
      <h3>Categoría: ${meal.strCategory}</h3>
      <p>Área: ${meal.strArea}</p>
      <p>Instrucciones: ${meal.strInstructions}</p>
    `;

    // Inserta los detalles después del contenedor de la lista de comidas
    mealList.parentNode.insertBefore(detailsElement, mealList.nextSibling);

    // Agrega un event listener para ocultar los detalles al hacer clic fuera del elemento
    document.addEventListener('click', event => {
      if (!detailsElement.contains(event.target)) {
        detailsElement.remove();
      }
    });
  }
});
