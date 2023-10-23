import { Metadata } from 'next';
import s from './about.module.css';
import { Navigation } from '@/components/Navigation/Navigation';

export const metadata: Metadata = {
  title: 'About | My NextJS Blog',
  description: 'About page Next App',
};

const navItems = [
  { label: 'Brief', href: '/about' },
  { label: 'Stack', href: '/about/stack' },
  { label: 'Contacts', href: '/about/contacts' },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={s.about}>
      <h1>About me</h1>
      <section className={s.details}>
        <Navigation navLinks={navItems} styleClass={'aboutNav'} />
        <article className={s.description}>{children}</article>
      </section>
    </section>
  );
}
