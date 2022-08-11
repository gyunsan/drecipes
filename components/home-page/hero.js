import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/logo.png'
          alt='An image showing drecipe logo'
          width={300}
          height={300}
        />
      </div>
      <h1>Drecipes is a community focused on healthy recipes and lifestyles.</h1>
      <p>
      A healthy lifestyle starts with good nutrition.
      </p>
    </section>
  );
}

export default Hero;
