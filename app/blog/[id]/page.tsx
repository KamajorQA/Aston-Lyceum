import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: `${id} blog post`,
    description: `${id} post page`,
  };
}

export default function Post({ params: { id } }: Props) {
  return <h1>Post #{id} page</h1>;
}
