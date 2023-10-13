'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './navigation.module.css';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <nav className={s.wrapper}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        const linkClassName = isActive ? 'active' : '';
        return (
          <Link key={link.label} href={link.href} className={linkClassName}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { Navigation };
