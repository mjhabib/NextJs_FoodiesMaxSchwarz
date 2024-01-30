import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <Image
        src='/logo.png'
        alt='A server surrounded by magic sparkles.'
        width={500}
        height={500}
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}
