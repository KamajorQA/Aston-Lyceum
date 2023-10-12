import Link from 'next/link';
import { Metadata } from 'next';
import s from './about.module.css';

export const metadata: Metadata = {
  title: 'About | My NextJS Blog',
  description: 'About page Next App',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={s.about}>
      <h1>About me</h1>
      <section className={s.details}>
        <nav className={s.aboutNav}>
          <Link href="/about">Brief</Link>
          <Link href="/about/stack">Stack</Link>
          <Link href="/about/contacts">Contacts</Link>
        </nav>
        <article className={s.description}>{children}</article>
      </section>
    </section>
  );
}
