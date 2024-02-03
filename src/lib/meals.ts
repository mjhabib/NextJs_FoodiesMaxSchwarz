import { MealTypes } from '@src/types/mealTypes';
import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all() as MealTypes[];
}

export function getMealBySlug(slug: string) {
  return db
    .prepare('SELECT * FROM meals WHERE slug = ?')
    .get(slug) as MealTypes;
}
