import RecipesSearch from "../components/recipes/recipes-search";

export async function getAllRecipes() {
  const response = await fetch("https://react-getting-started-4835f-default-rtdb.firebaseio.com/recipes.json");
  const data = await response.json();

  const recipes = [];

  for (const key in data) {
    recipes.push({
      id: key,
      ...data[key],
    });
  }

  return recipes;
}

export async function getFeaturedRecipes() {
  const allRecipes = await getAllRecipes();
  return allRecipes.filter((recipe) => recipe.isFeatured);
}


export async function getRecipeById(id) {
  const allRecipes = await getAllRecipes();
  return allRecipes.find((recipe) => recipe.id === id);
}
