
import LogisticsItem from './logistics-item';
import classes from './recipe-logistics.module.css';
import Image from 'next/image';

function RecipeLogistics(props) {
  const { title, image, id, description, ingredients, category, instructions } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
      <Image src={`/${image}`} alt={title} />
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
