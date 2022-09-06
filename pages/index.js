import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import { getFuturedEvents } from '../dummy-data';

function HomePage(props) {
  return (
    <Fragment>
      <Head>

        <title>dRecipes</title>
        <meta name='description' content='Drecipes is a community focused on healthy recipes and lifestyles. A healthy lifestyle starts with good nutrition.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
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
