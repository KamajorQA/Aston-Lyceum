import { Navigation } from '../Navigation/Navigation';
import s from './header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

function Header() {
  return (
    <header className={`container ${s.header}`}>
      <Navigation navLinks={navItems} />
    </header>
  );
}

export { Header };
