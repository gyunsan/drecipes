import slugify from "slugify";

export let allRecipes = [];
export async function getAllRecipes({ page = 1, category, search }) {
  console.log(page, category);
  let limitedRecipes = [];
  if (!allRecipes.length) {
    const response = await fetch(
      "https://react-getting-started-4835f-default-rtdb.firebaseio.com/recipes.json",
    );
    const data = await response.json();

    const recipes = [];

    for (const key in data) {
      recipes.push({
        id: key,
        ...data[key],
      });
    }
    allRecipes = recipes;
  }
  limitedRecipes = allRecipes;
  if (category) {
    limitedRecipes = limitedRecipes.filter(
      (recipe) => recipe.category === category.split("-").join(" "),
    );
  }
  if (search) {
    console.log(search, "asdf");
    limitedRecipes = limitedRecipes.filter((recipe) =>
      recipe.title.toLocaleLowerCase().startsWith(search?.toLocaleLowerCase()),
    );
  }
  let pagination = [];

  if (page) {
    pagination = limitedRecipes.slice(page * 12 - 12, 12 + page * 12 - 12);
  }
  return { limitedRecipes: pagination, total: limitedRecipes.length };
}

export async function getAllRecipesWithAllData() {
  const response = await fetch(
    "https://react-getting-started-4835f-default-rtdb.firebaseio.com/recipes.json",
  );
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

export async function getAllCategory() {
  const response = await fetch(
    "https://react-getting-started-4835f-default-rtdb.firebaseio.com/categories.json",
  );
  const data = await response.json();

  const categories = [];

  for (const key in data) {
    if (!categories.includes(data[key].categoryTitle))
      categories.push(data[key].categoryTitle);
  }

  return categories;
}

export async function getFeaturedRecipes() {
  const allRecipes = await await getAllRecipesWithAllData();
  return allRecipes.filter((recipe) => recipe.isFeatured);
}

export async function getRecipeByTitle(title) {
  const allRecipes = await await getAllRecipesWithAllData();

  const recipe = allRecipes.find((recipe) => {
    return slugify(recipe.title).toLocaleLowerCase() === title;
  });
  return recipe;
}
