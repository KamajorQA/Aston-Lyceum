import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/services/getPosts';
import s from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog | My NextJS Blog',
  description: 'List of blog articles',
};

export default async function Blog() {
  const posts = await getAllPosts();

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
