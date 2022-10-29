
import LogisticsItem from './logistics-item';
import classes from './recipe-logistics.module.css';

function RecipeLogistics(props) {
  const { image, imageAlt, description, instructions, ingredients } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <h2>Ingredients:</h2>
        <div><p>{ingredients}</p></div>

     <div>
      <p>{instructions}</p>
      </div>
      </ul>
    </section>
  );
}

export default RecipeLogistics;
