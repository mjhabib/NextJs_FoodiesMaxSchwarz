import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <Link href='/blog/post1'>
        <h1>Blog post 1</h1>
      </Link>
      <Link href='/blog/post2'>
        <h1>Blog post 2</h1>
      </Link>
    </main>
  );
}
