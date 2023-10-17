import { Metadata } from 'next';
import { PostList } from '@/components/PostList/PostList';
import { Search } from '@/components/Search/Search';

export const metadata: Metadata = {
  title: 'Blog | My NextJS Blog',
  description: 'List of blog articles',
};

export default function Blog() {
  return (
    <>
      <h1>Blog posts</h1>
      <Search />
      <PostList />
    </>
  );
}
