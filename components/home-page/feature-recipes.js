import React from "react";
import classes from "./featured-posts.module.css";
import RecipeList from "./recipe-list";

export default function FeatureRecipes({ recipes }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Recipes</h2>
      <RecipeList items={recipes} />
    </section>
  );
}
