import Head from "next/head";
import { Fragment } from "react";
import FeatureRecipes from "../components/home-page/feature-recipes";

import FeaturedPosts from "../components/home-page/featured-posts";
import RecipeList from "../components/recipes/recipe-list";
import { getFeaturedRecipes } from "../helpers/api-util";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  console.log(props);
  return (
    <Fragment>
      <Head>
        <title>drecipes</title>
        <meta
          name="description"
          content="The most fun and simple way to eat better. The mission is to create a community of 100 million people who have improved their diet by 2050."
        />
      </Head>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt USD-88452914 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
     <p>A</p>
      {/* <Hero /> */}
      <FeatureRecipes recipes={props.recipes} />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  const featureRecipe = await getFeaturedRecipes();

  return {
    props: {
      posts: featuredPosts,
      recipes: featureRecipe,
    },
    revalidate: 1000,
  };
}

export default HomePage;
