import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My stack',
  description: 'Current stack page',
};

export default function Stack() {
  return (
    <>
      <h4>My hard skills include:</h4>
      <p>
        JavaScript, TypeScript, React, Redux Toolkit, RTK Query, Firebase,
        Next.js
      </p>
      <p>CSS Modules, SCSS, Tailwind, AntDesign, Framer Motion</p>
      <p>Jest, NPM, GitHub Actions</p>
    </>
  );
}
