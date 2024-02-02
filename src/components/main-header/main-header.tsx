import Link from 'next/link';
import Image from 'next/image';
import classes from './main-header.module.css';
import logoImg from '@root/public/logo.png';
import MainHeaderBackground from './main-header-bg';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} alt='A plate with food on it' priority />
          Foodies
        </Link>
        <NavLink />
      </header>
    </>
  );
}
