import Link from 'next/link';
import s from './header.module.css';

function Header() {
  return (
    <header className={`container ${s.header}`}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export { Header };
