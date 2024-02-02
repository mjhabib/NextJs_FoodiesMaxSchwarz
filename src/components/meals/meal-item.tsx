import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';
import { MealTypes } from '@src/types/mealTypes';

export default function MealItem({
  slug,
  title,
  image,
  summary,
  creator,
}: MealTypes) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
          {/* since width and height of images are required but we don't have those info because users can upload images, we used 'fill' property instead */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
