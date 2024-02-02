import { MealTypes } from '@src/types/mealTypes';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }: { meals: MealTypes[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={1}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
