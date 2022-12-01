import Button from "../ui/button";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./recipe-item.module.css";
import Image from "next/image";
import slugify from "slugify";

function RecipeItem(props) {
  const {
    title,
    image,
    id,
    description,
    ingredients,
    category,
    instructions,
    isFeatured,
  } = props;

  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/recipes/${slugify(title).toLocaleLowerCase()}`;

  return (
    <li className={`md:col-span-1 border-2 border-gray-light`}>
      {/* {isFeatured && <div className={classes.feature}>Feature</div>} */}
      <div className="flex flex-col">
        <div className="relative h-60">
          <Image
            src={"/" + image}
            alt={title}
            title={title}
            // width={300}
            // height={300}
            fill
            loading="lazy"
          />
        </div>

        <div className={`${classes.content}`}>
          <div className={`${classes.summary} p-2`}>
            <h2 className="md:text-lg font-bold  line-clamp-1 sm:text-base capitalize">
              {title}
            </h2>
            <div className={classes.date}>
              <p>{category}</p>
            </div>
            <div className=" h-20 h-10">
              <p className="line-clamp-2">{description}</p>
            </div>
            {/* <div className={classes.date}>
            <p>{ingredients}</p>
          </div> */}

            {/* <div className={classes.date}>
            <p>{instructions}</p>
          </div> */}
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Recipe</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecipeItem;
