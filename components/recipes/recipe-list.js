import { useEffect, useState } from "react";
import RecipeItem from "./recipe-item";
import classes from "./recipe-list.module.css";

function RecipeList(props) {
  const { items } = props;

  const [category, setCategory] = useState();

  useEffect(() => {
    //get desserts category
  }, []);

  return (
    <div className="grid  grid-cols-12 px-3">
      <div className="col-span-2 border-r-2  border-r-gray-light">
        <div className="py-3 my-4 pb-6 border-b-2 border-b-gray-light">
          <h3 className=" md:text-3xl sm:text-base">Categories</h3>
        </div>
        <div>
          <a className="my-2 line-clamp-1 underline cursor-pointer capitalize">
            Categories1
          </a>
          <a className="my-2 line-clamp-1 underline cursor-pointer capitalize">
            category2
          </a>
        </div>
      </div>
      <div className="col-span-10">
        <div className="col-span-2 ">
          <div className="pb-3 my-4 border-b-2 border-b-gray-light">
            <p className="ml-4">Recipes / Desserts</p>
            <h3 className=" md:text-3xl sm:text-base ml-4">Desserts</h3>
          </div>
        </div>
        <ul className={`grid md:grid-cols-3 xl:grid-cols-4 gap-3 p-3`}>
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
      </div>
    </div>
  );
}

console.log("items");
export default RecipeList;
