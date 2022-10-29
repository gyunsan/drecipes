import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredRecipes } from '../../dummy-data';
import RecipeList from '../../components/recipes/recipe-list';
import ResultsTitle from '../../components/recipes/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredRecipesPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/recipes'>Show All Recipes</Button>
        </div>
      </Fragment>
    );
  }

  const filteredRecipes = getFilteredRecipes({
    year: numYear,
    month: numMonth,
  });

  if (!filteredRecipes || filteredRecipes.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No recipes found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/recipes'>Show All Recipes</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <RecipeList items={filteredRecipes} />
    </Fragment>
  );
}

export default FilteredRecipesPage;
