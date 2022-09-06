import Image from 'next/image';



function NotFoundPage() {
    return (
        <div>
            <h1>Page not found</h1>
            <Image
          src='/images/site/404.jpg'
          alt='404 error page not found'
          width={860}
          height={640}
        />
        </div>
    );
    
}

export default NotFoundPage;