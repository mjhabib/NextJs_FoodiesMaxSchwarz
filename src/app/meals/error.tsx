'use client';

export default function MealsErrorPage({ error }: { error: Error }) {
  return (
    <main className='error'>
      <h1>An error occurred!</h1>
      <p>Failed to fetch the data. Please try again later.</p>
      {/* <p>{error.message}</p> */}
      {/* this error.message is not meant for users */}
    </main>
  );
}
