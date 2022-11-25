import LogisticsItem from "./logistics-item";
import classes from "./recipe-logistics.module.css";
import Image from "next/image";

function RecipeLogistics(props) {
  const { title, image, id, description, ingredients, category, instructions } =
    props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image width={500} height={500} src={`/${image}`} alt={title} />
      </div>
      <ul className={classes.list}>
        <h3>Ingredients:</h3>
        <div>
          <p>{ingredients}</p>
        </div>
        <h3>Instructions:</h3>
        <div>
          <p>{instructions}</p>
        </div>
      </ul>
    </section>
  );
}

export default RecipeLogistics;
