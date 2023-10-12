import { Metadata } from 'next';
import Link from 'next/link';
import s from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | My NextJS Blog',
  description: 'List of blog articles',
};

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Server error: unable to fetch data');
  }

  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog posts</h1>
      <section className={s.content}>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </section>
    </>
  );
}
