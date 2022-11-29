import Image from 'next/image';
import classes from '../styles/heading.module.css';


function NotFoundPage() {
    return (
        <div>
            <h1 className={classes.title}>404 Page not found</h1>
            <Image
          src='/images/site/404-error.png'
          alt='404 error page not found'
          width={860}
          height={640}
        />
        </div>
    );
    
}

export default NotFoundPage;
