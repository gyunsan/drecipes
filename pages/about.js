import classes from '../styles/heading.module.css';

function AboutPage() {
  return (
    <div>
      <h1 className={classes.title}>About</h1>
      <h2 className={classes.h2}>
        Drecipes is a community focused on healthy recipes and lifestyles. A
        healthy lifestyle starts with good nutrition.
      </h2>
      {/* <p>some text</p> */}
    </div>

  );
}

export default AboutPage;

