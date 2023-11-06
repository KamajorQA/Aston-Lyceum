import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { getServerSession } from 'next-auth';
import s from './header.module.css';

const userNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Auditorium', href: '/auditorium' },
  { label: 'About', href: '/about' },
];

const guestNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

async function Header() {
  const session = await getServerSession();
  const isAuth = !!session?.user;
  const navItems = isAuth ? userNavItems : guestNavItems;

  return (
    <header className={`container ${s.header}`}>
      <Navigation navLinks={navItems} styleClass={'wrapper'} />
      <UserMenu />
    </header>
  );
}

export { Header };
