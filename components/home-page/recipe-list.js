import RecipeItem from "../recipes/recipe-item";
import classes from "./recipe-list.module.css";

function RecipeList(props) {
  const { items } = props;

  return (
    <ul className={`grid md:grid-cols-3 xl:grid-cols-4 gap-3 p-3r`}>
      {items.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          image={recipe.image}
          isFeatured={recipe.isFeatured}
          description={recipe.description}
        />
      ))}
    </ul>
  );
}

export default RecipeList;
