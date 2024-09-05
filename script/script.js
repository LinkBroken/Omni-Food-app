const meals = document.querySelector(".meals");

async function fishMeals() {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(Response => Response.json())
    .then(async (data) => data?.meals.map((meal) => {
      const mealCard = document.createElement("span")
      const mealImage = document.createElement("img");
      const mealDescription = document.createElement("span")
      const mealName = document.createElement("p");
      const addButton = document.createElement("button")
      mealCard.className = "meal";
      mealDescription.className = "meal-description"
      addButton.className = "add-button"

      addButton.innerHTML = "Select";
      mealName.innerHTML = meal.strMeal
      mealImage.src = meal?.strMealThumb
      mealCard.appendChild(mealImage)
      mealDescription.appendChild(mealName)
      mealDescription.appendChild(addButton)
      mealCard.appendChild(mealDescription)

      meals.appendChild(mealCard)
    }))

}

fishMeals()
