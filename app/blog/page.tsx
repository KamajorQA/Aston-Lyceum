import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | My NextJS Blog',
  description: 'List of blog articles',
};

export default function Blog() {
  return (
    <h1>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Est ea iste dolorem natus.</div>
      <div>Recusandae pariatur asperiores totam tempore.</div>
    </h1>
  );
}
