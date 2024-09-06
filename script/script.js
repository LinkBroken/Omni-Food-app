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

const mealNavLink = document.getElementById("meal-link")
const priceNavLink = document.getElementById("pricing-link")
const testNavLink = document.getElementById("testimonies-link")
const homeNavLink = document.getElementById("Home-link");

homeNavLink.addEventListener("click", () => {
  console.log(document.getElementsByClassName("meal")[0])
  document.getElementsByClassName("app")[0].scrollIntoView({ behavior: "smooth" })
})
mealNavLink.addEventListener("click", () => {
  document.getElementsByClassName("meal")[0].scrollIntoView({ behavior: "smooth" })
})
testNavLink.addEventListener("click", () => {
  console.log(document.getElementsByClassName("test-header"))
  document.getElementsByClassName("test-header")[0].scrollIntoView(({ top: 10, behavior: "smooth" }))
})
priceNavLink.addEventListener("click", () => {
  document.getElementsByClassName("pricing-header")[0].scrollIntoView(({ top: 700, behavior: "smooth" }))
})