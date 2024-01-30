import { Metadata } from 'next';
import { ReactNode } from 'react';
import NavBar from './NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS Food App',
  description: 'Followed by Max Schwarz',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
