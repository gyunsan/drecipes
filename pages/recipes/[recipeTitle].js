import { Fragment } from "react";

import { getRecipeByTitle, getAllRecipes } from "../../helpers/api-util";
import RecipeSummary from "../../components/recipe-detail/recipe-summary";
import RecipeLogistics from "../../components/recipe-detail/recipe-logistics";
import RecipeContent from "../../components/recipe-detail/recipe-content";
import ErrorAlert from "../../components/ui/error-alert";
import slugify from "slugify";

function RecipeDetailPage(props) {
  const recipe = props.seletedRecipe;

  if (!recipe) {
    return (
      <ErrorAlert>
        <p>No recipe found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <RecipeSummary title={recipe.title} />
      <RecipeLogistics
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        image={recipe.image}
        imageAlt={recipe.title}
      />
      <RecipeContent>
        <p>{recipe.description}</p>
      </RecipeContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const recipeTitle = context.params.recipeTitle;
  const recipe = await getRecipeByTitle(recipeTitle);

  return {
    props: {
      selectedRecipe: recipe || "",
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes();

  const paths = recipes.map((recipe) => ({
    params: { recipeTitle: slugify(recipe.title).toLocaleLowerCase() },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default RecipeDetailPage;
