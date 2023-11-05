import { Metadata } from 'next';
import { PostList } from '@/components/PostList/PostList';
import { Search } from '@/components/Search/Search';

export const metadata: Metadata = {
  title: 'Auditorium | Aston Lyceum',
  description: 'List of provided instructions',
};

export default function Auditorium() {
  return (
    <section>
      <h1>Instruction posts</h1>
      <Search />
      <PostList />
    </section>
  );
}
