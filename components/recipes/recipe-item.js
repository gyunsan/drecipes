import Link from 'next/link';

function RecipeItem() {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formatedAddress = location.replace(', ', '\n');
    const exploreLink = `/recipes/${id}`;

  return <li>
    <img src={'/recipes/' + image} alt={title} />
    <div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <time>{date}</time>
        </div>
        <div>
            <address>{formatedAddress}</address>
        </div>
        <div>
            <Link href="/">Explore Recipe</Link>
        </div>
    </div>
  </li>;
}

export default RecipeItem;
