import { MealsGrid } from '@src/components';
import { getAllMeals } from '@src/lib/meals';
import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsLoadingPage from './loading-out';

// with this separate function, we have full control over the fetching part of our data for purposes like adding loading components
async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
