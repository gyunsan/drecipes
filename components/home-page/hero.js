import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      {/* <div className={classes.image}>
        <Image
          src='/images/site/slider.png'
          alt='An image showing drecipe logo'
          width={1920}
          height={400}
        />
      </div>
      <h1>A healthy lifestyle starts with good nutrition</h1> */}
    </section>
  );
}

export default Hero;
