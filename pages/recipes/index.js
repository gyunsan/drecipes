import { useRouter } from "next/router";
import { Fragment } from "react";

import RecipeList from "../../components/recipes/recipe-list";
import { getAllCategory, getAllRecipes } from "../../helpers/api-util";
// import RecipesSearch from "../../components/recipes/recipes-search";

function AllRecipesPage(props) {
  const router = useRouter();
  const { recipes, categories = [], category = "" } = props;

  function findRecipesHandler(year, month) {
    const fullPath = `/recipes/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <RecipeList category={category} items={recipes} categories={categories} />
    </Fragment>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const recipes = await getAllRecipes(query);
    const categories = await getAllCategory();
    return {
      props: {
        recipes: recipes,
        categories: categories,
        ...query,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        recipes: { limitedRecipes: [], total: 0 },
        categories: [],
        ...query,
      },
    };
  }
}

export default AllRecipesPage;
