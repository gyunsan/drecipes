import { Fragment } from 'react';
import Head from 'next/head';
import classes from '../styles/heading.module.css';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <div><h1 className={classes.title}>Contact</h1></div>
      {/* <h2 className={classes.h2}>
        Drecipes is a community focused on healthy recipes and lifestyles. A
        healthy lifestyle starts with good nutrition.
      </h2> */}
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
