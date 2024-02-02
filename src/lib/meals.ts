import { MealTypes } from '@src/types/mealTypes';
import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all() as MealTypes[];
}
