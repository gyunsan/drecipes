import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Recipes in {humanReadableDate}</h1>
      <Button link='/recipes'>Show all recipes</Button>
    </section>
  );
}

export default ResultsTitle;
