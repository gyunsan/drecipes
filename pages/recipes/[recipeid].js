import { Fragment } from "react";

import { getRecipeById, getAllRecipes } from "../../helpers/api-util";
import RecipeSummary from "../../components/recipe-detail/recipe-summary";
import RecipeLogistics from "../../components/recipe-detail/recipe-logistics";
import RecipeContent from "../../components/recipe-detail/recipe-content";
import ErrorAlert from "../../components/ui/error-alert";

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
  const recipeId = context.params.recipeId;

  const recipe = await getRecipeById(recipeId);

  return {
    props: {
      seletedRecipe: recipe,
    },
  };
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes();

  const paths = recipes.map((recipe) => ({ params: { recipeId: recipe.id } }));

  return {
    paths: paths,
    fallback: false
  };
}

export default RecipeDetailPage;
