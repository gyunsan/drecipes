import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllRecipes } from "../../helpers/api-util";
import RecipeList from "../../components/recipes/recipe-list";
// import RecipesSearch from '../../components/recipes/recipes-search';

function AllRecipesPage(props) {
  const router = useRouter();
  const { recipes } = props;

  function findRecipesHandler(year, month) {
    const fullPath = `/recipes/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      {/* <RecipesSearch onSearch={findRecipesHandler} /> */}
      <RecipeList items={recipes} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const recipes = await getAllRecipes();

  return {
    props: {
      recipes: recipes,
    },
    revalidate: 60,
  };
}

export default AllRecipesPage;
