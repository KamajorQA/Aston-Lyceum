import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation/Navigation';
import s from './about.module.css';

export const metadata: Metadata = {
  title: 'About | Aston Lyceum',
  description: "Info about project's author",
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
      <h1>About author</h1>
      <section className={s.details}>
        <Navigation navLinks={navItems} styleClass={'aboutNav'} />
        <article className={s.description}>{children}</article>
      </section>
    </section>
  );
}
