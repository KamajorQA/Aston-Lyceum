'use client';
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import s from './header.module.css';
import { useSession } from 'next-auth/react';

const userNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Auditorium', href: '/auditorium' },
  { label: 'About', href: '/about' },
];

const guestNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

function Header() {
  const { status } = useSession();
  const isAuth = !!(status === 'authenticated');
  const navItems = isAuth ? userNavItems : guestNavItems;

  return (
    <header className={`container ${s.header}`}>
      <Navigation navLinks={navItems} styleClass={'wrapper'} />
      <UserMenu />
    </header>
  );
}

export { Header };
