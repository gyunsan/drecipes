import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import { getFeaturedRecipes } from '../helpers/api-util';
import RecipeList from '../components/recipes/recipe-list';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>dRecipes</title>
        <meta name='description' content='The most fun and simple way to eat better. The mission is to create a community of 100 million people who have improved their diet by 2050.' />
      </Head>

      {/* <Hero /> */}
      <FeaturedPosts posts={props.posts} />
     {/* <RecipeList items={FeaturedRecipes} /> */}


    </Fragment>
  );
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}


export default HomePage;
