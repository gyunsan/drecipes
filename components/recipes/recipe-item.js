import Button from '../ui/button';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './recipe-item.module.css';

function RecipeItem(props) {
  const { title, image, id, description, ingredients, category, instructions } = props;

  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/recipes/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} title={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <p>{description}</p>
          </div>
          <div className={classes.date}>
            <p>{ingredients}</p>
          </div>
          <div className={classes.date}>
            <p>{category}</p>
          </div>
          <div className={classes.date}>
            <p>{instructions}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Recipe</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RecipeItem;
